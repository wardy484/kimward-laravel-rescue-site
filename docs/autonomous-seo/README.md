# Autonomous SEO System

This directory is the source of truth for autonomous SEO work on `kimward.co.uk`.

## Owner

`seo_specialist` owns SEO strategy and prioritisation.

The SEO owner does not ask Kim to choose routine SEO tasks. It reads this directory, current crawl/search data, and production state, then selects the highest-leverage safe task.

## Repository

- Repo: `/root/workspace/kimward-laravel-rescue-site`
- Remote: `https://github.com/wardy484/kimward-laravel-rescue-site.git`
- Default branch: `main`
- Production URL: `https://kimward.co.uk`
- Laravel Cloud app: `Kim Ward` / `wardy484/kimward-laravel-rescue-site`
- Laravel Cloud environment: `env-a205451d-e9c5-4e69-90d6-25972ba3ac7b`
- Laravel Cloud app URL: `https://kim-ward-main-xkfi48.laravel.cloud`
- Deployment behaviour: push-to-deploy is enabled for `main`; Laravel Cloud builds with `composer install --no-dev`, `npm ci --audit false`, `npm run build`; deploy command caches config/routes/views.

## Routine path

1. Pull latest `main`.
2. Read this directory.
3. Check blockers in `BACKLOG.md`.
4. Attempt Search Console / analytics fetch if access exists.
5. Crawl public site.
6. Check `robots.txt` and `sitemap.xml`.
7. `seo_specialist` chooses one highest-priority safe task.
8. Hand off implementation to the right agent route in `AGENTS.md`.
9. Run local checks.
10. Commit directly to `main`.
11. Push to `origin/main`.
12. Wait for Laravel Cloud push-to-deploy.
13. Verify production.
14. If verification fails, revert the commit, push, wait for redeploy, and verify recovery.
15. Update `RUN_LOG.md`, `BACKLOG.md`, and `PLAN.md`.

## Stop conditions

Stop only for:

- Missing credentials.
- Missing repository access.
- Missing Search Console access when a task specifically requires it.
- Missing deploy access.
- Legal/security/privacy issue.
- Failed production deploy that cannot be automatically recovered.
- Inability to verify production.

## Current known blockers

See `BACKLOG.md`. As of the initial setup, Search Console and analytics access are not confirmed, and `/sitemap.xml` returns 404.

## Files

- `PLAN.md` — strategy and operating plan.
- `BACKLOG.md` — prioritized SEO tasks/blockers.
- `BASELINE.md` — latest baseline crawl and technical SEO state.
- `RUN_LOG.md` — append-only run history.
- `AGENTS.md` — SEO owner and supporting agent handoff rules.
- `scripts/crawl_public_site.py` — deterministic public crawl helper.
