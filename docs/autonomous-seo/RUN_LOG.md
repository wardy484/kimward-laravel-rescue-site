# Autonomous SEO Run Log

## 2026-06-15T01:45:03Z — Initial setup/discovery

Status: setup in progress.

Actions:

- Created `docs/autonomous-seo/` source-of-truth structure.
- Configured `seo_specialist` as strategy owner in `AGENTS.md`.
- Defined supporting handoff routes: technical implementation, content, performance, QA/release, rollback, reporting.
- Discovered repo/default branch/build/test commands.
- Confirmed Laravel Cloud app/environment and push-to-deploy behaviour.
- Attempted public crawl with `docs/autonomous-seo/scripts/crawl_public_site.py`.

Checks/discovery:

- `php artisan route:list --except-vendor`: one route, `/`.
- `https://kimward.co.uk/robots.txt`: 200.
- `https://kimward.co.uk/sitemap.xml`: 404.
- Search Console: not configured/available via current `gws` CLI.
- Analytics: no repo evidence found.

Blockers:

- Search Console property/API access not confirmed.
- Analytics access not confirmed.

Schedules created:

- Nightly SEO improvement: `384d4d469ca8`, `0 3 * * *`, next run `2026-06-15T03:00:00Z`.
- Weekly SEO strategy review: `3335aadbc94e`, `0 8 * * 1`, next run `2026-06-15T08:00:00Z`.
- Monthly technical SEO audit: `3b39b36d5122`, `0 7 1 * *`, next run `2026-07-01T07:00:00Z`.

Deployment/rollback:

- Direct-to-main path confirmed: commit `1eae1e6` pushed to `origin/main`.
- Laravel Cloud push-to-deploy is enabled for the app/environment.
- Public verification after push: homepage 200, robots 200, title/meta present.
- Rollback behaviour is configured in `AGENTS.md` and the nightly cron prompt: revert bad commit, push to main, verify recovery, log incident.

Likely first SEO task:

- Add sitemap, canonical, OG/Twitter metadata, and JSON-LD; update `robots.txt`.

## 2026-06-16T01:35:00Z — Crawlability metadata shipped; domain blocked

Status: code fix deployed, DNS/domain still blocking canonical site.

Actions:

- Added canonical homepage URL, Open Graph/Twitter metadata, JSON-LD structured data, and a server-rendered fallback H1/body inside the React root.
- Added `public/sitemap.xml` and referenced it from `public/robots.txt`.
- Committed and pushed `88e229e` to `main`.
- Triggered Laravel Cloud deploy `depl-a2087e63-4235-4da2-9596-e3b3ffa7c2ef`; deployment succeeded.

Verification:

- `npm run build`: passed.
- `composer test`: passed, 2 tests.
- `php artisan route:list --except-vendor`: one route, `/`.
- Laravel Cloud vanity URL returns 200 and includes the new title, raw H1, and JSON-LD.
- Vanity URL still returns `x-robots-tag: noindex, nofollow`; Laravel Cloud environment API reports `networkSettings.response_headers.robots_tag=index, follow`, so this may be vanity-domain behaviour or delayed edge/runtime state.
- `https://kimward.co.uk/` currently returns Cloudflare Error 1014 `CNAME Cross-User Banned` from external checks.
- Laravel Cloud domain `kimward.co.uk` is `hostnameStatus=failed`, `sslStatus=failed`, `originStatus=failed`, `environmentId=null`; Cloud requests CNAME records for `kimward.co.uk` and `www.kimward.co.uk` to `to.laravel.cloud`.

Blockers / next actions:

- Fix Cloudflare DNS for `kimward.co.uk`: point apex and `www` to Laravel Cloud's requested `to.laravel.cloud` target, likely DNS-only/not proxied to avoid Cloudflare 1014.
- Attach/verify the domain against Laravel Cloud environment `env-a205451d-e9c5-4e69-90d6-25972ba3ac7b` after DNS changes.
- Add Search Console access for the service account used at `/root/credentials/gsc-service-account.json`; it currently only has access to `sc-domain:cramblr.com` and `https://tools.kimward.co.uk/`, not `sc-domain:kimward.co.uk`.
