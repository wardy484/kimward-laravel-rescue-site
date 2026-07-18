<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @php
      $isShopifyReport = request()->path() === 'shopify-reconciliation-report';
      $pageTitle = $isShopifyReport
        ? 'Shopify reconciliation exception report - Kim Ward'
        : 'Kim Ward - small web apps and product features';
      $pageDescription = $isShopifyReport
        ? 'One-off Shopify reconciliation exception report for bookkeepers and ecommerce accountants dealing with messy payouts, manual payments, A/R collections, layby payments, refunds, and review rows.'
        : 'Independent software engineer for small greenfield builds, scoped product features, admin tools, integrations, and reviewed AI workflows.';
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
        "description": "Independent software engineer for small greenfield builds, scoped product features, admin tools, integrations, and reviewed AI workflows.",
        "founder": {
          "@type": "Person",
          "name": "Kim Ward",
          "jobTitle": "Independent software engineer and Laravel/PHP specialist"
        },
        "knowsAbout": [
          "Laravel",
          "PHP",
          "Small greenfield builds",
          "Feature patches",
          "Internal tools",
          "API integrations",
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
          <h1>Small web apps and product features, shipped cleanly.</h1>
          <p>
            I help founders and small teams ship narrow greenfield builds, feature patches, admin tools, integrations, and reviewed AI workflows without turning it into a full-time hire.
          </p>
          <p>
            Useful first jobs include small greenfield apps, MVP slices, feature patches, admin tools, reports, imports, exports, single integrations, and reviewed AI workflows for internal work.
          </p>
          <p><a href="mailto:hello@kimward.co.uk?subject=Laravel%20project%20brief">Send a project brief</a></p>
        </section>
        <section id="tutorful">
          <p>Tutorful</p>
          <h2>Proof from long-running Laravel product work.</h2>
          <article>
            <h3>Old Laravel, live systems</h3>
            <p>Shipped contained changes across multiple Laravel generations while respecting existing behaviour, data, and operational constraints.</p>
          </article>
          <article>
            <h3>Stripe and pricing changes</h3>
            <p>Delivered scoped payment and pricing work where rollout details, edge cases, and reliable existing flows all mattered.</p>
          </article>
          <article>
            <h3>Admin and workflow backlog</h3>
            <p>Turned operational backlog into focused admin tools and workflow improvements that reduced repetitive work.</p>
          </article>
        </section>
      </main>
    </div>
  </body>
</html>
