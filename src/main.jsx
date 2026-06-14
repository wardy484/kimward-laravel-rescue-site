import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Internal Laravel tools', 'Admin screens, dashboards, reporting flows, CSV imports/exports, user workflows, and the glue around them.'],
  ['Queues, jobs, and integrations', 'Horizon, scheduled jobs, mail flows, APIs, webhooks, data cleanup, and systems that need to keep running.'],
  ['Existing app work', 'Careful changes to Laravel/PHP applications that already exist: fixes, upgrades, performance work, and maintainable feature additions.'],
  ['AI-assisted operations', 'Small, reviewable AI workflows for triage, summaries, drafting, retrieval, reporting, and agent-assisted admin work.'],
];

const signals = [
  'You have a Laravel app or admin workflow that needs a capable pair of hands',
  'Your team needs imports, reports, dashboards, queues, or integrations finished',
  'A manual process is still living in spreadsheets, inboxes, or one person’s head',
  'You want AI to help with real operations, not a chatbot demo bolted onto the side',
];

const evidence = [
  ['Finance automation', 'Built and operated Laravel finance tooling with account ingestion, categorisation, budgets, sync health, and reporting.'],
  ['Deployment and ops', 'Works across VPS/Tailscale infrastructure, Laravel deployments, queues, schedulers, Postgres, Redis/Valkey, and background workers.'],
  ['Agent workflows', 'Builds practical agent workflows around Telegram, Linear/Jira, GitHub, MCP tools, cron jobs, and human approval loops.'],
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
            <a href="#fit">Fit</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Independent Laravel / PHP contractor</p>
            <h1>Laravel systems for internal tools, reporting, and automation.</h1>
            <p className="lead">
              I’m a Laravel/PHP developer and architect. I help UK agencies and small teams build the operational
              parts of software: admin tools, imports, reports, queues, integrations, finance/admin workflows,
              and careful changes to existing applications.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%2FPHP%20contracting%20enquiry">Email Kim</a>
              <a className="button secondary" href="#fit">See what I do</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Working mode</div>
            <div className="terminal-card">
              <p><span>stack</span> Laravel, PHP, queues, APIs, Postgres</p>
              <p><span>work</span> admin tools, reports, imports, integrations</p>
              <p><span>style</span> async-first, direct, written updates</p>
              <p><span>output</span> working code, tests, handover notes</p>
            </div>
            <p className="card-note">Best fit for scoped work where the business problem is known and the system needs a reliable implementation.</p>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Admin tools, imports, reporting, queues, integrations, maintenance, and useful AI-assisted operations.</p>
          <span>Laravel / PHP · UK teams · async-first</span>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Good fit when the work is specific, operational, and needs a developer who can own the details.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Focused Laravel/PHP help for the work that sits between product, ops, and support.</h2>
        </div>
        <div className="service-grid">
          {services.map(([title, body]) => (
            <article className="service" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section evidence-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Relevant experience</p>
          <h2>Not a generic “AI developer” pitch.</h2>
          <p className="section-copy">
            My work is mostly Laravel systems, operational tooling, reporting, background jobs, and agent-assisted workflows
            where the output still has to be maintainable software.
          </p>
        </div>
        <div className="evidence-grid">
          {evidence.map(([title, body]) => (
            <article className="evidence" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell proof section">
        <div className="proof-panel">
          <div>
            <p className="eyebrow">How a first job can start</p>
            <h2>Send one concrete thing you need moved forward.</h2>
            <p>
              A short brief is enough: what system exists, what needs changing, and what “done” looks like.
              I’ll reply with the likely approach, risks, and whether it is a quick task or a small project.
            </p>
          </div>
          <ul>
            <li>Build or fix an admin screen</li>
            <li>Add an import/export, report, or dashboard</li>
            <li>Debug a queue, scheduled job, mail flow, or API integration</li>
            <li>Prototype an AI-assisted admin or reporting workflow</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Send a short brief. I’ll reply with the next step.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%2FPHP%20contracting%20enquiry">hello@kimward.co.uk</a>
            <p>Laravel/PHP internal tools, reporting, maintenance, integrations, background jobs, and practical AI-assisted workflow help for UK teams. Based in Thailand, working async with UK hours overlap.</p>
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
