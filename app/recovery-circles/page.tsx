import Link from "next/link";

const topNav = [
  ["Stories", "/app/stories"],
  ["Manifesto", "/manifesto"],
  ["Recovery Circles", "/recovery-circles"],
  ["About", "/about"]
];

const principles = [
  "Anonymous participation for founders not ready to speak publicly yet.",
  "Small, curated rooms with no audience and no personal branding pressure.",
  "Voice-first, honest conversations about shutdown, burnout, betrayal, and identity loss.",
  "Built for the period after collapse, when survival matters more than strategy theatre."
];

const circles = [
  {
    schedule: "Weekly small group",
    title: "Quiet Circle",
    body: "A slower room for founders coming out of burnout, silence, or emotional shutdown."
  },
  {
    schedule: "Twice monthly",
    title: "Postmortem Circle",
    body: "Honest conversations about what actually happened inside the company and inside you."
  },
  {
    schedule: "Curated admission",
    title: "Anonymous Room",
    body: "Voice-only space for founders who need privacy before they are ready for visibility."
  }
];

const quotes = [
  "This was the first place where I stopped pretending everything was okay.",
  "After shutting down my startup, I disappeared for 8 months.",
  "Not advice. Not networking. Just honesty.",
  "I thought failure erased my identity as a founder.",
  "For the first time after collapse, I didn’t feel alone."
];

export default function RecoveryCirclesPage() {
  return (
    <main className="main-shell landing2026 py-7 md:py-10">
      <header className="lz-topbar">
        <Link href="/landing">
          <img src="/img/d0-logo.png" alt="DayZero" className="lz-logo-img" />
        </Link>
        <nav className="lz-nav">
          {topNav.map(([label, href]) => (
            <Link key={label} href={href} className="lz-nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/app" className="btn btn-primary">
          Join Free →
        </Link>
      </header>

      <section className="circles-page mt-8">
        <div className="circles-hero">
          <div>
            <p className="circles-kicker">Private founder rooms</p>
            <h1 className="headline circles-title">Recovery Circles</h1>
            <p className="circles-subtitle">
              Private conversations for founders rebuilding after collapse, burnout,
              silence, and the strange identity loss that follows shutdown.
            </p>
            <p className="circles-subtitle">
              Not networking. Not coaching. Not performance. Just honest rooms with
              people who understand what survival actually feels like.
            </p>
          </div>

          <article className="circles-featured">
            <div className="circles-featured-top">
              <p className="circles-featured-kicker">Access format</p>
              <span className="circles-live-chip">Small curated groups</span>
            </div>
            <h2 className="circles-featured-title">A place to speak honestly before you are ready to be public again.</h2>
            <p className="circles-featured-copy">
              Some circles support anonymous participation and voice-only conversations,
              so honesty becomes possible before reputation management takes over.
            </p>
            <div className="circles-featured-meta">
              <span>Anonymous by default</span>
              <span>Voice-first options</span>
              <span>No startup theatre</span>
            </div>
          </article>
        </div>

        <div className="circles-grid">
          {circles.map((circle) => (
            <article key={circle.title} className="circles-card">
              <p className="circles-card-schedule">{circle.schedule}</p>
              <h2 className="circles-card-title">{circle.title}</h2>
              <p className="circles-card-body">{circle.body}</p>
              <button type="button" className="circles-card-link">
                Learn more
                <span>→</span>
              </button>
            </article>
          ))}
        </div>

        <section className="circles-principles">
          <div>
            <p className="circles-kicker">Why this works</p>
            <h2 className="circles-principles-title">
              Recovery starts when performance pressure finally leaves the room.
            </h2>
          </div>
          <div className="circles-principles-list">
            {principles.map((principle) => (
              <div key={principle} className="circles-principle">
                <span className="circles-principle-dot" />
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="circles-quotes">
          <div className="circles-quotes-head">
            <p className="circles-kicker">Founder voices</p>
            <p className="circles-quotes-note">
              The things founders usually only say when they stop performing.
            </p>
          </div>
          <div className="circles-quotes-grid">
            {quotes.map((quote) => (
              <blockquote key={quote} className="circles-quote">
                <p>“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="circles-cta">
          <div>
            <p className="circles-kicker">Next step</p>
            <h2 className="circles-cta-title">Find a room where you do not have to translate your collapse into a success story yet.</h2>
            <p className="circles-cta-copy">
              Recovery Circles exist for the part after the shutdown, when you need
              language, witnesses, and people who understand the emotional cost of building.
            </p>
          </div>
          <div className="circles-cta-actions">
            <Link href="/app/circles" className="btn btn-primary">
              Apply for access
            </Link>
            <Link href="/app/journal" className="btn btn-secondary">
              Start privately
            </Link>
          </div>
        </section>
      </section>

      <footer className="lz-footer mt-10">
        <div>
          <p className="muted mt-2 lz-footer-tagline">
            Start again <span>from Day Zero.</span>
          </p>
          <div className="lz-social mt-5">
            <img src="/img/social/twitter.svg" alt="Twitter" />
            <img src="/img/social/discord.svg" alt="Discord" />
            <img src="/img/social/telegram.svg" alt="Telegram" />
          </div>
        </div>
        <div className="lz-footer-links text-white/80">
          <div>
            <Link href="/manifesto">Manifesto</Link>
            <Link href="/about">About</Link>
            <Link href="/recovery-circles">Recovery Circles</Link>
          </div>
          <div>
            <p>Privacy</p>
            <p>Apply</p>
            <p>Contact</p>
          </div>
        </div>
      </footer>
      <p className="lz-copyright">© 2026 DayZero. All rights reserved.</p>
    </main>
  );
}
