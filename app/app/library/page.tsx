import Link from "next/link";

const featured = {
  eyebrow: "Featured reading",
  title: "This is Day Zero",
  body: "A foundational text for founders rebuilding after collapse, burnout, betrayal, layoffs, and silence.",
  href: "/manifesto",
  cta: "Read manifesto"
};

const shelves = [
  {
    title: "Start here",
    description: "The pieces that help reframe failure before you try to optimize your next move.",
    items: [
      ["The DayZero Manifesto", "/manifesto"],
      ["Recovery Circles", "/recovery-circles"],
      ["Founder Stories", "/app/stories"]
    ]
  },
  {
    title: "Rebuild toolkit",
    description: "Practical pages for honest diagnosis, next-step clarity, and reconnecting with serious people.",
    items: [
      ["Startup Autopsy", "/app/autopsy"],
      ["Rebuild Network", "/app/rebuild"],
      ["Quiet Journal", "/app/journal"]
    ]
  }
];

const paths = [
  {
    title: "I just shut down",
    body: "Start with emotional containment, not performance. Read the manifesto, then enter a recovery circle.",
    href: "/recovery-circles",
    cta: "Find a circle"
  },
  {
    title: "I need clarity",
    body: "Use the autopsy flow to name what really failed and what should never be repeated.",
    href: "/app/autopsy",
    cta: "Run autopsy"
  },
  {
    title: "I need a next step",
    body: "Move from collapse into direction with roles, operators, cofounders, and founder-friendly investors.",
    href: "/app/rebuild",
    cta: "Open rebuild"
  }
];

export default function LibraryPage() {
  return (
    <section className="dz-panel library-page">
      <div className="library-hero">
        <div>
          <p className="library-kicker">Founder recovery library</p>
          <h1 className="library-title">Library</h1>
          <p className="library-subtitle">
            A curated shelf of readings, tools, and recovery paths for founders trying
            to make sense of collapse without slipping back into startup theater.
          </p>
        </div>
        <article className="library-featured">
          <p className="library-featured-kicker">{featured.eyebrow}</p>
          <h2 className="library-featured-title">{featured.title}</h2>
          <p className="library-featured-copy">{featured.body}</p>
          <Link href={featured.href} className="library-featured-link">
            {featured.cta}
            <span>→</span>
          </Link>
        </article>
      </div>

      <div className="library-shelves">
        {shelves.map((shelf) => (
          <section key={shelf.title} className="library-shelf">
            <div className="library-shelf-head">
              <h2 className="library-shelf-title">{shelf.title}</h2>
              <p className="library-shelf-copy">{shelf.description}</p>
            </div>
            <div className="library-shelf-grid">
              {shelf.items.map(([label, href]) => (
                <Link key={label} href={href} className="library-item-card">
                  <span className="library-item-dot" />
                  <span className="library-item-label">{label}</span>
                  <span className="library-item-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="library-paths">
        <div className="library-paths-head">
          <p className="library-kicker">Choose your path</p>
          <h2 className="library-paths-title">Start where you actually are.</h2>
        </div>
        <div className="library-paths-grid">
          {paths.map((path) => (
            <article key={path.title} className="library-path-card">
              <h3 className="library-path-title">{path.title}</h3>
              <p className="library-path-copy">{path.body}</p>
              <Link href={path.href} className="library-path-link">
                {path.cta}
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="library-why">
        <div>
          <p className="library-kicker">Why this page exists</p>
          <h2 className="library-why-title">
            Founders do not just need inspiration after failure. They need orientation.
          </h2>
        </div>
        <div className="library-why-copy">
          <p>
            Most founder content is built for momentum, growth, and public optimism.
            This library is built for the quieter period after the collapse, when you
            need language, context, and a path back to yourself.
          </p>
          <p>
            The goal is not more content. The goal is better sequencing: what to read,
            where to go next, and what kind of support actually fits the stage you are in.
          </p>
        </div>
      </section>
    </section>
  );
}
