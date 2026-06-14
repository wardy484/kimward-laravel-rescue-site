import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const problems = [
  'The original developer or agency has moved on',
  'There are bugs, reports, imports, or admin changes stuck in the backlog',
  'Queues, scheduled jobs, emails, or APIs are unreliable',
  'Teams want AI/agent help, but not a risky chatbot bolted onto production',
];

const work = [
  ['Fix and maintain', 'Bugs, Laravel upgrades, dependency updates, performance issues, production errors, and small safe changes to live applications.'],
  ['Build the missing admin work', 'Admin screens, internal workflows, CSV imports/exports, operational reports, dashboards, and support tools.'],
  ['Stabilise the background work', 'Horizon queues, scheduled jobs, mail flows, webhooks, payment/provider APIs, deployment notes, and handover documentation.'],
];

const agentWork = [
  ['Human-in-the-loop agents', 'Agent workflows that draft, triage, classify, search, or summarise — with review points, logs, and clear boundaries before anything touches customers or production data.'],
  ['Internal AI tools', 'Small AI-assisted tools inside existing Laravel/admin systems: support queues, reporting summaries, document search, inbox triage, lead review, and operator checklists.'],
  ['Automation plumbing', 'The unglamorous parts around AI: prompts, queues, cron jobs, webhooks, MCP/tool calls, retries, approvals, audit trails, and fallback paths.'],
];

const firstJobs = [
  'Take over an existing Laravel app and identify the immediate risks',
  'Fix one production bug or failing background job',
  'Build one admin screen, report, import, export, or dashboard',
  'Prototype one reviewed AI/agent workflow for an internal process',
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
            <a href="#agents">Agents</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Laravel support + practical AI/agent workflows</p>
            <h1>Existing Laravel apps. Useful internal agents.</h1>
            <p className="lead">
              I help UK agencies and small teams maintain Laravel applications, build internal tools, and add carefully scoped AI/agent workflows where they make operational work easier — not riskier.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20and%20agent%20workflow%20enquiry">Email Kim</a>
              <a className="button secondary" href="#agents">See agent support</a>
            </div>
          </div>

          <aside className="case-card rescue-card" aria-label="Typical Laravel and agent support situation">
            <div className="card-topline">Typical situation</div>
            <h2>Useful system, awkward backlog?</h2>
            <p className="rescue-copy">
              I’m useful when the app still matters, the admin work keeps piling up, and the team wants automation without handing control to a black box.
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
          <p>Laravel maintenance, admin tools, reporting, queues, integrations, and reviewed AI/agent workflows.</p>
          <span>No black-box automation.</span>
        </div>
      </section>

      <section className="shell section problem-section" id="problem">
        <div className="section-heading">
          <p className="eyebrow">The work I’m set up for</p>
          <h2>Existing systems with real users, real data, and unfinished operational work.</h2>
          <p className="section-copy">
            The useful category is not a broad AI consultancy. It is hands-on Laravel/PHP support plus practical agent workflows for internal operations: small, reviewable, and close to the systems people already use.
          </p>
        </div>
        <div className="problem-list">
          {problems.map((item) => <div className="problem-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section work-section" id="work">
        <div className="work-intro">
          <p className="eyebrow">Laravel support</p>
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

      <section className="shell section agent-section" id="agents">
        <div className="agent-panel">
          <div className="agent-intro">
            <p className="eyebrow">AI and agent support</p>
            <h2>Agents for internal work, with human control left in.</h2>
            <p>
              I can help teams turn manual admin, support, reporting, and research workflows into small agent-assisted systems. The aim is not “AI transformation”; it is fewer repetitive steps, better visibility, and safer handoff between people and software.
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
              Tell me what the app or workflow does, what is wrong or missing, and what “done” should look like. I’ll reply with whether I can help, the likely approach, and any risks I can see from the brief.
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
            <p>Independent Laravel/PHP developer for UK agencies and small teams. Laravel support, internal tooling, integrations, and reviewed AI/agent workflows. Based in Thailand, working async with UK hours overlap.</p>
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
