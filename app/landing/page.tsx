import Link from "next/link";
import { CircleArrowUp, Compass, Layers3, Lock, Radar, Shield, Users } from "lucide-react";

const topNav = ["Stories", "Manifesto", "Recovery Circles", "About"];

const topFeatures = [
  {
    title: "Founder Signal",
    body: "Safe place. Intelligent club. Underground network. Anonymous by default.",
    icon: Lock
  },
  {
    title: "Private circles",
    body: "Small, trusted groups of founders who understand.",
    icon: Users
  },
  {
    title: "Recovery + rebuild",
    body: "Tools, support, and guidance to recover and rebuild.",
    icon: Layers3
  },
  {
    title: "Second chances",
    body: "Find cofounders, jobs, investors, and your next chapter.",
    icon: CircleArrowUp
  }
];

const painCards = [
  ["Burned out?", "Talk to founders who survived it.", "/img/burnedout.png"],
  ["Startup collapsed?", "Turn failure into experience.", "/img/startupcollapsed.png"],
  ["Lost direction?", "Find your next chapter.", "/img/lostdirection.png"]
];

const stories = [
  ["We raised $1.8M and quietly died within months.", "ghostdefi", "DeFi founder", "/img/ava/ava1.png"],
  ["After shutdown I disappeared for 8 months.", "silentpivot", "AI startup founder", "/img/ava/ava2.jpg"],
  ["My cofounder betrayal destroyed the company.", "fracturedsaas", "SaaS founder", "/img/ava/ava3.png"]
];
const trustAvatars = ["/img/ava/ava1.png", "/img/ava/ava2.jpg", "/img/ava/ava3.png", "/img/ava/ava4.jpg"];

const featureList = [
  ["Recovery Circles", "Private founder groups.", Users],
  ["Anonymous Mode", "Safe identity & privacy.", Shield],
  ["Startup Autopsies", "AI-powered postmortem analysis.", Radar],
  ["Rebuild Network", "Find cofounders, jobs & investors.", Compass]
] as const;

export default function LandingPage() {
  return (
    <main className="main-shell landing2026 py-7 md:py-10">
      <header className="lz-topbar">
        <img src="/img/d0-logo.png" alt="DayZero" className="lz-logo-img" />
        <nav className="lz-nav">
          {topNav.map((item) => (
            <Link key={item} href={item === "Manifesto" ? "/manifesto" : "#"} className="lz-nav-link">
              {item}
            </Link>
          ))}
        </nav>
        <Link href="/app" className="btn btn-primary">
          Join Free →
        </Link>
      </header>

      <section className="lz-hero mt-7">
        <h1 className="headline lz-title">
          Your startup failed.
          <br />
          Your story did not.
          <br />
          Start again
          <br />
          from <span>Day Zero.</span>
        </h1>
        <p className="muted lz-sub mt-6">
          Anonymous recovery network for founders rebuilding after shutdowns, burnout, failed pivots, layoffs, and collapse.
        </p>
        <div className="lz-hero-actions mt-8 flex flex-wrap justify-center">
          <Link className="btn btn-primary" href="/app">
            Join DayZero →
          </Link>
          <Link className="btn btn-secondary" href="/app/stories">
            Read Founder Stories
          </Link>
        </div>
        <div className="lz-trust mt-7">
          <div className="lz-avatars" aria-hidden>
            {trustAvatars.map((src, index) => (
              <img key={src} src={src} alt="" className="lz-avatar-trust" style={{ zIndex: 10 - index }} />
            ))}
          </div>
          <p className="muted">Trusted by founders from Web3, AI, SaaS & startups worldwide.</p>
        </div>
      </section>

      <section className="lz-feature-row mt-10">
        {topFeatures.map((item) => {
          const Icon = item.icon;
          return (
            <article className="lz-feature-box" key={item.title}>
              <Icon size={18} className="text-orange-300" />
              <p className="headline mt-3 text-2xl">{item.title}</p>
              <p className="muted mt-2">{item.body}</p>
            </article>
          );
        })}
      </section>

      <section className="lz-pain-grid mt-10">
        {painCards.map(([title, _body, imageSrc], index) => (
          <article className="lz-pain" key={title}>
            <div className={`lz-pain-visual lz-pain-visual-${index + 1}`}>
              <img src={imageSrc} alt={title} className={`lz-pain-image lz-pain-image-${index + 1}`} />
            </div>
          </article>
        ))}
      </section>

      <section className="lz-stories mt-14">
        <div className="lz-stories-left">
          <h2 className="headline lz-stories-title">
            Real stories.
            <br />
            No fake success culture.
          </h2>
          <Link href="/app/stories" className="lz-stories-link">
            Explore Stories →
          </Link>
        </div>

        <div className="lz-stories-grid">
          {stories.map(([quote, name, role, avatar]) => (
            <article className="lz-story" key={quote}>
              <p className="lz-story-quote-mark">“</p>
              <p className="lz-story-text">{quote}</p>
              <div className="lz-story-user">
                <img src={avatar} alt={name} className="lz-avatar-img" />
                <p className="lz-story-user-text">
                  {name}
                  <br />
                  <span>{role}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lz-rebuild mt-10">
        <div>
          <h2 className="headline text-6xl leading-tight">
            Not a startup graveyard.
            <br />
            <span>A rebuilding network.</span>
          </h2>
          <p className="muted mt-5 max-w-xl text-xl leading-relaxed">
            DayZero helps founders recover emotionally, professionally, and financially after startup collapse. Failure should not exile people from the ecosystem.
          </p>
        </div>

        <div className="lz-mini-grid">
          {featureList.map(([title, body, Icon]) => (
            <article className="lz-mini" key={title}>
              <Icon size={18} className="text-orange-300" />
              <p className="headline mt-2 text-2xl">{title}</p>
              <p className="muted mt-1">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lz-final mt-8">
        <div>
          <p className="headline lz-final-title">
            Every failed startup
            <br />
            leaves behind an
            <br />
            <span>experienced founder.</span>
          </p>
          <p className="muted lz-final-sub mt-5">Failure is not the end of a founder.</p>
        </div>
        <div className="lz-final-actions">
          <Link href="/app" className="btn btn-primary w-full justify-center lz-final-btn">
            Join DayZero →
          </Link>
          <Link href="/app/stories" className="btn btn-secondary w-full justify-center lz-final-btn">
            Read Stories
          </Link>
        </div>
      </section>

      <footer className="lz-footer mt-8">
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
            <p>Founder Stories</p>
            <p>Recovery Circles</p>
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
