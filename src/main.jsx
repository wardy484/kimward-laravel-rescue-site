import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Messy Laravel rescue', 'Stabilise abandoned projects, failing admin flows, slow pages, brittle queues, and unclear production errors.'],
  ['Agency overflow', 'Pick up bounded tickets without joining the meeting calendar: diagnostics, fixes, tests, and handover notes.'],
  ['Internal tools', 'Reports, CSV imports/exports, dashboards, ops panels, customer-support tooling, and small workflow automations.'],
  ['Practical AI workflows', 'Human-in-control inbox, reporting, triage, and admin workflows where plain software plus AI saves hours.'],
];

const signals = [
  'A client has an old Laravel app nobody wants to touch',
  'A support ticket needs a real diagnosis, not another rewrite proposal',
  'Your senior devs are busy with roadmap work',
  'The work is too small for a project team but too risky to ignore',
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
            <p className="eyebrow">Laravel / PHP rescue · UK agencies · async by default</p>
            <h1>Small Laravel fires, handled without the theatre.</h1>
            <p className="lead">
              I help agencies and small teams clear awkward Laravel/PHP support work: admin fixes,
              imports, reports, dashboards, queues, performance issues, and inherited systems.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">Email Kim</a>
              <a className="button secondary" href="#fit">Check the fit</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Working mode</div>
            <div className="terminal-card">
              <p><span>scope</span> bounded ticket / diagnosis / patch</p>
              <p><span>cadence</span> async, low-meeting, written updates</p>
              <p><span>output</span> tested fix, notes, next-risk callout</p>
              <p><span>avoid</span> WordPress, vague retainers, rewrite theatre</p>
            </div>
            <p className="card-note">Useful when you need a reliable pair of hands, not another discovery process.</p>
          </aside>
        </div>
      </section>

      <section className="strip">
        <div className="shell strip-grid">
          <div><strong>Laravel</strong><span>maintenance and rescue</span></div>
          <div><strong>PHP</strong><span>legacy-friendly fixes</span></div>
          <div><strong>Ops</strong><span>queues, reports, imports</span></div>
          <div><strong>Async</strong><span>written updates, low meeting load</span></div>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Good fit if the task is annoying, bounded, and real.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Focused support work, not a generic “full-stack developer” menu.</h2>
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
            <h2>Send one awkward Laravel ticket.</h2>
            <p>
              I’ll reply with the likely cause, the safest first diagnostic step, and whether it’s a quick patch,
              a contained mini-project, or something I’d avoid. No call required unless the problem needs one.
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
            <h2>Tell me what’s broken and what “done” looks like.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">hello@kimward.co.uk</a>
            <p>UK Laravel/PHP rescue and practical AI/internal workflow support. Based in Thailand, working async with UK teams.</p>
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
