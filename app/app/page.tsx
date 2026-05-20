const feed = [
  {
    type: "Anonymous confession",
    title: "We raised $1.8M and died quietly.",
    body: "I thought fundraising meant safety. It only delayed hard decisions."
  },
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

export default function HomePage() {
  return (
    <>
      <section className="dz-panel dz-hero p-6 md:p-8">
        <p className="dz-kicker">Founder status</p>
        <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-sora)" }}>
          Still rebuilding.
        </h1>
        <p className="muted mt-3 text-sm">Rebuilding after shutdown • Quiet Mode enabled</p>
      </section>

      <section className="dz-panel p-6 md:p-8">
        <h2 className="text-xl" style={{ fontFamily: "var(--font-sora)" }}>
          Founder Feed
        </h2>
        <div className="mt-5 space-y-3">
          {feed.map((item) => (
            <article key={item.title} className="dz-feed-card">
              <p className="dz-feed-type">{item.type}</p>
              <p className="mt-2 text-xl text-white/94">{item.title}</p>
              <p className="muted mt-2 text-sm">{item.body}</p>
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
      </section>
    </>
  );
}
