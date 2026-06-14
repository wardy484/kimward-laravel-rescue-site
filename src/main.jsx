import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Laravel development', 'Scoped feature work, admin areas, customer portals, dashboards, imports, exports, and reporting tools.'],
  ['Systems and integrations', 'APIs, queues, scheduled jobs, payment flows, data cleanup, and connections between business tools.'],
  ['Maintenance and support', 'Bug fixes, upgrades, performance work, broken admin screens, queue issues, and inherited applications.'],
  ['Practical AI workflows', 'Human-reviewed AI workflows for triage, drafting, reporting, internal search, and repetitive admin work.'],
];

const signals = [
  'You need an experienced Laravel contractor for a defined piece of work',
  'An existing PHP/Laravel application needs extending or maintaining',
  'Internal processes rely on spreadsheets, manual admin, or disconnected tools',
  'You want useful AI support, but only where it fits the workflow',
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
            <p className="eyebrow">Independent Laravel / PHP contractor</p>
            <h1>Laravel development for internal tools, integrations, and support.</h1>
            <p className="lead">
              I work with UK agencies and small teams that need experienced Laravel/PHP help without hiring full-time.
              I build features, improve internal systems, maintain existing apps, and add practical AI where it is useful.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%2FPHP%20contracting%20enquiry">Email Kim</a>
              <a className="button secondary" href="#fit">See what I do</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Working mode</div>
            <div className="terminal-card">
              <p><span>work</span> features / fixes / integrations / tools</p>
              <p><span>style</span> async-first, clear written updates</p>
              <p><span>output</span> working code, tests, handover notes</p>
              <p><span>fit</span> scoped work, maintenance, delivery support</p>
            </div>
            <p className="card-note">Useful when you know the business problem and need a developer who can turn it into working software.</p>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Feature development, internal tools, integrations, maintenance, reporting, and practical AI workflows.</p>
          <span>Laravel / PHP · UK teams · async-first</span>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Good fit for scoped work where the problem is real and the outcome is clear.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Focused Laravel/PHP help for teams that need extra delivery capacity.</h2>
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
            <h2>Send the feature, bug, or workflow you need help with.</h2>
            <p>
              Describe the current system, what needs to change, and what “done” should look like. I’ll reply with
              the sensible next step, likely scope, and whether it is a quick task or a small project.
            </p>
          </div>
          <ul>
            <li>Laravel feature or admin tool</li>
            <li>CSV import/export, report, or dashboard</li>
            <li>Queue, email, API, or scheduled job integration</li>
            <li>AI-assisted triage, drafting, search, or reporting workflow</li>
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
            <p>Laravel/PHP feature development, internal systems, maintenance, reporting, and practical AI workflow help for UK teams. Based in Thailand, working async with UK hours overlap.</p>
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
