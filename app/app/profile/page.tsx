import Link from "next/link";

const scars = [
  {
    title: "Survived a bear market",
    body: "Learned how quickly conviction turns into noise when the market stops rewarding momentum."
  },
  {
    title: "Pivoted twice",
    body: "Got better at letting go of a story that no longer matched reality."
  },
  {
    title: "Rebuilt after burnout",
    body: "Recovery taught me that calm is a stronger operating system than constant urgency."
  }
];

const stats = [
  {
    value: "3",
    label: "Startups built",
    note: "From first-time optimism to scar-tissue judgment."
  },
  {
    value: "2",
    label: "Shutdowns survived",
    note: "Enough to know collapse changes the founder, not just the company."
  },
  {
    value: "14",
    label: "Lessons shared",
    note: "Writing honestly instead of retrofitting everything into a clean narrative."
  },
  {
    value: "Growth / Product / Web3",
    label: "Current strengths",
    note: "Operator instinct, product clarity, and post-hype market realism."
  }
];

const timeline = [
  "Shutdown forced a full stop after months of emotional overextension.",
  "Burnout leave created distance from constant founder performance.",
  "Private writing made the aftermath easier to name honestly.",
  "Now exploring a steadier second chapter with better boundaries."
];

const currentMode = [
  "Quiet mode enabled",
  "Open to recovery circles",
  "Not interested in performative networking",
  "Looking for serious operators"
];

export default function ProfilePage() {
  return (
    <section className="dz-panel profile-page">
      <div className="profile-hero">
        <div>
          <p className="profile-kicker">Founder journey</p>
          <h1 className="profile-title">Rebuilding with scar tissue, not pretending it never happened.</h1>
          <p className="profile-subtitle">
            Two shutdowns, one burnout, and a slower relationship with ambition.
            Still building, but with better judgment about what growth is allowed to cost.
          </p>
          <div className="profile-hero-actions">
            <button type="button" className="btn btn-primary">
              Edit profile
            </button>
            <Link href="/app/journal" className="btn btn-secondary">
              Open journal
            </Link>
          </div>
        </div>

        <aside className="profile-hero-card">
          <p className="profile-hero-label">Current mode</p>
          <div className="profile-mode-tags">
            {currentMode.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="profile-hero-copy">
            This profile is less about achievement signaling and more about naming
            what kind of builder you are after surviving real fallout.
          </p>
        </aside>
      </div>

      <div className="profile-grid">
        <section className="profile-summary">
          <div className="profile-section-head">
            <p className="profile-label">Profile summary</p>
            <p className="profile-section-note">Who you are now is more useful than who you used to pitch.</p>
          </div>

          <div className="profile-stat-grid">
            {stats.map((item) => (
              <article key={item.label} className="profile-stat-card">
                <p className="profile-stat-value">{item.value}</p>
                <p className="profile-stat-label">{item.label}</p>
                <p className="profile-stat-note">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="profile-sidebar">
          <section className="profile-focus-card">
            <p className="profile-label">Current focus</p>
            <h2 className="profile-focus-title">Steady work. Honest people. No startup theater.</h2>
            <p className="profile-focus-copy">
              Looking for environments where judgment, resilience, and emotional range
              matter more than hype stamina.
            </p>
          </section>
        </aside>
      </div>

      <div className="profile-lower">
        <section className="profile-timeline">
          <div className="profile-section-head">
            <p className="profile-label">Recovery timeline</p>
            <p className="profile-section-note">The founder story after the startup story ended.</p>
          </div>
          <div className="profile-timeline-list">
            {timeline.map((item, index) => (
              <article key={item} className="profile-timeline-item">
                <span className="profile-timeline-step">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-scars">
          <div className="profile-section-head">
            <p className="profile-label">Battle scars</p>
            <p className="profile-section-note">What experience left behind that still has value.</p>
          </div>
          <div className="profile-scars-grid">
            {scars.map((scar) => (
              <article key={scar.title} className="profile-scar-card">
                <h3 className="profile-scar-title">{scar.title}</h3>
                <p className="profile-scar-copy">{scar.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="profile-cta">
        <div>
          <p className="profile-label">Next step</p>
          <h2 className="profile-cta-title">Keep rebuilding in places that let you stay honest.</h2>
          <p className="profile-cta-copy">
            Use your profile as context, then keep going privately, relationally, or
            with more structure depending on what this stage actually needs.
          </p>
        </div>
        <div className="profile-cta-actions">
          <Link href="/app/rebuild" className="btn btn-primary">
            Open rebuild network
          </Link>
          <Link href="/recovery-circles" className="btn btn-secondary">
            Join recovery circles
          </Link>
        </div>
      </div>
    </section>
  );
}
