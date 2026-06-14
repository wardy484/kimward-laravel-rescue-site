import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Laravel features', 'Build scoped features, admin flows, customer portals, dashboards, imports, reports, and workflow improvements.'],
  ['Systems and integrations', 'APIs, queues, scheduled jobs, payment/admin workflows, data cleanup, and the glue between tools.'],
  ['Support and rescue', 'Fix bugs, slow pages, broken admin screens, queue issues, and inherited apps that need careful changes.'],
  ['Practical AI help', 'Add useful AI-assisted workflows for triage, reporting, drafting, internal search, and repetitive admin work.'],
];

const signals = [
  'You need a feature built without turning it into a huge project',
  'A Laravel system needs fixing, extending, or integrating',
  'There is repetitive admin work that software or AI could reduce',
  'Your team is busy and the work still needs to move',
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
            <p className="eyebrow">For agencies and small teams with Laravel systems to build, fix, or improve</p>
            <h1>Laravel features, systems, and practical AI help.</h1>
            <p className="lead">
              I help agencies and small businesses build useful Laravel/PHP features, improve internal systems,
              fix inherited apps, and add AI where it genuinely saves time.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">Email Kim</a>
              <a className="button secondary" href="#fit">Check the fit</a>
            </div>
          </div>

          <aside className="case-card" aria-label="Working style summary">
            <div className="card-topline">Working mode</div>
            <div className="terminal-card">
              <p><span>scope</span> feature / system / fix / AI workflow</p>
              <p><span>cadence</span> async, written updates, few calls</p>
              <p><span>output</span> working change, notes, handover summary</p>
              <p><span>avoid</span> vague AI, rewrites by default</p>
            </div>
            <p className="card-note">Useful when the work needs a careful developer who can also think through the business process.</p>
          </aside>
        </div>
      </section>

      <section className="strip" aria-label="Positioning summary">
        <div className="shell strip-line">
          <p>Features, admin tools, integrations, support tickets, and AI-assisted workflows for Laravel/PHP systems.</p>
          <span>Async-first. Clear scope. Working software.</span>
        </div>
      </section>

      <section className="shell section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">When to use me</p>
          <h2>Good fit when you need useful software shipped, not a long discovery process.</h2>
        </div>
        <div className="signals">
          {signals.map((item) => <div className="signal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="shell section split" id="work">
        <div>
          <p className="eyebrow">What I take on</p>
          <h2>Focused Laravel/PHP help for features, systems, support, and AI workflows.</h2>
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
            <h2>Send one feature, system problem, or workflow idea.</h2>
            <p>
              Send what you are trying to change, automate, or fix. I’ll come back with the sensible first step,
              what I would build, and whether it is a quick task or a small project.
            </p>
          </div>
          <ul>
            <li>Admin feature or internal workflow</li>
            <li>CSV import/export, report, or dashboard</li>
            <li>Queue, mail, API, or scheduled job integration</li>
            <li>AI-assisted triage, drafting, search, or reporting</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Send the feature or problem. I’ll tell you the sensible next step.</h2>
          </div>
          <div className="contact-card">
            <a className="email" href="mailto:hello@kimward.co.uk?subject=Laravel%20support%20overflow">hello@kimward.co.uk</a>
            <p>Laravel/PHP features, internal systems, support, and practical AI workflow help for UK teams. Based in Thailand, working async with UK hours overlap.</p>
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
