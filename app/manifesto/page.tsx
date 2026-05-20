import Link from "next/link";

export default function ManifestoPage() {
  return (
    <main className="main-shell py-8 md:py-10">
      <header className="lz-topbar">
        <Link href="/landing">
          <img src="/img/d0-logo.png" alt="DayZero" className="lz-logo-img" />
        </Link>
        <nav className="lz-nav">
          <Link href="/manifesto" className="lz-nav-link">
            Manifesto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/landing" className="manifesto-back">
            ← Back
          </Link>
          <Link href="/app" className="btn btn-primary">
            Open App
          </Link>
        </div>
      </header>

      <section className="manifesto-wrap">
        <div className="manifesto-hero">
          <p className="manifesto-kicker">Manifesto</p>
          <h1 className="headline manifesto-title">This is Day Zero.</h1>
          <p className="manifesto-subtitle">
            For founders rebuilding after collapse, burnout, betrayal, layoffs, and silence.
          </p>
        </div>

        <div className="manifesto-body">
          <h2 className="headline manifesto-h2">What startup culture ignores</h2>
          <p>Startups celebrate beginnings.</p>
          <p>Nobody talks about what happens after the collapse.</p>

          <p>
            The shutdown.
            <br />
            The layoffs.
            <br />
            The investor silence.
            <br />
            The co-founder betrayal.
            <br />
            The months of disappearing from the world because you no longer know who you are without the company.
          </p>

          <p>
            Modern startup culture worships winners.
            <br />
            But behind every unicorn are thousands of founders carrying invisible scars.
          </p>

          <p>We built DayZero for them.</p>

          <p>
            Not for pitch decks.
            <br />
            Not for fake LinkedIn success stories.
            <br />
            Not for hustle culture pretending burnout is ambition.
          </p>

          <p>DayZero exists for founders rebuilding after failure.</p>

          <p>
            Because failure is not the end of a founder.
            <br />
            It is often the beginning of the real one.
          </p>

          <p>A failed startup still leaves behind:</p>
          <ul>
            <li>experience</li>
            <li>resilience</li>
            <li>pattern recognition</li>
            <li>leadership under pressure</li>
            <li>emotional endurance</li>
            <li>lessons no university can teach</li>
          </ul>

          <p>
            The ecosystem treats failed founders like expired products.
            <br />
            We believe they are one of the most valuable resources in innovation.
          </p>

          <p>
            Some of the best operators, creators, and visionaries are people who already lost everything once and survived it.
          </p>

          <p>
            DayZero is a recovery network.
            <br />
            A private signal.
            <br />
            A second chance infrastructure.
          </p>

          <h2 className="headline manifesto-h2">What DayZero offers</h2>
          <p>A place where founders can:</p>
          <ul>
            <li>speak honestly</li>
            <li>recover emotionally</li>
            <li>rebuild financially</li>
            <li>find new teams</li>
            <li>share postmortems</li>
            <li>reconnect with purpose</li>
            <li>start again without shame</li>
          </ul>

          <h2 className="headline manifesto-h2">What we believe</h2>
          <p>We believe:</p>
          <ul>
            <li>burnout should not erase talent</li>
            <li>failure should not exile people from tech</li>
            <li>rebuilding should not happen alone</li>
            <li>experience matters more than optics</li>
          </ul>

          <p>
            The startup world needs fewer fake success stories.
            <br />
            And more honest conversations about survival.
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
            <Link href="/landing">Landing</Link>
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
