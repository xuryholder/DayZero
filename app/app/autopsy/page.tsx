import Link from "next/link";

const uploads = [
  "Pitch deck",
  "Metrics export",
  "Roadmap or product memo",
  "Board notes / shutdown notes"
];

const findings = [
  {
    label: "Primary cause",
    title: "Fake PMF signals",
    confidence: "High confidence",
    body: "Retention never became real conviction. Growth activity created motion, but not durable pull."
  },
  {
    label: "Secondary cause",
    title: "Unsustainable burn",
    confidence: "Likely contributor",
    body: "Hiring pace and operating costs outgrew the evidence that the business had truly found its shape."
  },
  {
    label: "Hidden pattern",
    title: "Founder exhaustion masked as speed",
    confidence: "High confidence",
    body: "Execution kept accelerating while judgment quality quietly dropped under chronic stress."
  }
];

const evidence = [
  "Deck promised category-scale timing, but usage quality stayed inconsistent.",
  "Metrics showed motion at the top of funnel without enough repeat behavior underneath.",
  "Roadmap kept expanding instead of narrowing around one painful user need.",
  "Shutdown notes point to emotional fatigue long before the business officially broke."
];

const carryForward = [
  "Keep your founder instinct for urgency, but pair it with narrower proof thresholds.",
  "Repeat the parts that built trust with users. Do not repeat the pace that broke the team.",
  "Treat emotional depletion as strategy data, not as something to hide until collapse."
];

export default function AutopsyPage() {
  return (
    <section className="dz-panel autopsy-page">
      <div className="autopsy-hero">
        <div>
          <p className="autopsy-kicker">Forensic startup review</p>
          <h1 className="autopsy-title">What really killed your startup?</h1>
          <p className="autopsy-subtitle">
            Upload your artifacts. Get a brutally honest collapse review that separates
            surface noise from the patterns that actually mattered.
          </p>
        </div>
        <div className="autopsy-hero-card">
          <p className="autopsy-hero-label">Not a pitch review</p>
          <p className="autopsy-hero-copy">
            This is a collapse review: timing, burn, false signals, founder stress,
            broken trust, and the decisions that looked harmless until they stacked up.
          </p>
          <div className="autopsy-hero-tags">
            <span>Private</span>
            <span>Forensic</span>
            <span>No founder theater</span>
          </div>
        </div>
      </div>

      <div className="autopsy-flow">
        <article className="autopsy-panel autopsy-upload">
          <div className="autopsy-panel-head">
            <p className="autopsy-step">Step 1</p>
            <h2 className="autopsy-panel-title">Upload the evidence</h2>
          </div>
          <div className="autopsy-dropzone">
            <p className="autopsy-dropzone-title">Drop files or paste links</p>
            <p className="autopsy-dropzone-copy">
              Pitch decks, metrics exports, roadmaps, board notes, shutdown memos,
              founder reflections.
            </p>
            <button type="button" className="btn btn-secondary">
              Select files
            </button>
          </div>
          <div className="autopsy-file-list">
            {uploads.map((item) => (
              <div key={item} className="autopsy-file-chip">
                <span className="autopsy-file-dot" />
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="autopsy-panel autopsy-output">
          <div className="autopsy-panel-head">
            <p className="autopsy-step">Step 2</p>
            <h2 className="autopsy-panel-title">Collapse diagnosis</h2>
          </div>
          <div className="autopsy-findings">
            {findings.map((item) => (
              <div key={item.title} className="autopsy-finding">
                <div className="autopsy-finding-top">
                  <p className="autopsy-finding-label">{item.label}</p>
                  <span className="autopsy-confidence">{item.confidence}</span>
                </div>
                <h3 className="autopsy-finding-title">{item.title}</h3>
                <p className="autopsy-finding-body">{item.body}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="autopsy-evidence">
        <div>
          <p className="autopsy-kicker">Why we think this</p>
          <h2 className="autopsy-evidence-title">Trace the failure back to signals, not just feelings.</h2>
        </div>
        <div className="autopsy-evidence-list">
          {evidence.map((item) => (
            <div key={item} className="autopsy-evidence-item">
              <span className="autopsy-evidence-mark">+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="autopsy-carry">
        <div className="autopsy-carry-head">
          <p className="autopsy-kicker">What to carry forward</p>
          <p className="autopsy-carry-note">
            The next startup is not stronger because the last one hurt. It is stronger
            if the lesson becomes usable.
          </p>
        </div>
        <div className="autopsy-carry-list">
          {carryForward.map((item) => (
            <div key={item} className="autopsy-carry-item">
              <span className="autopsy-carry-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="autopsy-cta">
        <div>
          <p className="autopsy-kicker">Next move</p>
          <h2 className="autopsy-cta-title">Turn collapse into clarity before you build again.</h2>
          <p className="autopsy-cta-copy">
            Review the signals you missed, name the patterns honestly, and carry forward
            only what still deserves another life.
          </p>
        </div>
        <div className="autopsy-cta-actions">
          <Link href="/app/rebuild" className="btn btn-primary">
            Start private analysis
          </Link>
          <Link href="/app/stories" className="btn btn-secondary">
            See founder stories
          </Link>
        </div>
      </div>
    </section>
  );
}
