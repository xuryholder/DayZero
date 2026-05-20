import Link from "next/link";

const featuredStory = {
  title: "Raised $1.8M. Died quietly.",
  quote: "We kept posting wins long after the company was emotionally dead.",
  handle: "ghostdefi",
  role: "Former DeFi founder",
  meta: "Seed stage • Team of 9 • Shutdown after runway collapse",
  aftermath: "14 months later: still rebuilding confidence, not just a company.",
  tags: ["fundraising pressure", "silent failure", "identity loss"]
};

const stories = [
  {
    title: "I disappeared for 8 months.",
    quote: "After shutdown, every message felt like proof that I had failed in public.",
    handle: "silentpivot",
    role: "AI startup founder",
    meta: "Post-product pivot • Burnout spiral • Went completely offline",
    aftermath: "Came back slowly through private founder circles.",
    tag: "burnout"
  },
  {
    title: "My cofounder betrayal broke more than the company.",
    quote: "The hardest part was not losing the startup. It was losing my ability to trust.",
    handle: "fracturedsaas",
    role: "SaaS founder",
    meta: "B2B SaaS • Cofounder split • Investor pressure during fallout",
    aftermath: "Still learning how to build without paranoia.",
    tag: "cofounder conflict"
  },
  {
    title: "I looked functional. I was not.",
    quote: "Outwardly I was networking. Internally I was grieving a version of myself.",
    handle: "afterdeck",
    role: "Consumer app founder",
    meta: "Pre-seed • Solo founder • Closed after 2 years of trying",
    aftermath: "Started journaling before starting anything new.",
    tag: "identity loss"
  }
];

const fragments = [
  "I was more honest with strangers than with investors.",
  "Shutdown felt less like a business event and more like a death notice.",
  "I did not need growth advice. I needed somewhere to speak without performing."
];

const filters = ["All", "Shutdown", "Cofounder conflict", "Burnout", "Identity loss"];

export default function StoriesPage() {
  return (
    <section className="dz-panel stories-page">
      <div className="stories-hero">
        <p className="stories-kicker">Anonymous founder archive</p>
        <h1 className="stories-title">Real stories. No fake success culture.</h1>
        <p className="stories-subtitle">
          Anonymous postmortems from founders who shut down, vanished, got betrayed,
          burned out, and are still figuring out how to begin again.
        </p>
      </div>

      <div className="stories-filters" aria-label="Story filters">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`stories-filter${index === 0 ? " is-active" : ""}`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <article className="stories-featured">
        <div className="stories-featured-top">
          <p className="stories-label">Featured postmortem</p>
          <span className="stories-verified">Anonymous verified submission</span>
        </div>
        <div className="stories-featured-grid">
          <div>
            <h2 className="stories-featured-title">{featuredStory.title}</h2>
            <p className="stories-featured-quote">&ldquo;{featuredStory.quote}&rdquo;</p>
            <p className="stories-featured-aftermath">{featuredStory.aftermath}</p>
          </div>
          <div className="stories-meta-card">
            <p className="stories-handle">@{featuredStory.handle}</p>
            <p className="stories-role">{featuredStory.role}</p>
            <p className="stories-meta">{featuredStory.meta}</p>
            <div className="stories-tag-row">
              {featuredStory.tags.map((tag) => (
                <span key={tag} className="stories-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <div className="stories-grid">
        {stories.map((story) => (
          <article key={story.title} className="stories-card">
            <p className="stories-label">{story.tag}</p>
            <h3 className="stories-card-title">{story.title}</h3>
            <p className="stories-card-quote">&ldquo;{story.quote}&rdquo;</p>
            <p className="stories-meta">{story.meta}</p>
            <p className="stories-aftermath">{story.aftermath}</p>
            <div className="stories-card-footer">
              <div>
                <p className="stories-handle">@{story.handle}</p>
                <p className="stories-role">{story.role}</p>
              </div>
              <span className="stories-ghost-dot" />
            </div>
          </article>
        ))}
      </div>

      <div className="stories-fragments">
        <div className="stories-fragments-head">
          <p className="stories-label">Story fragments</p>
          <p className="stories-fragments-note">
            The things founders usually only say in private.
          </p>
        </div>
        <div className="stories-fragments-list">
          {fragments.map((fragment) => (
            <blockquote key={fragment} className="stories-fragment">
              &ldquo;{fragment}&rdquo;
            </blockquote>
          ))}
        </div>
      </div>

      <div className="stories-why">
        <div>
          <p className="stories-label">Why this exists</p>
          <h2 className="stories-why-title">
            Startup culture documents launches. We document what happens after collapse.
          </h2>
        </div>
        <div className="stories-why-copy">
          <p>
            Most founder spaces reward performance. This page is for the aftermath:
            shutdown, grief, shame, betrayal, burnout, and the slow work of becoming
            a person again.
          </p>
          <ul className="stories-principles">
            <li>Anonymous by default</li>
            <li>No growth-posturing</li>
            <li>No fake redemption arc required</li>
          </ul>
        </div>
      </div>

      <div className="stories-cta">
        <div>
          <p className="stories-label">Continue privately</p>
          <h2 className="stories-cta-title">Read quietly, share honestly, rebuild slowly.</h2>
          <p className="stories-cta-copy">
            If one of these stories feels too familiar, you are exactly who DayZero is for.
          </p>
        </div>
        <div className="stories-cta-actions">
          <Link href="/recovery-circles" className="btn btn-primary">
            Join a recovery circle
          </Link>
          <Link href="/manifesto" className="btn btn-secondary">
            Read the manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}
