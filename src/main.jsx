import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const problems = [
  'The original developer or agency has moved on',
  'There are bugs, reports, imports, or admin changes stuck in the backlog',
  'Queues, scheduled jobs, emails, or APIs are unreliable',
  'The app makes money or runs operations, but nobody wants to touch it',
];

const work = [
  ['Fix and maintain', 'Bugs, Laravel upgrades, dependency updates, performance issues, production errors, and small safe changes to live applications.'],
  ['Build the missing admin work', 'Admin screens, internal workflows, CSV imports/exports, operational reports, dashboards, and support tools.'],
  ['Stabilise the background work', 'Horizon queues, scheduled jobs, mail flows, webhooks, payment/provider APIs, deployment notes, and handover documentation.'],
];

const firstJobs = [
  'Take over an existing Laravel app and identify the immediate risks',
  'Fix one production bug or failing background job',
  'Build one admin screen, report, import, export, or dashboard',
  'Connect or repair one third-party API/webhook integration',
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
            <a href="#work">Work</a>
            <a href="#start">Start</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Laravel / PHP support for existing applications</p>
            <h1>When the Laravel app still matters, but nobody owns it.</h1>
            <p className="lead">
              I help UK agencies and small teams maintain, fix, and extend Laravel applications that are already in use:
              inherited codebases, admin tools, reports, integrations, queues, and the operational work that keeps the app useful.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20enquiry">Email Kim</a>
              <a className="button secondary" href="#start">Send a first task</a>
            </div>
          </div>

          <aside className="case-card rescue-card" aria-label="Typical Laravel support situation">
            <div className="card-topline">Typical situation</div>
            <h2>Developer moved on?</h2>
            <p className="rescue-copy">
              I’m useful when the app is too important to ignore, but too awkward for the current team to keep picking at between other work.
            </p>
            <div className="terminal-card">
              <p><span>app</span> live Laravel / PHP</p>
              <p><span>need</span> fix, maintain, improve</p>
              <p><span>work</span> admin, reports, APIs, jobs</p>
              <p><span>style</span> async, direct, written</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Bug fixes. Maintenance. Admin tools. Reports. Imports. Queues. Integrations.</p>
          <span>No rewrite pitch.</span>
        </div>
      </section>

      <section className="shell section problem-section" id="problem">
        <div className="section-heading">
          <p className="eyebrow">The work I’m set up for</p>
          <h2>Existing Laravel apps with real users, real data, and unfinished operational work.</h2>
          <p className="section-copy">
            The useful category is not “AI development” or a broad software consultancy. It is senior Laravel/PHP help for apps that already exist and need careful hands-on progress.
          </p>
        </div>
        <div className="problem-list">
          {problems.map((item) => <div className="problem-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section work-section" id="work">
        <div className="work-intro">
          <p className="eyebrow">What I take on</p>
          <h2>Small, concrete Laravel work that improves the app without turning into a rebuild.</h2>
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

      <section className="shell proof section" id="start">
        <div className="proof-panel">
          <div>
            <p className="eyebrow">Good first jobs</p>
            <h2>Send one task from the backlog.</h2>
            <p>
              Tell me what the app does, what is wrong or missing, and what “done” should look like. I’ll reply with whether I can help, the likely approach, and any risks I can see from the brief.
            </p>
          </div>
          <ul>
            {firstJobs.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="shell section note-section">
        <div className="note-panel">
          <p className="eyebrow">About the automation bit</p>
          <h2>Automation is a tool, not the headline.</h2>
          <p>
            If a workflow can be made faster with scripts, queues, API glue, or a small AI-assisted step, I can help. But the main offer is still Laravel/PHP support for existing systems — working code, clear updates, and maintainable changes.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Email the app, the problem, and the outcome you need.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20enquiry">hello@kimward.co.uk</a>
            <p>Independent Laravel/PHP developer for UK agencies and small teams. Based in Thailand, working async with UK hours overlap.</p>
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
