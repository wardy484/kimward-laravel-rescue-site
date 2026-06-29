import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const proofPoints = [
  ['Tutorful', '8 years working on a production marketplace'],
  ['Laravel 5 → 11', 'upgrade projects across multiple framework generations'],
  ['Cramblr', 'Thai study pages turned into reviewed Anki flashcards'],
];

const workItems = [
  ['Small greenfield builds', 'Tiny apps, MVP slices, admin panels, and tools with a clear first version.'],
  ['Feature patches', 'Contained product changes with acceptance criteria, not open-ended staff augmentation.'],
  ['Internal tools', 'Dashboards, imports, exports, account workflows, and reporting helpers.'],
  ['API integrations', 'One concrete flow at a time: forms, providers, exports, notifications, or data sync.'],
  ['Reviewed AI workflows', 'Small tools where AI drafts, classifies, searches, or summarises with human review.'],
];

const tutorfulProof = [
  ['Product engineering', 'Shipped across a long-running production marketplace with real users and operational constraints.'],
  ['Small product slices', 'Worked on account flows, marketplace journeys, admin surfaces, and internal tools.'],
  ['Admin and operations', 'Built and maintained tools for support, reporting, account workflows, imports, and operational review.'],
  ['Reliability-aware delivery', 'Comfortable with queues, scheduled jobs, notifications, and provider integrations when the feature needs them.'],
];

const firstJobs = [
  'A small greenfield app or MVP slice',
  'A contained feature patch for an existing product',
  'An admin panel, dashboard, report, import, or export',
  'A single API integration or workflow automation',
  'A reviewed AI workflow for internal work',
];

