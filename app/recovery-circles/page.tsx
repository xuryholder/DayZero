import Link from "next/link";

const topNav = [
  ["Stories", "/app/stories"],
  ["Manifesto", "/manifesto"],
  ["Recovery Circles", "/recovery-circles"],
  ["About", "/about"]
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

      <section className="manifesto-wrap mt-8">
        <div className="manifesto-hero">
          <p className="manifesto-kicker">Private Founder Rooms</p>
          <h1 className="headline manifesto-title">Recovery Circles</h1>
          <p className="manifesto-subtitle">Private conversations for founders rebuilding after collapse.</p>
          <p className="manifesto-subtitle mt-4">
            Not networking.
            <br />
            Not coaching.
            <br />
            Not performance.
          </p>
          <p className="manifesto-subtitle mt-4">
            A place for honest conversations between people who understand what it feels like to lose something they gave everything to build.
          </p>
          <Link href="/app/circles" className="btn btn-primary mt-7">
            Apply for Access →
          </Link>
        </div>

        <div className="manifesto-body">
          <h2 className="headline manifesto-h2">Most founders have nobody they can speak honestly to after failure.</h2>
          <p>Startup culture celebrates launches, funding rounds, and success stories.</p>
          <p>But almost nobody talks about what happens after everything falls apart.</p>
          <p>
            The shutdown.
            <br />
            The burnout.
            <br />
            The investor silence.
            <br />
            The cofounder betrayal.
            <br />
            The months of disappearing because you no longer know who you are without the company you built.
          </p>
          <p>Recovery Circles were created for that moment.</p>

          <h2 className="headline manifesto-h2">Honest conversations.</h2>
          <p>
            About burnout, collapse, layoffs, identity loss, failed raises, pressure, loneliness, and rebuilding after failure.
          </p>
          <p>
            No pitch decks.
            <br />
            No growth hacks.
            <br />
            No pretending.
          </p>

          <h2 className="headline manifesto-h2">Anonymous by default.</h2>
          <p>
            Some founders are not ready to speak publicly after collapse.
          </p>
          <p>
            Selected circles support anonymous participation and voice-only conversations, allowing founders to speak openly without exposing identity, reputation, or company history.
          </p>
          <p>Honesty becomes possible when performance disappears.</p>

          <h2 className="headline manifesto-h2">Small trusted circles.</h2>
          <p>Recovery Circles are intentionally small and curated.</p>
          <p>
            No audience.
            <br />
            No startup theater.
            <br />
            No personal branding.
          </p>
          <p>Just founders who understand what survival actually feels like.</p>

          <h2 className="headline manifesto-h2">Real postmortems.</h2>
          <p>Not polished LinkedIn lessons written after success.</p>
          <p>
            But honest conversations about what actually happened:
            the mistakes, the pressure, the warning signs, the emotional cost, and the silence after the company ends.
          </p>
          <p>Every collapse leaves behind knowledge.</p>

          <h2 className="headline manifesto-h2">Rebuilding starts after survival.</h2>
          <p>
            Some founders rebuild companies.
            <br />
            Some rebuild identity.
            <br />
            Some simply learn how to breathe again after years of pressure.
          </p>
          <p>
            Recovery Circles exist to help founders reconnect with direction, purpose, confidence, and people who understand.
          </p>

          <h2 className="headline manifesto-h2">Founder Quotes</h2>
          <div className="rc-quotes">
            {quotes.map((quote) => (
              <blockquote key={quote} className="rc-quote">
                <p>“{quote}”</p>
              </blockquote>
            ))}
          </div>

          <h2 className="headline manifesto-h2">Startup culture teaches founders how to build companies.</h2>
          <p>Nobody teaches them how to survive losing one.</p>
          <p>Every failed startup leaves behind an experienced founder.</p>
          <p className="manifesto-final">This is Day Zero.</p>
          <Link href="/app/circles" className="btn btn-primary mt-6">
            Apply for Access →
          </Link>
        </div>
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
