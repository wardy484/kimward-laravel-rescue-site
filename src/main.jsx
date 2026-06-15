import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const proofPoints = [
  ['8 years', 'inside live Laravel products'],
  ['Stripe', 'billing, pricing, payment surfaces'],
  ['Ops', 'queues, imports, reports, admin tools'],
];

const issueRows = [
  ['risk', 'Inherited Laravel app needs a safe pair of hands'],
  ['backlog', 'Admin, reporting, imports, or support tools keep slipping'],
  ['reliability', 'Queues, cron, mail, webhooks, or APIs need stabilising'],
  ['ai', 'Internal AI would help, but only with review and logs'],
];

const workItems = [
  ['Fix', 'production bugs, upgrades, slow pages'],
  ['Build', 'admin screens, reports, imports, exports'],
  ['Stabilise', 'queues, schedules, mail, webhooks'],
  ['Automate', 'reviewed AI drafts, triage, search, summaries'],
];

const firstJobs = [
  'One bug or failing job',
  'One admin/reporting task',
  'One inherited-app review',
  'One reviewed AI workflow prototype',
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
            <a href="#cramblr">Cramblr</a>
            <a href="#start">Start</a>
          </div>
        </nav>

        <div className="hero-board">
          <div className="hero-copy">
            <p className="eyebrow">Independent Laravel / PHP</p>
            <h1>Keep the useful app moving.</h1>
            <p className="lead">
              Maintenance, admin tools, billing, queues, integrations, and reviewed AI workflows for live Laravel products.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20backlog%20task">Send a backlog task</a>
              <a className="button secondary" href="#cramblr">See product proof</a>
            </div>
          </div>

          <aside className="ticket-card" aria-label="What to send">
            <p className="ticket-kicker">Good fit</p>
            <h2>Existing app. Real users. Awkward backlog.</h2>
            <ul>
              <li>async updates</li>
              <li>small scoped changes</li>
              <li>human review before AI impact</li>
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
          <h2>Not a rebuild. Not theatre. Just useful changes shipped safely.</h2>
        </div>
        <div className="issue-list">
          {issueRows.map(([label, text]) => (
            <div className="issue-row" key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell work-grid" aria-label="Services">
        {workItems.map(([title, body]) => (
          <article className="work-card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="shell cramblr-section" id="cramblr">
        <div className="cramblr-media">
          <img src="/cramblr-home.png" alt="Cramblr homepage showing Thai study pages turned into trusted flashcards" />
        </div>
        <div className="cramblr-copy">
          <p className="eyebrow">Selected work</p>
          <h2>Cramblr: product plumbing, not portfolio filler.</h2>
          <p>
            A Laravel product for turning Thai study pages into reviewed Anki decks: uploads, billing, queues, AI extraction, human review, and APKG export.
          </p>
          <a href="https://cramblr.com">cramblr.com</a>
        </div>
      </section>

      <section className="start-section" id="start">
        <div className="shell start-grid">
          <div>
            <p className="eyebrow">Start small</p>
            <h2>Send one concrete task.</h2>
            <p>Tell me the app, the problem, and what “done” means.</p>
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
            <h2>Email the problem. I’ll reply with the shape of the fix.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20backlog%20task">hello@kimward.co.uk</a>
            <p>Independent Laravel/PHP developer. UK overlap from Thailand.</p>
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
