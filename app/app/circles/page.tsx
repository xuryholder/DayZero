const circles = [
  "Burnout Recovery Circle",
  "Post-Shutdown Confidence Reset",
  "Cofounder Conflict Debrief"
];

export default function CirclesPage() {
  return (
    <section className="section p-6 md:p-8">
      <h1 className="text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
        Recovery Circles
      </h1>
      <p className="muted mt-3">Private founder groups focused on healing, clarity, and next steps.</p>
      <div className="mt-5 space-y-3">
        {circles.map((circle) => (
          <article key={circle} className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white/90">
            {circle}
          </article>
        ))}
      </div>
    </section>
  );
}
