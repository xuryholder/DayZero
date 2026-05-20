const items = ["Second-chance jobs", "Cofounder matching", "Operator network", "Founder-friendly investors"];

export default function RebuildPage() {
  return (
    <section className="section p-6 md:p-8">
      <h1 className="text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
        Rebuild Network
      </h1>
      <p className="muted mt-3">Find opportunities designed for experienced founders rebuilding after collapse.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white/90">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
