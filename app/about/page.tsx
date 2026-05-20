import Link from "next/link";

const topNav = [
  ["Stories", "/app/stories"],
  ["Manifesto", "/manifesto"],
  ["Recovery Circles", "/recovery-circles"],
  ["About", "/about"]
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
          <p className="manifesto-kicker">About DayZero</p>
          <h1 className="headline manifesto-title">For founders after the silence.</h1>
          <p className="manifesto-subtitle">
            We exist for what happens after collapse and for the founders rebuilding from it.
          </p>
        </div>

        <div className="manifesto-body">
          <p>DayZero was created for founders after the part nobody talks about.</p>

          <p>
            Not the funding announcement.
            <br />
            Not the launch post.
            <br />
            Not the success story written after everything worked.
          </p>

          <p>We exist for the silence after collapse.</p>

          <p>
            The shutdowns.
            <br />
            The burnout.
            <br />
            The failed pivots.
            <br />
            The co-founder breakups.
            <br />
            The months when founders disappear from the ecosystem because they no longer know who they are without the company they built.
          </p>

          <p>
            Startup culture celebrates beginnings and rewards visible success.
            <br />
            But behind every failed startup is usually not a failed person, only someone carrying pressure, exhaustion, grief, experience, and lessons invisible to everyone else.
          </p>

          <p>We believe the startup world is losing some of its most valuable people this way.</p>

          <p>
            Because founders who survived failure understand things no course, accelerator, or podcast can teach:
            how to operate under uncertainty, how to survive chaos, how to rebuild after losing everything, and how to keep moving when nobody believes in you anymore.
          </p>

          <p>
            DayZero is not a motivational platform.
            <br />
            And not another networking community pretending failure is “just part of the journey.”
          </p>

          <p>
            We are building a recovery and rebuilding network for founders who need space to recover emotionally, reconnect professionally, and start again without shame.
          </p>

          <p>
            A place for honest stories.
            <br />
            Private circles.
            <br />
            Second chances.
            <br />
            Real conversations instead of performance.
          </p>

          <p>
            We believe failure should not erase people.
            <br />
            Burnout should not exile talent from the ecosystem.
            <br />
            And rebuilding should not happen alone.
          </p>

          <p>Because every failed startup leaves behind an experienced founder.</p>

          <p className="manifesto-final">And sometimes the most important chapter starts after everything falls apart.</p>
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
