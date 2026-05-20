import Link from "next/link";

const topNav = [
  ["Stories", "/app/stories"],
  ["Manifesto", "/manifesto"],
  ["Recovery Circles", "/recovery-circles"],
  ["About", "/about"]
];

const offerings = [
  {
    title: "Founder stories",
    body: "Anonymous postmortems and honest reflections from founders after shutdown, betrayal, burnout, and silence.",
    href: "/app/stories",
    cta: "Read stories"
  },
  {
    title: "Recovery circles",
    body: "Private, curated rooms for founders who need honest conversation before they are ready for visibility again.",
    href: "/recovery-circles",
    cta: "See circles"
  },
  {
    title: "Quiet journal",
    body: "A private place to write, track emotional patterns, and recover clarity without turning everything into a performance.",
    href: "/app/journal",
    cta: "Open journal"
  },
  {
    title: "Rebuild network",
    body: "A second-chance layer for roles, operators, cofounders, and investors who respect scar tissue.",
    href: "/app/rebuild",
    cta: "Explore network"
  }
];

const beliefs = [
  "Failure should not erase people from the ecosystem.",
  "Burnout should not exile talent from meaningful work.",
  "Honest recovery matters more than polished optimism.",
  "Rebuilding should not have to happen alone."
];

export default function AboutPage() {
  return (
    <main className="main-shell landing2026 py-7 md:py-10">
      <header className="lz-topbar">
        <Link href="/landing">
          <img src="/img/d0-logo.png" alt="DayZero" className="lz-logo-img" />
        </Link>
        <nav className="lz-nav">
          {topNav.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`lz-nav-link${label === "About" ? " is-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/app" className="btn btn-primary">
          Join Free →
        </Link>
      </header>

      <section className="about-page mt-8">
        <div className="about-hero">
          <div>
            <p className="about-kicker">About DayZero</p>
            <h1 className="headline about-title">For founders after the silence.</h1>
            <p className="about-subtitle">
              DayZero exists for what happens after collapse: shutdown, burnout,
              failed pivots, cofounder fallout, and the quiet period when founders
              stop knowing who they are without the company they built.
            </p>
            <div className="about-hero-actions">
              <Link href="/manifesto" className="btn btn-primary">
                Read the manifesto
              </Link>
              <Link href="/recovery-circles" className="btn btn-secondary">
                Explore recovery circles
              </Link>
            </div>
          </div>

          <article className="about-sidecard">
            <p className="about-sidecard-kicker">Built for the aftermath</p>
            <h2 className="about-sidecard-title">Not a motivation platform. Not startup theatre.</h2>
            <p className="about-sidecard-copy">
              We are building recovery and rebuilding infrastructure for founders who
              need emotional room, honest language, and better second chances.
            </p>
            <div className="about-sidecard-tags">
              <span>Private by default</span>
              <span>Recovery-aware</span>
              <span>Human-first</span>
            </div>
          </article>
        </div>

        <section className="about-why">
          <div>
            <p className="about-kicker">Why this exists</p>
            <h2 className="about-section-title">
              Startup culture celebrates beginnings. Almost nobody stays for the aftermath.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Behind many failed startups is not a failed person, only someone carrying
              pressure, exhaustion, grief, experience, and lessons invisible to everyone else.
            </p>
            <p>
              We believe the startup world is quietly losing some of its most valuable
              people this way, even though founders who survived failure often understand
              uncertainty, chaos, and rebuilding better than anyone.
            </p>
          </div>
        </section>

        <section className="about-offerings">
          <div className="about-offerings-head">
            <div>
              <p className="about-kicker">What you find here</p>
              <h2 className="about-section-title">Support that matches the stage after collapse.</h2>
            </div>
            <p className="about-head-note">
              Not one product. A set of spaces for recovery, reflection, honesty, and second chances.
            </p>
          </div>

          <div className="about-offerings-grid">
            {offerings.map((item) => (
              <Link key={item.title} href={item.href} className="about-offering-card">
                <h3 className="about-offering-title">{item.title}</h3>
                <p className="about-offering-copy">{item.body}</p>
                <span className="about-offering-link">
                  {item.cta}
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-beliefs">
          <div>
            <p className="about-kicker">What we believe</p>
            <h2 className="about-section-title">
              Failure is not the end of a founder. Sometimes it is the beginning of the real one.
            </h2>
          </div>
          <div className="about-beliefs-list">
            {beliefs.map((belief) => (
              <div key={belief} className="about-belief">
                <span className="about-belief-dot" />
                <p>{belief}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div>
            <p className="about-kicker">Next step</p>
            <h2 className="about-cta-title">Begin again without pretending you were untouched by what happened.</h2>
            <p className="about-cta-copy">
              Start with the manifesto, enter a recovery circle, or keep things private
              for now. The point is not momentum for its own sake. The point is a better way back.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link href="/app" className="btn btn-primary">
              Enter DayZero
            </Link>
            <Link href="/app/stories" className="btn btn-secondary">
              Read founder stories
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
            <Link href="/app/stories">Founder Stories</Link>
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
