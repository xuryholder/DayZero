import Link from "next/link";

const topNav = [
  ["Stories", "/app/stories"],
  ["Manifesto", "/manifesto"],
  ["Recovery Circles", "/recovery-circles"],
  ["About", "/about"]
];

export default function ManifestoPage() {
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
          <p className="manifesto-kicker">Manifesto</p>
          <h1 className="headline manifesto-title">This is Day Zero.</h1>
          <p className="manifesto-subtitle">
            For founders rebuilding after collapse, burnout, betrayal, layoffs, and silence.
          </p>
        </div>

        <div className="manifesto-body">
          <p>Startups celebrate beginnings.</p>
          <p>Funding rounds. Launches. Growth charts. Success stories carefully polished for the internet.</p>

          <p>But almost nobody talks about what happens after everything falls apart.</p>

          <p>
            The shutdown.
            <br />
            The investor silence.
            <br />
            The co-founder breakup.
            <br />
            The months of disappearing because you no longer know who you are without the company you built.
          </p>

          <p>
            Modern startup culture worships winners, while thousands of talented founders quietly disappear behind the scenes carrying invisible scars.
          </p>

          <p>We built DayZero for them.</p>

          <p>
            Not for hustle culture pretending burnout is ambition.
            <br />
            Not for fake LinkedIn optimism.
            <br />
            Not for people performing success while falling apart privately.
          </p>

          <p>DayZero exists for founders rebuilding after failure.</p>

          <p>
            Because failure is not the end of a founder.
            <br />
            Sometimes it is the beginning of the real one.
          </p>

          <p>
            A failed startup still leaves behind experience, resilience, pattern recognition, emotional endurance, and lessons no university can teach.
            Yet the ecosystem often treats failed founders like expired products instead of recognizing them as some of the most valuable people in innovation.
          </p>

          <p>
            Many of the best operators, creators, and visionaries are people who already lost everything once and survived it.
          </p>

          <p>
            DayZero is a recovery network.
            <br />
            A second-chance infrastructure.
            <br />
            A place where founders can speak honestly, reconnect with purpose, recover emotionally, rebuild financially, and begin again without shame.
          </p>

          <p>
            We believe burnout should not erase talent.
            <br />
            Failure should not exile people from tech.
            <br />
            And rebuilding should not happen alone.
          </p>

          <p>
            The startup world does not need more fake success stories.
            <br />
            It needs more honest conversations about survival.
          </p>

          <p>
            Because every collapse contains knowledge.
            <br />
            Every shutdown leaves lessons.
            <br />
            And every founder deserves the right to begin again.
          </p>

          <p>This is not a startup graveyard.</p>
          <p className="manifesto-final">This is Day Zero.</p>
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
