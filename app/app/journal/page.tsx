export default function JournalPage() {
  return (
    <section className="section p-6 md:p-8">
      <h1 className="text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
        Private Journal
      </h1>
      <p className="muted mt-3 max-w-2xl">
        A private emotional recovery space. Capture reflections, track stress patterns, and mark progress while rebuilding.
      </p>
      <article className="mt-5 rounded-2xl border border-white/10 bg-white/3 p-5 text-sm text-white/85">
        Prompt: What did your last startup teach you that your next one must never ignore?
      </article>
    </section>
  );
}
