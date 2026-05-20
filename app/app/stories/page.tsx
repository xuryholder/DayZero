const stories = [
  ["We raised $1.8M and quietly died.", "Anonymous DeFi founder"],
  ["After shutdown I disappeared for 8 months.", "AI startup founder"],
  ["My cofounder betrayal destroyed the company.", "SaaS founder"]
];

export default function StoriesPage() {
  return (
    <section className="section p-6 md:p-8">
      <h1 className="text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
        Real stories. No fake success culture.
      </h1>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {stories.map(([quote, author]) => (
          <article key={quote} className="rounded-2xl border border-white/10 bg-white/3 p-5">
            <p className="text-base">&ldquo;{quote}&rdquo;</p>
            <p className="muted mt-3 text-sm">{author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
