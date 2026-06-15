import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const problems = [
  ['risk', 'The original developer or agency has moved on'],
  ['backlog', 'Bugs, reports, imports, or admin changes are stuck in the backlog'],
  ['ops', 'Queues, scheduled jobs, emails, or APIs are unreliable'],
  ['ai', 'The team wants useful AI support without giving a chatbot production control'],
];

const work = [
  ['Fix the app you already have', 'Laravel upgrades, production bugs, dependency updates, slow pages, broken reports, and careful changes to live applications.'],
  ['Ship the admin work that keeps slipping', 'Admin screens, internal workflows, CSV imports and exports, operational reports, dashboards, and support tools.'],
  ['Make background work reliable again', 'Horizon queues, scheduled jobs, mail flows, webhooks, provider APIs, deployment notes, and handover documentation.'],
];

const proofCards = [
  ['Old Laravel, still earning money', 'If your app is behind on Laravel, PHP, packages, or tests, I can help move it forward without pretending it is a clean greenfield project.'],
  ['Stripe and pricing changes', 'Billing work needs a slower hand: refunds, fees, pricing rules, SCA-era payment changes, checkout flows, and payment-method surfaces.'],
  ['Admin and workflow backlog', 'Reports, imports, dashboards, account flows, review screens, and operational tools often sit half-finished because they are awkward, not glamorous.'],
];

const agentWork = [
  ['Reviewed agent workflows', 'Agents that draft, triage, classify, search, or summarise, with review points, logs, and clear limits before anything reaches customers or production data.'],
  ['Internal AI tools', 'Small AI-assisted tools inside existing Laravel or admin systems: support queues, reporting summaries, document search, inbox triage, lead review, and operator checklists.'],
  ['The plumbing around AI', 'Prompts, queues, cron jobs, webhooks, MCP and tool calls, retries, approvals, audit trails, and fallback paths. The boring bits that make the workflow safe to run.'],
];

const firstJobs = [
  'Review an existing Laravel app and flag the immediate risks',
  'Fix one production bug or failing background job',
  'Build one admin screen, report, import, export, or dashboard',
  'Prototype one reviewed AI workflow for an internal process',
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
            <a href="#work">Laravel</a>
            <a href="#proof">Proof</a>
            <a href="#agents">Agents</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Laravel support + reviewed AI workflows</p>
            <h1>Keep the Laravel app moving. Add agents where they help.</h1>
            <p className="lead">
              I help UK agencies and small teams maintain existing Laravel applications, ship internal tools, and add reviewed AI workflows for admin, support, reporting, and research work.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20and%20agent%20workflow%20enquiry">Send a backlog task</a>
              <a className="button secondary" href="#agents">Check AI workflow fit</a>
            </div>
          </div>

          <aside className="case-card rescue-card" aria-label="Typical Laravel and agent support situation">
            <div className="card-topline">Typical situation</div>
            <h2>Useful app, awkward backlog?</h2>
            <p className="rescue-copy">
              I’m useful when the app still matters, the admin work keeps piling up, and the team needs automation they can review, log, and switch off.
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
          <p>Laravel maintenance, admin tools, reporting, queues, integrations, and reviewed AI workflows.</p>
          <span>Human review before customer or production impact.</span>
        </div>
      </section>

      <section className="shell section problem-section" id="problem">
        <div className="section-heading">
          <p className="eyebrow">The work I’m set up for</p>
          <h2>Existing systems with users, data, and unfinished operational work.</h2>
          <p className="section-copy">
            I work best on live Laravel/PHP systems where the next step is clear: repair the fragile bit, ship the overdue admin tool, or add a reviewed workflow that removes repetitive work from the team.
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
          <h2>Small Laravel jobs that improve the app without turning into a rebuild.</h2>
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
          <h2>For Laravel apps that are too important to rewrite and too awkward to ignore.</h2>
          <p>
            I’ve spent 8 years working on established Laravel products with users, Stripe billing, admin workflows, account areas, background jobs, integrations, and framework upgrades. That experience is useful when your app needs careful changes, not a ground-up rebuild.
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
            <h2>Agents for internal work, with human control left in.</h2>
            <p>
              I can help turn manual admin, support, reporting, and research workflows into small AI-assisted systems. Each workflow needs a clear boundary: what the agent can read, what it can draft, who reviews it, and what gets logged.
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
            <h2>Send one task from the backlog.</h2>
            <p>
              Tell me what the app or workflow does, what is broken or missing, and what “done” should look like. I’ll reply with whether I can help, the likely approach, and any risks I can see from the brief.
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
            <h2>Email the app or workflow, the problem, and the outcome you need.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20and%20agent%20workflow%20enquiry">hello@kimward.co.uk</a>
            <p>Independent Laravel/PHP developer for UK agencies and small teams. Laravel support, internal tooling, integrations, and reviewed AI workflows. Based in Thailand, working async with UK hours overlap.</p>
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
