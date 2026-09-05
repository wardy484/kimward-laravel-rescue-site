# Kim Ward

Personal homepage and portfolio for **kimward.co.uk**, built with Laravel Blade
and CSS. All content is server rendered; no client-side JavaScript or database is
needed for the site. Fonts and the profile image are served locally.

## Local development

```sh
composer install
cp .env.example .env
php artisan key:generate
npm ci
npm run build
php artisan serve
```

Run `npm run dev` in a second terminal when editing styles. Page content lives in
`resources/views/app.blade.php`, with styles in `src/styles.css`.

## Checks

```sh
npm run build
composer test
vendor/bin/pint --test
php artisan route:list --except-vendor
```

## Laravel Cloud

Keep the existing Laravel application and point the deployment at this revision.
Use PHP 8.4.1 or newer and Node 22.12 or newer, as required by the current lock files.

Build commands:

```sh
composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader
npm ci
npm run build
```

Deploy command:

```sh
php artisan optimize
```

Set `APP_URL=https://kimward.co.uk`, `APP_ENV=production`, `APP_DEBUG=false` and
retain the existing `APP_KEY`. The example configuration uses file sessions and
cache, and synchronous queues; no database or queue worker is required by the
portfolio. Keep Laravel Cloud's `/up` health check. Configure `kimward.co.uk` as
the custom domain in Cloud, using the DNS records supplied there.

The old Shopify report route and service content have been removed. The sitemap,
canonical URL, social card and Person structured data describe the new homepage.

## Content and assets

- Public contact: `hello@kimward.co.uk`.
- Tutorful describes Kim's product work, without private metrics or customer data.
- Envoyer Deploy and ShipLog link to their public source repositories.
- Profile photo: Kim's public [Upwork profile](https://www.upwork.com/freelancers/kimward4).
- Project illustrations are original code-based artwork, not product screenshots.
- DM Sans and Instrument Serif are self-hosted under their included OFL licences
  in `public/fonts/`.