function ShopifyReconciliationReport() {
  const mailto = 'mailto:hello@kimward.co.uk?subject=Shopify%20reconciliation%20exception%20report';

  return (
    <main className="shopify-page">
      <section className="shopify-hero shell">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/" aria-label="Kim Ward home">
            <span className="brand-mark">KW</span>
            <span>Kim Ward</span>
          </a>
          <div className="nav-links">
            <a href="#report">Report</a>
            <a href="#fit">Good fit</a>
            <a href="#contact">Start</a>
          </div>
        </nav>

        <div className="shopify-board">
          <div className="shopify-copy">
            <p className="eyebrow">For Shopify bookkeepers and ecommerce accountants</p>
            <h1>Messy Shopify month?</h1>
            <p className="lead">
              I’ll turn one month of Shopify exports into a bookkeeper-ready exception report: normal sales, refunds, manual payments, A/R or layby candidates, and rows needing review.
            </p>
            <div className="actions">
              <a className="button primary" href={mailto}>Ask about a £149 report</a>
              <a className="button secondary" href="#report">See what you get</a>
            </div>
          </div>

          <aside className="shopify-ticket" aria-label="Validation offer">
            <p className="ticket-kicker">One-off validation offer</p>
            <strong>£149</strong>
            <span>for one messy Shopify month</span>
            <p>No app install. No accounting sync replacement. Just a clear review pack for the awkward rows.</p>
          </aside>
        </div>
      </section>

      <section className="shell shopify-section" id="report">
        <div className="section-title compact-title">
          <p className="eyebrow">The report</p>
          <h2>Designed for the rows that do not fit cleanly into revenue.</h2>
        </div>
        <div className="report-grid">
          {[
            ['Clean sales', 'Rows that look safe to treat as ordinary Shopify sales.'],
            ['Refunds and adjustments', 'Refunds, fees, discounts, and payout mismatches pulled out clearly.'],
            ['Manual payments', 'Rows likely to need source/payment-method review.'],
            ['A/R or layby candidates', 'Collections, deposits, and payment-plan-looking rows marked for review.'],
            ['Merchant questions', 'A short list of questions to resolve before posting.'],
            ['Export pack', 'CSV plus plain-English notes for the bookkeeping file.'],
          ].map(([title, body]) => (
            <article className="report-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shopify-dark" id="fit">
        <div className="shell fit-grid">
          <div>
            <p className="eyebrow">Good fit</p>
            <h2>Use this when Shopify sales are not the same thing as revenue.</h2>
          </div>
          <ul className="fit-list">
            <li>Shopify payouts include A/R collections or layby payments.</li>
            <li>Manual payment methods make order exports hard to trust.</li>
            <li>Reviewing every order one-by-one is not practical.</li>
            <li>You want exceptions and review notes, not another sync app.</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Start</p>
            <h2>Send the messy month first.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href={mailto}>hello@kimward.co.uk</a>
            <p>Do not send raw exports in the first email. Tell me what is messy, which accounting tool you use, and whether A/R, layby, refunds, or manual payments are involved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  if (window.location.pathname === '/shopify-reconciliation-report') {
    return <ShopifyReconciliationReport />;
  }

  return (
    <main>
      <section className="hero shell" id="top">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Kim Ward home">
            <span className="brand-mark">KW</span>
            <span>Kim Ward</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#tutorful">Tutorful</a>
            <a href="#cramblr">Cramblr</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-board">
          <div className="hero-copy">
            <p className="eyebrow">Independent software engineer · Laravel / PHP specialist</p>
            <h1>Small web apps and product features, shipped cleanly.</h1>
            <p className="lead">
              I help founders and small teams ship narrow greenfield builds, feature patches, admin tools, integrations, and reviewed AI workflows without turning it into a full-time hire.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20project%20brief">Send a project brief</a>
              <a className="button secondary" href="#work">See how I can help</a>
            </div>
          </div>

          <aside className="ticket-card" aria-label="Good fit">
            <p className="ticket-kicker">Good fit</p>
            <h2>Small build. Clear scope. Tasteful delivery.</h2>
            <ul>
              <li>greenfield builds with a narrow first version</li>
              <li>small feature patches with clear acceptance criteria</li>
              <li>clear async updates with UK overlap</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Experience summary">
        <div className="shell proof-grid">
          {proofPoints.map(([label, body]) => (
            <div className="proof-point" key={label}>
              <strong>{label}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell split-section" id="work">
        <div className="section-title">
          <p className="eyebrow">The work</p>
          <h2>Scoped product engineering without the staff-augmentation drag.</h2>
          <p>
            Useful work is often a small thing that still needs senior judgment: the first version, the admin surface, the integration, or the feature patch that should not sprawl.
          </p>
        </div>
        <div className="work-list-large">
          {workItems.map(([title, body]) => (
            <article className="work-row" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tutorful-section" id="tutorful">
        <div className="shell tutorful-grid">
          <div className="tutorful-intro">
            <p className="eyebrow">Tutorful</p>
            <h2>Experience from a real production marketplace.</h2>
            <p>
              I spent 8 years working on Tutorful: a long-running product with live users, account areas, marketplace flows, admin workflows, background jobs, integrations, and repeated product changes.
            </p>
          </div>
          <div className="tutorful-cards">
            {tutorfulProof.map(([title, body]) => (
              <article className="proof-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell cramblr-section" id="cramblr">
        <div className="cramblr-media">
          <img src="/cramblr-home.png" alt="Cramblr homepage showing Thai study pages turned into trusted flashcards" />
        </div>
        <div className="cramblr-copy">
          <p className="eyebrow">Selected work</p>
          <h2>Cramblr</h2>
          <p>
            Cramblr turns Thai study pages into reviewed Anki flashcards. Learners upload study material, AI drafts the cards, a human review step improves them, and the finished deck exports ready for Anki.
          </p>
          <a href="https://cramblr.com">cramblr.com</a>
        </div>
      </section>

      <section className="start-section" id="start">
        <div className="shell start-grid">
          <div>
            <p className="eyebrow">Start small</p>
            <h2>Have a small build or feature that needs careful work?</h2>
            <p>Send the outcome, rough scope, and anything already decided. I’ll reply with the tightest useful first slice, risks, and whether I’m a good fit.</p>
          </div>
          <ul className="first-jobs">
            {firstJobs.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Send a project brief.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20project%20brief">hello@kimward.co.uk</a>
            <p>Independent software engineer. Laravel/PHP specialist. Based in Thailand, working async with UK hours overlap.</p>
            <div className="contact-links">
              <a href="https://github.com/wardy484">GitHub</a>
              <a href="https://linkedin.com/in/kim-ward-90884643">LinkedIn</a>
              <a href="https://upwork.com/freelancers/~01b07de0c8a6f27084">Upwork</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
