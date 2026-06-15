# Autonomous SEO Agents and Handoff Rules

## seo_specialist — SEO owner

Owns SEO strategy, task selection, prioritisation, and final acceptance.

Responsibilities:

- Read `PLAN.md`, `BACKLOG.md`, `BASELINE.md`, and `RUN_LOG.md` before choosing work.
- Compare crawl/Search Console/analytics signals when available.
- Pick exactly one highest-priority routine task for nightly runs.
- Avoid asking Kim to choose routine SEO work.
- Keep work aligned to the current commercial target: UK Laravel/PHP contractor, Laravel rescue, inherited apps, internal tools, admin workflows, and reviewed AI workflows.
- Reject generic AI/agency filler and WordPress/fixed-price positioning.

## Technical implementation agent

Owns code/template changes:

- Metadata.
- Sitemap.
- `robots.txt`.
- Schema.org JSON-LD.
- Redirects.
- Canonicals.
- Open Graph/Twitter cards.
- Page template and component wiring.

Local checks:

- `npm run build`
- `composer test`
- `php artisan route:list --except-vendor` when routes change.

## Content agent

Owns content and intent alignment:

- Titles and descriptions.
- Headings.
- Buyer-specific page copy.
- Search intent fit.
- Tutorful proof/case-study wording.
- Confidentiality-safe proof claims.

Rules:

- Keep copy plain and buyer-specific.
- Use `hello@kimward.co.uk` as contact email.
- Do not invent metrics, testimonials, client logos, or private Tutorful details.
- Prefer concrete Laravel/internal-tool language over generic portfolio language.

## Performance agent

Owns performance and Core Web Vitals:

- Lighthouse checks.
- Image sizes/formats.
- Layout shift.
- Render-blocking resources.
- Asset size and caching review.

Rules:

- Do not add JS dependencies unless the performance impact is justified.
- Respect `prefers-reduced-motion`.

## QA/release agent

Owns release verification:

- Local build/test.
- Browser checks.
- Public HTTP smoke checks.
- Production deploy verification after Laravel Cloud.
- Link checks.

Required production checks after push:

- `https://kimward.co.uk/` returns 200.
- `https://kimward.co.uk/robots.txt` returns 200.
- If sitemap exists, `https://kimward.co.uk/sitemap.xml` returns 200 and references canonical URLs.
- Page title and meta description are present.
- Primary CTA mailto remains `hello@kimward.co.uk`.

## Rollback agent

Owns recovery when deploy or production verification fails:

1. Identify the last SEO commit from `git log`.
2. `git revert --no-edit <commit>`.
3. Run local smoke checks when feasible.
4. Push to `origin/main`.
5. Wait for Laravel Cloud redeploy.
6. Verify production recovery.
7. Append incident to `RUN_LOG.md` and leave blocker in `BACKLOG.md`.

## Reporting agent

Owns logs and hygiene:

- Update `RUN_LOG.md` every run.
- Update `BACKLOG.md` when blockers are discovered or resolved.
- Update `PLAN.md` after weekly/monthly strategy changes.
- Keep entries concise and evidence-backed.

## Direct-to-main deployment rules

For routine SEO work, do not create PRs. Default path:

Change → test/build/check → commit to `main` → push → Laravel Cloud deploys → verify production → log.

Create a PR only if direct push is technically blocked.
