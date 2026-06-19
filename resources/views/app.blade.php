<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @php
      $isShopifyReport = request()->path() === 'shopify-reconciliation-report';
      $pageTitle = $isShopifyReport
        ? 'Shopify reconciliation exception report - Kim Ward'
        : 'Kim Ward - Laravel/PHP contractor for UK teams';
      $pageDescription = $isShopifyReport
        ? 'One-off Shopify reconciliation exception report for bookkeepers and ecommerce accountants dealing with messy payouts, manual payments, A/R collections, layby payments, refunds, and review rows.'
        : 'Independent Laravel/PHP developer for UK teams that need senior help with upgrades, Stripe, admin tools, integrations, queues, and reviewed AI workflows.';
      $pageUrl = $isShopifyReport ? 'https://kimward.co.uk/shopify-reconciliation-report' : 'https://kimward.co.uk/';
    @endphp
    <meta name="description" content="{{ $pageDescription }}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="{{ $pageUrl }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $pageUrl }}" />
    <meta property="og:title" content="{{ $pageTitle }}" />
    <meta property="og:description" content="{{ $pageDescription }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{{ $pageTitle }}" />
    <meta name="twitter:description" content="{{ $pageDescription }}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <title>{{ $pageTitle }}</title>
    <script type="application/ld+json">
      @verbatim
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Kim Ward",
        "url": "https://kimward.co.uk/",
        "email": "hello@kimward.co.uk",
        "areaServed": "United Kingdom",
        "description": "Independent Laravel/PHP developer for UK teams that need senior help with upgrades, Stripe, admin tools, integrations, queues, and reviewed AI workflows.",
        "founder": {
          "@type": "Person",
          "name": "Kim Ward",
          "jobTitle": "Independent software engineer and Laravel/PHP specialist"
        },
        "knowsAbout": [
          "Laravel",
          "PHP",
          "Stripe integrations",
          "Internal tools",
          "Admin workflows",
          "Queue and webhook reliability",
          "Reviewed AI workflows"
        ]
      }
      @endverbatim
    </script>
    @viteReactRefresh
    @vite('src/main.jsx')
  </head>
  <body>
    <div id="root">
      <main>
        <nav aria-label="Primary">
          <a href="https://kimward.co.uk/">Kim Ward</a>
          <a href="#work">Work</a>
          <a href="#tutorful">Tutorful</a>
          <a href="#contact">Contact</a>
        </nav>
        <section>
          <p>Independent software engineer · Laravel / PHP specialist</p>
          <h1>Laravel, product and internal tooling for teams that need senior help.</h1>
          <p>
            I work with established products: upgrades, Stripe changes, admin workflows, queues, integrations and small product builds like Cramblr.
          </p>
          <p>
            Useful first jobs include Laravel upgrades, dependency problems, Stripe or billing changes, admin tools, reports, imports, exports, queues, webhooks, mail, integrations, and reviewed AI workflows for internal work.
          </p>
          <p><a href="mailto:hello@kimward.co.uk?subject=Laravel%20project%20brief">Send a project brief</a></p>
        </section>
      </main>
    </div>
  </body>
</html>
