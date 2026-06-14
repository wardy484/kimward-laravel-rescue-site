import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Laravel support work', 'Bug fixes, upgrades, slow pages, broken admin flows, queue issues, and inherited apps that need careful changes.'],
  ['Agency overflow', 'Extra Laravel/PHP capacity for small tasks that should not pull your senior team off client delivery.'],
  ['Internal tools', 'Reports, CSV imports/exports, dashboards, admin screens, ops panels, and workflow fixes for real business processes.'],
  ['Practical AI workflows', 'Small, human-reviewed automations for inbox triage, reporting, admin checks, and repetitive operational work.'],
];

const signals = [
  'A client has a Laravel app that needs maintenance, not a rebuild',
  'A support issue needs diagnosis before anyone quotes a project',
  'Your team is busy and the ticket still needs to move',
  'The task is small, awkward, and worth doing properly',
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
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Laravel / PHP support · UK agencies · async by default</p>
            <h1>Laravel support work for teams that need it handled.</h1>
            <p className="lead">
              I help agencies and small businesses deal with Laravel/PHP maintenance, admin tools,
              imports, reports, queues, performance issues, and inherited systems.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">Email Kim</a>
              <a className="button secondary" href="#fit">Check the fit</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Working mode</div>
            <div className="terminal-card">
              <p><span>scope</span> support ticket / diagnosis / small build</p>
              <p><span>cadence</span> async, written updates, few calls</p>
              <p><span>output</span> fix, test notes, handover summary</p>
              <p><span>avoid</span> vague retainers, rewrites by default</p>
            </div>
            <p className="card-note">Useful when the work is clear enough to start, but still needs a careful developer.</p>
          </aside>
        </div>
      </section>

      <section className="strip">
        <div className="shell strip-grid">
          <div><strong>Laravel</strong><span>maintenance and support</span></div>
          <div><strong>PHP</strong><span>legacy-aware fixes</span></div>
          <div><strong>Ops</strong><span>queues, reports, imports</span></div>
          <div><strong>Async</strong><span>clear updates, fewer calls</span></div>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Good fit when you know the problem, but need someone to move it on.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Focused Laravel/PHP help for support queues and internal systems.</h2>
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

      <section className="shell proof section">
        <div className="proof-panel">
          <div>
            <p className="eyebrow">How a first job can start</p>
            <h2>Send one real support issue.</h2>
            <p>
              Send the symptom, the affected area, and what “fixed” should look like. I’ll come back with
              the likely cause, the first safe diagnostic step, and whether it is a quick patch or a small project.
            </p>
          </div>
          <ul>
            <li>Admin panel bug or missing report</li>
            <li>CSV import/export issue</li>
            <li>Queue, Horizon, mail, or scheduled job problem</li>
            <li>Slow query or production error investigation</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Send the issue. I’ll tell you the sensible next step.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">hello@kimward.co.uk</a>
            <p>Laravel/PHP support, internal tools, and practical AI workflow help for UK teams. Based in Thailand, working async with UK hours overlap.</p>
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
