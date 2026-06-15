#!/usr/bin/env python3
"""Small deterministic public crawl for kimward.co.uk SEO runs.

No third-party dependencies. Prints Markdown for BASELINE/RUN_LOG use.
"""
from __future__ import annotations

from html.parser import HTMLParser
from urllib.parse import urljoin, urldefrag, urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from datetime import datetime, timezone
import json
import ssl
import sys

START_URL = "https://kimward.co.uk/"
MAX_PAGES = 25
TIMEOUT = 20


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_parts = []
        self.in_title = False
        self.meta = []
        self.links = []
        self.headings = []
        self._heading_tag = None
        self._heading_text = []
        self.canonicals = []
        self.json_ld = []
        self._script_type = None
        self._script_text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            self.meta.append(attrs)
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag in {"h1", "h2", "h3"}:
            self._heading_tag = tag
            self._heading_text = []
        rel = attrs.get("rel") or ""
        if tag == "link" and "canonical" in rel:
            self.canonicals.append(attrs.get("href", ""))
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self._script_type = attrs.get("type")
            self._script_text = []

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)
        if self._heading_tag:
            self._heading_text.append(data)
        if self._script_type:
            self._script_text.append(data)

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == self._heading_tag:
            text = " ".join("".join(self._heading_text).split())
            if text:
                self.headings.append((self._heading_tag, text))
            self._heading_tag = None
            self._heading_text = []
        if tag == "script" and self._script_type:
            text = "".join(self._script_text).strip()
            if text:
                self.json_ld.append(text)
            self._script_type = None
            self._script_text = []

    @property
    def title(self):
        return " ".join("".join(self.title_parts).split())

    def meta_content(self, *, name=None, prop=None):
        for m in self.meta:
            if name and m.get("name") == name:
                return m.get("content", "")
            if prop and m.get("property") == prop:
                return m.get("content", "")
        return ""


def fetch(url: str):
    req = Request(url, headers={"User-Agent": "KimWardSEOAudit/1.0"})
    try:
        with urlopen(req, timeout=TIMEOUT, context=ssl.create_default_context()) as r:
            body = r.read(1_000_000)
            return r.status, r.headers.get("content-type", ""), body, r.geturl(), None
    except HTTPError as e:
        return e.code, e.headers.get("content-type", ""), e.read(200_000), url, None
    except URLError as e:
        return 0, "", b"", url, str(e)


def same_site(url: str) -> bool:
    return urlparse(url).netloc in {"kimward.co.uk", "www.kimward.co.uk", ""}


def main():
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    queue = [START_URL]
    seen = set()
    pages = []
    while queue and len(pages) < MAX_PAGES:
        url = queue.pop(0)
        url, _ = urldefrag(url)
        if url in seen:
            continue
        seen.add(url)
        status, ctype, body, final_url, err = fetch(url)
        page = {"url": url, "final_url": final_url, "status": status, "content_type": ctype, "error": err}
        if status == 200 and "html" in ctype:
            html = body.decode("utf-8", errors="replace")
            p = PageParser(); p.feed(html)
            page.update({
                "title": p.title,
                "description": p.meta_content(name="description"),
                "canonical": p.canonicals[0] if p.canonicals else "",
                "h1": [t for tag, t in p.headings if tag == "h1"],
                "h2": [t for tag, t in p.headings if tag == "h2"],
                "og_title": p.meta_content(prop="og:title"),
                "og_description": p.meta_content(prop="og:description"),
                "json_ld_count": len(p.json_ld),
                "internal_links": [],
            })
            for href in p.links:
                absolute = urljoin(final_url, href)
                absolute, _ = urldefrag(absolute)
                if same_site(absolute):
                    page["internal_links"].append(absolute)
                    if absolute.startswith("http") and absolute not in seen and absolute not in queue:
                        queue.append(absolute)
        pages.append(page)

    robots = fetch(urljoin(START_URL, "/robots.txt"))
    sitemap = fetch(urljoin(START_URL, "/sitemap.xml"))

    print(f"# Public SEO Crawl — {now}\n")
    print(f"Start URL: `{START_URL}`")
    print(f"Pages crawled: {len(pages)}")
    print(f"Robots: `{robots[0]}` `{robots[1]}`")
    print(f"Sitemap: `{sitemap[0]}` `{sitemap[1]}`\n")
    print("## Pages\n")
    for p in pages:
        print(f"### {p['url']}")
        print(f"- Status: `{p['status']}`")
        print(f"- Final URL: `{p['final_url']}`")
        if p.get("error"):
            print(f"- Error: `{p['error']}`")
        if p.get("title") is not None:
            print(f"- Title: {p.get('title') or '[missing]'}")
            print(f"- Meta description: {p.get('description') or '[missing]'}")
            print(f"- Canonical: {p.get('canonical') or '[missing]'}")
            print(f"- H1: {', '.join(p.get('h1') or []) or '[missing]'}")
            print(f"- H2 count: {len(p.get('h2') or [])}")
            print(f"- OG title: {p.get('og_title') or '[missing]'}")
            print(f"- OG description: {p.get('og_description') or '[missing]'}")
            print(f"- JSON-LD blocks: {p.get('json_ld_count', 0)}")
        print()

    issues = []
    if sitemap[0] != 200:
        issues.append("/sitemap.xml does not return 200")
    for p in pages:
        if p.get("status") != 200:
            issues.append(f"{p['url']} returned {p.get('status')}")
        if p.get("title") is not None:
            if not p.get("description"):
                issues.append(f"{p['url']} missing meta description")
            if not p.get("canonical"):
                issues.append(f"{p['url']} missing canonical")
            if not p.get("og_title"):
                issues.append(f"{p['url']} missing og:title")
            if p.get("json_ld_count", 0) == 0:
                issues.append(f"{p['url']} missing JSON-LD")
    print("## Issues\n")
    if issues:
        for i in issues:
            print(f"- {i}")
    else:
        print("- No obvious issues from deterministic crawl.")


if __name__ == "__main__":
    main()
