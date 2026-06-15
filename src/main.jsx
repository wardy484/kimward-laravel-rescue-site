import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const problems = [
  ['risk', 'Legacy Laravel app, still making money'],
  ['backlog', 'Admin/reporting work keeps slipping'],
  ['ops', 'Queues, cron, mail, or APIs are flaky'],
  ['ai', 'AI workflow needs review and limits'],
];

const work = [
  ['Fix', 'Bugs, upgrades, slow pages, broken reports.'],
  ['Extend', 'Admin screens, imports, dashboards, support tools.'],
  ['Stabilise', 'Queues, scheduled jobs, mail, webhooks, APIs.'],
];

const selectedWork = [
  ['Product', 'Cramblr'],
  ['Stack', 'Laravel, queues, billing, uploads'],
  ['Workflow', 'AI draft → human review → Anki export'],
];

const proofCards = [
  ['8 years in live Laravel', 'Maintenance, upgrades, billing, admin, queues.'],
  ['Stripe-aware', 'Pricing, checkout, refunds, payment surfaces.'],
  ['Backlog-friendly', 'Small awkward tasks shipped cleanly.'],
];

const agentWork = [
  ['Draft', 'Summaries, classifications, triage, search.'],
  ['Review', 'Human checkpoints before customer or data impact.'],
  ['Run', 'Queues, logs, retries, approvals, fallbacks.'],
];

const firstJobs = [
  'Review the app',
  'Fix one production bug',
  'Ship one admin/reporting task',
  'Prototype one reviewed AI workflow',
];

function App() {
  return (
    <main>
      <section className="hero shell">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Kim Ward home">
            <span className="brand-mark">KW</span>
            <span>Kim Ward</span>
          </a>
          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#selected-work">Selected work</a>
            <a href="#work">Services</a>
            <a href="#proof">Proof</a>
            <a href="#agents">Agents</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Laravel products, support + reviewed AI workflows</p>
            <h1>Laravel apps fixed, extended, and kept moving.</h1>
            <p className="lead">
              Practical Laravel/PHP work for live products: maintenance, admin tools, billing, queues, integrations, and reviewed AI workflows.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20product%20or%20workflow%20enquiry">Send a task or product idea</a>
              <a className="button secondary" href="#selected-work">See selected work</a>
            </div>
          </div>

          <aside className="case-card rescue-card" aria-label="Typical Laravel and agent support situation">
            <div className="card-topline">Typical situation</div>
            <h2>Useful app, stuck backlog?</h2>
            <p className="rescue-copy">
              For apps that still matter, but need careful changes rather than a rebuild.
            </p>
            <div className="terminal-card">
              <p><span>app</span> live Laravel / PHP</p>
              <p><span>need</span> fix, maintain, improve</p>
              <p><span>agents</span> draft, triage, search, summarise</p>
              <p><span>style</span> async, reviewed, auditable</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Maintenance, admin tools, billing, queues, integrations, reviewed AI.</p>
          <span>Useful systems, not theatre.</span>
        </div>
      </section>

      <section className="shell section selected-work-section" id="selected-work">
        <div className="selected-work-copy">
          <p className="eyebrow">Selected work</p>
          <h2>Real product plumbing.</h2>
          <p>
            Cramblr turns Thai study pages into reviewed Anki flashcards: uploads, billing, queues, AI extraction, review, export.
          </p>
        </div>
        <article className="product-card" aria-label="Cramblr selected work">
          <div className="product-screenshot" aria-label="Screenshot of the Cramblr homepage">
            <img src="/cramblr-home.png" alt="Cramblr homepage showing Thai study pages turned into trusted flashcards" />
          </div>
          <div className="product-card-header">
            <p className="eyebrow">Cramblr</p>
            <a href="https://cramblr.com">cramblr.com</a>
          </div>
          <h3>Thai study pages to reviewed Anki decks.</h3>
          <p>
            Upload pages, review generated cards, export APKG.
          </p>
          <div className="product-meta">
            {selectedWork.map(([label, value]) => (
              <p key={label}><span>{label}</span>{value}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="shell section problem-section" id="problem">
        <div className="section-heading">
          <p className="eyebrow">The work I’m set up for</p>
          <h2>For existing systems with real users.</h2>
          <p className="section-copy">
            Fix the fragile bit. Ship the overdue internal tool. Add automation with review built in.
          </p>
        </div>
        <div className="problem-list">
          {problems.map(([label, item]) => (
            <div className="problem-item" key={item}>
              <span>{label}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section work-section" id="work">
        <div className="work-intro">
          <p className="eyebrow">Laravel support</p>
          <h2>Small jobs. Visible progress.</h2>
        </div>
        <div className="work-list">
          {work.map(([title, body]) => (
            <article className="work-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section experience-section" id="proof">
        <div className="experience-intro">
          <p className="eyebrow">Experience from live Laravel products</p>
          <h2>Enough context to be useful quickly.</h2>
          <p>
            Eight years inside established Laravel products: billing, admin, queues, integrations, upgrades.
          </p>
        </div>
        <div className="experience-grid">
          {proofCards.map(([title, body], index) => (
            <article className="experience-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section agent-section" id="agents">
        <div className="agent-panel">
          <div className="agent-intro">
            <p className="eyebrow">AI and agent support</p>
            <h2>AI where review stays obvious.</h2>
            <p>
              Draft useful output. Keep humans in control. Log the boring bits.
            </p>
          </div>
          <div className="agent-list">
            {agentWork.map(([title, body]) => (
              <article className="agent-item" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell proof section" id="start">
        <div className="proof-panel">
          <div>
            <p className="eyebrow">Good first jobs</p>
            <h2>Start with one task.</h2>
            <p>
              Send the app, the problem, and what “done” means.
            </p>
          </div>
          <ul>
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
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20and%20agent%20workflow%20enquiry">hello@kimward.co.uk</a>
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
