import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Existing Laravel apps', 'Bug fixes, maintenance, upgrades, performance work, and careful changes to applications that are already live.'],
  ['Admin tools and reporting', 'Internal screens, CSV imports and exports, dashboards, operational reports, and the workflows around them.'],
  ['Queues and integrations', 'Scheduled jobs, Horizon queues, mail flows, APIs, webhooks, payment/provider integrations, and background work that needs to stay reliable.'],
  ['Small automation jobs', 'Practical automations for admin, reporting, triage, and handover — including AI-assisted workflows only where review and control are built in.'],
];

const signals = [
  'Your Laravel app works, but the original developer or agency is no longer available',
  'Your team has a backlog of fixes, reports, imports, admin screens, or integrations',
  'Production jobs, queues, emails, or third-party APIs need debugging or tidying up',
  'You want a senior developer to take ownership of a small, clearly scoped piece of work',
];

const evidence = [
  ['Laravel and PHP', 'Day-to-day work across Laravel apps, admin tooling, queues, schedulers, tests, APIs, Postgres, Redis/Valkey, and deployment workflows.'],
  ['Operational software', 'Comfortable with the unglamorous parts of software: reporting, finance/admin workflows, imports, data cleanup, support tools, and background jobs.'],
  ['Async delivery', 'Written updates, clear scope, working code, tests where useful, and handover notes so the work is understandable after delivery.'],
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
            <p className="eyebrow">Independent Laravel / PHP developer</p>
            <h1>Laravel support for existing apps and internal systems.</h1>
            <p className="lead">
              I help UK agencies and small teams look after Laravel applications that already exist: fixing bugs,
              building admin tools, improving reports, connecting APIs, and keeping queues, jobs, and integrations reliable.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20enquiry">Email Kim</a>
              <a className="button secondary" href="#fit">See if it fits</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Typical work</div>
            <div className="terminal-card">
              <p><span>apps</span> inherited Laravel / PHP codebases</p>
              <p><span>tasks</span> fixes, reports, imports, integrations</p>
              <p><span>ops</span> queues, schedulers, mail, deployments</p>
              <p><span>style</span> async, written updates, clear handover</p>
            </div>
            <p className="card-note">Best fit when you have a specific Laravel problem or small backlog item and need someone who can pick it up without turning it into a large project.</p>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Bug fixes, maintenance, admin tools, reports, imports, queues, APIs, and small automation jobs.</p>
          <span>Laravel / PHP · UK teams · async-first</span>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Useful when you have an existing Laravel app that needs steady, senior hands-on help.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Maintenance, support, and small builds for the operational parts of Laravel applications.</h2>
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
          <h2>Laravel work with the messy bits included.</h2>
          <p className="section-copy">
            Most useful work is not a clean greenfield build. It is understanding the current system, making a safe change,
            and leaving the codebase easier to operate than it was before.
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
            <p className="eyebrow">Good first jobs</p>
            <h2>Send one thing that needs fixing, finishing, or making reliable.</h2>
            <p>
              A short brief is enough: what the app does, what is wrong or missing, and what outcome you need.
              I’ll reply with whether I can help, the likely shape of the work, and any obvious risks.
            </p>
          </div>
          <ul>
            <li>Fix a bug in an inherited Laravel application</li>
            <li>Build an admin screen, import/export, report, or dashboard</li>
            <li>Debug a queue, scheduled job, email flow, or API integration</li>
            <li>Improve deployment, handover, tests, or maintenance notes</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Email a short brief. I’ll tell you if it is a fit.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20enquiry">hello@kimward.co.uk</a>
            <p>Independent Laravel/PHP developer for UK teams. Based in Thailand, working async with UK hours overlap.</p>
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
