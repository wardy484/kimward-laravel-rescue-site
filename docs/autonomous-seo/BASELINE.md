# SEO Baseline

Generated: 2026-06-15T01:45:03Z

## Discovery summary

- Repository: `/root/workspace/kimward-laravel-rescue-site`
- Remote: `https://github.com/wardy484/kimward-laravel-rescue-site.git`
- Default branch in local checkout: `main`
- Production URL: `https://kimward.co.uk`
- Laravel Cloud application: `Kim Ward`
- Laravel Cloud repository: `wardy484/kimward-laravel-rescue-site`
- Laravel Cloud environment: `env-a205451d-e9c5-4e69-90d6-25972ba3ac7b`
- Push-to-deploy: enabled on Laravel Cloud.
- Build command on Laravel Cloud: `composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader`, then `npm ci --audit false`, then `npm run build`.
- Deploy command on Laravel Cloud: `php artisan config:cache && php artisan route:cache && php artisan view:cache`.

## Local commands

- Build: `npm run build`
- Tests: `composer test`
- Routes: `php artisan route:list --except-vendor`

## SEO/content locations

- Main HTML shell/meta: `resources/views/app.blade.php`
- React content: `src/main.jsx`
- Styles: `src/styles.css`
- Robots: `public/robots.txt`
- Sitemap: missing as of baseline.

## Initial public crawl

Start URL: `https://kimward.co.uk/`

- Pages crawled: 1
- `https://kimward.co.uk/`: 200
- `https://kimward.co.uk/robots.txt`: 200
- `https://kimward.co.uk/sitemap.xml`: 404

Homepage raw HTML state from deterministic crawler:

- Title: `Kim Ward - Laravel/PHP contractor`
- Meta description: `Independent Laravel/PHP developer for UK teams. Laravel support, internal tools, integrations, and reviewed AI workflows.`
- Canonical: missing
- Raw H1: missing
- Raw H2 count: 0
- `og:title`: missing
- `og:description`: missing
- JSON-LD blocks: 0

Important crawl caveat:

- The site is React-rendered inside a Laravel Blade shell. Browser users see the H1/content, but simple crawlers reading raw HTML see only the shell. Google can render JS, but the next SEO agent should consider whether key text should be present in server-rendered Blade or whether this single-page React setup is acceptable for a small lead-gen site.

## Initial issues

1. `/sitemap.xml` returns 404.
2. `robots.txt` does not reference a sitemap.
3. Homepage lacks canonical tag.
4. Homepage lacks Open Graph/Twitter metadata.
5. Homepage lacks JSON-LD structured data.
6. Raw HTML lacks primary H1/content because content is client-rendered.
7. Search Console access not confirmed.
8. Analytics access not confirmed.

## Initial likely highest-priority task

Add a simple `/sitemap.xml`, update `robots.txt` with `Sitemap: https://kimward.co.uk/sitemap.xml`, add canonical + OG/Twitter metadata, and consider adding static fallback content or moving the current content into Blade if SEO crawlability matters more than React component convenience.
