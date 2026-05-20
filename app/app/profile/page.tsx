const scars = ["Survived bear market", "Pivoted twice", "Rebuilt after burnout"];

export default function ProfilePage() {
  return (
    <section className="section p-6 md:p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-white/65">Founder Journey</p>
      <h1 className="mt-2 text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
        Rebuilding
      </h1>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <article className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm">Startups Built: 3</article>
        <article className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm">Shutdowns Survived: 2</article>
        <article className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm">Lessons Shared: 14</article>
        <article className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm">Core Skills: Growth / Product / Web3</article>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/3 p-5">
        <h2 className="text-lg" style={{ fontFamily: "var(--font-sora)" }}>
          Battle Scars
        </h2>
        <ul className="muted mt-3 space-y-2 text-sm">
          {scars.map((scar) => (
            <li key={scar}>• {scar}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
