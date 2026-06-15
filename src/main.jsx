import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const proofPoints = [
  ['Tutorful', '8 years working on a production marketplace'],
  ['Laravel 5 → 11', 'upgrade projects across multiple framework generations'],
  ['Cramblr', 'Thai study pages turned into reviewed Anki flashcards'],
];

const workItems = [
  ['Modernisation', 'Framework upgrades, dependency work, testing, and legacy cleanup.'],
  ['Product development', 'Admin tools, dashboards, imports, exports, and account workflows.'],
  ['Payments and operations', 'Stripe, pricing changes, billing flows, refunds, and support tooling.'],
  ['Reliability', 'Queues, scheduled jobs, mail, webhooks, and provider integrations.'],
  ['Reviewed AI workflows', 'Internal tools where AI drafts, classifies, searches, or summarises with human review.'],
];

const tutorfulProof = [
  ['Upgrade work', 'Led upgrade projects on a long-running production app, taking it through multiple framework generations up to Laravel 11.'],
  ['Stripe and billing', 'Worked on checkout, refunds, pricing changes, service fees, and payment edge cases where mistakes create real support load.'],
  ['Admin and operations', 'Built and maintained internal tools for support, reporting, account workflows, imports, and operational review.'],
  ['Reliability work', 'Worked on queues, scheduled jobs, webhooks, notifications, and production edge cases in a live system.'],
];

const firstJobs = [
  'An upgrade or dependency problem',
  'A Stripe, billing, or pricing change',
  'An admin tool, report, import, or export',
  'A queue, webhook, mail, or integration issue',
  'A reviewed AI workflow for internal work',
];

function App() {
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
            <h1>Senior software engineering for established products.</h1>
            <p className="lead">
              I help teams maintain, modernise, and extend software that already has users, revenue, and operational complexity.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Project%20brief">Send a project brief</a>
              <a className="button secondary" href="#work">See how I can help</a>
            </div>
          </div>

          <aside className="ticket-card" aria-label="Good fit">
            <p className="ticket-kicker">Good fit</p>
            <h2>Production product. Real backlog. Careful changes needed.</h2>
            <ul>
              <li>bounded projects, not a full rebuild</li>
              <li>senior help on scoped product work</li>
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
          <h2>Practical engineering work for live systems.</h2>
          <p>
            The useful work is often between “quick fix” and “full rebuild”: the inherited app, the risky billing change, the admin workflow, the queue that still needs to run.
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
              I spent 8 years working on Tutorful: a long-running product with live users, Stripe payments, account areas, admin workflows, background jobs, integrations, and framework upgrades.
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
            Cramblr turns Thai study pages into reviewed Anki flashcards. Learners upload material, AI drafts the cards, a human review step improves them, and the finished deck exports as an APKG file ready for Anki.
          </p>
          <a href="https://cramblr.com">cramblr.com</a>
        </div>
      </section>

      <section className="start-section" id="start">
        <div className="shell start-grid">
          <div>
            <p className="eyebrow">Start small</p>
            <h2>Have a product that needs careful work?</h2>
            <p>Send the app, the problem, and the outcome you need. I’ll reply with the likely approach, risks, and whether I’m a good fit.</p>
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
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Project%20brief">hello@kimward.co.uk</a>
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
