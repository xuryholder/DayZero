const featuredPost = {
  type: "Anonymous confession",
  title: "We raised $1.8M and died quietly.",
  body: "I thought fundraising meant safety. It only delayed hard decisions and made the silence after shutdown feel even stranger."
};

const feed = [
  {
    type: "Shutdown postmortem",
    title: "What actually killed our startup.",
    body: "Timing mismatch, founder exhaustion, and no distribution engine."
  },
  {
    type: "Recovery update",
    title: "First week after burnout leave.",
    body: "Sleep returned. Focus didn’t. Rebuilding starts slower than I expected."
  },
  {
    type: "Founder thought",
    title: "Does anyone else feel lost after collapse?",
    body: "Not asking for advice. Just checking if this silence is normal."
  },
  {
    type: "Lesson",
    title: "What collapse taught me about leadership.",
    body: "Pressure reveals culture. Especially when there is no good option."
  }
];

const filters = ["All", "Confessions", "Postmortems", "Recovery updates", "Questions"];

const statusSignals = [
  "Day 17 after shutdown",
  "Quiet Mode enabled",
  "Energy returning slowly"
];

export default function HomePage() {
  return (
    <>
      <section className="dz-panel dz-status p-6 md:p-8">
        <div className="dz-status-shell">
          <p className="dz-kicker">Founder status</p>
          <div className="dz-status-badges">
            {statusSignals.map((item) => (
              <span key={item} className="dz-status-badge">
                {item}
              </span>
            ))}
          </div>
          <h1 className="dz-status-title">Still rebuilding.</h1>
          <p className="dz-status-copy">
            Rebuilding after shutdown means identity comes back slower than urgency.
            Today is for steadier decisions, not performance.
          </p>
        </div>
        <div className="dz-status-footer">
          <div className="dz-status-note">
            <p className="dz-status-label">Next step</p>
            <p className="dz-status-next">Burnout Recovery Circle tonight at 8:00 PM</p>
          </div>
          <div className="dz-status-note">
            <p className="dz-status-label">Last reflection</p>
            <p className="dz-status-next">2 days ago • “Clarity is coming back in pieces.”</p>
          </div>
        </div>
      </section>

      <section className="dz-panel dz-feed-panel p-6 md:p-8">
        <div className="dz-feed-header">
          <div>
            <h2 className="dz-feed-title">Founder Feed</h2>
            <p className="dz-feed-subtitle">
              What founders say when they stop performing.
            </p>
          </div>
          <button type="button" className="btn btn-secondary">
            Share anonymously
          </button>
        </div>

        <div className="dz-feed-filters">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`dz-feed-filter${index === 0 ? " is-active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <article className="dz-feed-card dz-feed-card-featured">
          <div className="dz-feed-card-head">
            <p className="dz-feed-type">{featuredPost.type}</p>
            <span className="dz-feed-featured-chip">Featured</span>
          </div>
          <p className="dz-feed-card-title">{featuredPost.title}</p>
          <p className="dz-feed-card-body">{featuredPost.body}</p>
          <div className="dz-feed-signals">
            {[
              ["Still here", 12],
              ["I get it", 8],
              ["Same", 6]
            ].map(([signal, count]) => (
              <span key={String(signal)} className="dz-feed-signal">
                {signal} · {count}
              </span>
            ))}
            <span className="dz-feed-signal-more">+2</span>
          </div>
        </article>

        <div className="dz-feed-grid">
          {feed.map((item) => (
            <article key={item.title} className="dz-feed-card">
              <p className="dz-feed-type">{item.type}</p>
              <p className="dz-feed-card-title">{item.title}</p>
              <p className="dz-feed-card-body">{item.body}</p>
              <div className="dz-feed-signals">
                {[
                  ["Still here", 12],
                  ["I get it", 8],
                  ["Same", 6]
                ].map(([signal, count]) => (
                  <span key={String(signal)} className="dz-feed-signal">
                    {signal} · {count}
                  </span>
                ))}
                <span className="dz-feed-signal-more">+2</span>
              </div>
            </article>
          ))}
        </div>

        <div className="dz-feed-actions">
          <button type="button" className="btn btn-secondary dz-feed-load-more">
            Load more
          </button>
        </div>
      </section>
    </>
  );
}
