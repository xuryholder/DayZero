const feed = [
  "Founder story: we shut down after 14 months, here is what we missed.",
  "Lesson learned: cashflow beats hype in every market.",
  "Anonymous discussion: burnout after constant pivots.",
  "Recovery update: first interview after shutdown."
];

export default function HomePage() {
  return (
    <>
      <section className="section p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-sora)" }}>
          Welcome back.
        </h1>
        <p className="muted mt-3">Rebuilding takes time.</p>
      </section>

      <section className="section p-6 md:p-8">
        <h2 className="text-xl" style={{ fontFamily: "var(--font-sora)" }}>
          Recovery Feed
        </h2>
        <div className="mt-4 space-y-3">
          {feed.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white/90">
              {item}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
