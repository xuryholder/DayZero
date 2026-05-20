const uploads = ["Pitch deck", "Metrics", "Tokenomics", "Roadmap"];
const outputs = [
  "Market timing issues",
  "Burnout risk",
  "Founder conflict",
  "Fake PMF signals",
  "Unsustainable burn"
];

export default function AutopsyPage() {
  return (
    <section className="section p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-sora)" }}>
        What really killed your startup?
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/3 p-5">
          <h2 className="text-lg" style={{ fontFamily: "var(--font-sora)" }}>
            Upload
          </h2>
          <ul className="muted mt-3 space-y-2 text-sm">
            {uploads.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/3 p-5">
          <h2 className="text-lg" style={{ fontFamily: "var(--font-sora)" }}>
            AI Output
          </h2>
          <ul className="muted mt-3 space-y-2 text-sm">
            {outputs.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>

      <p className="mt-6 text-orange-300">Your next startup can be stronger.</p>
    </section>
  );
}
