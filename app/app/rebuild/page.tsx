import Link from "next/link";

const opportunities = [
  {
    title: "Second-chance jobs",
    body: "Roles for founders who can operate through ambiguity, repair momentum, and lead after things go wrong.",
    meta: "COO • Product lead • Chief of staff • Founder in residence",
    cta: "Browse roles"
  },
  {
    title: "Cofounder matching",
    body: "Meet people who have already survived chaos and now care more about character than startup theater.",
    meta: "Second-time founders • Calm operators • Low-ego builders",
    cta: "Find a match"
  },
  {
    title: "Operator network",
    body: "A quieter layer of founders, early operators, and post-shutdown builders who still want to make useful things.",
    meta: "Product • Ops • GTM • Founder support",
    cta: "Meet operators"
  },
  {
    title: "Founder-friendly investors",
    body: "Investors who understand scar tissue, pattern recognition, and why the best second act rarely looks shiny at first.",
    meta: "Recovery-aware • Long-horizon • Human-first",
    cta: "See investors"
  }
];

const strengths = [
  "Pattern recognition under pressure",
  "Hard-won judgment after shutdown",
  "Operator instinct without startup fantasy",
  "Calmer leadership when things get messy"
];

export default function RebuildPage() {
  return (
    <section className="dz-panel rebuild-page">
      <div className="rebuild-hero">
        <div>
          <p className="rebuild-kicker">Second act infrastructure</p>
          <h1 className="rebuild-title">Rebuild Network</h1>
          <p className="rebuild-subtitle">
            Find roles, cofounders, operators, and investors who understand what
            collapse teaches and what experienced founders still carry forward.
          </p>
        </div>
        <div className="rebuild-hero-card">
          <p className="rebuild-hero-label">Built for founders with scar tissue</p>
          <p className="rebuild-hero-copy">
            This is not performative networking. It is a quieter place to find
            serious people for your next chapter.
          </p>
          <div className="rebuild-hero-tags">
            <span>Jobs</span>
            <span>Cofounders</span>
            <span>Operators</span>
            <span>Investors</span>
          </div>
        </div>
      </div>

      <div className="rebuild-grid">
        {opportunities.map((item) => (
          <article key={item.title} className="rebuild-card">
            <p className="rebuild-card-kicker">Opportunity</p>
            <h2 className="rebuild-card-title">{item.title}</h2>
            <p className="rebuild-card-body">{item.body}</p>
            <p className="rebuild-card-meta">{item.meta}</p>
            <button type="button" className="rebuild-card-link">
              {item.cta}
              <span>→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="rebuild-why">
        <div>
          <p className="rebuild-kicker">Why this exists</p>
          <h2 className="rebuild-why-title">
            You are not starting from zero. You are rebuilding with scar tissue.
          </h2>
        </div>
        <div className="rebuild-why-copy">
          <p>
            Most networks reward polish. This one is designed for founders who have
            already carried payroll stress, shutdown grief, broken trust, and still
            know how to move something forward.
          </p>
          <p>
            The point is not to rebrand collapse into inspiration. The point is to
            connect hard-earned experience with better second chances.
          </p>
        </div>
      </div>

      <div className="rebuild-strengths">
        <div className="rebuild-strengths-head">
          <p className="rebuild-kicker">What you bring now</p>
          <p className="rebuild-strengths-note">
            The value most networks miss when they only scan for shiny outcomes.
          </p>
        </div>
        <div className="rebuild-strengths-grid">
          {strengths.map((strength) => (
            <div key={strength} className="rebuild-strength">
              <span className="rebuild-strength-dot" />
              <p>{strength}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rebuild-cta">
        <div>
          <p className="rebuild-kicker">Next step</p>
          <h2 className="rebuild-cta-title">Find people who respect what survival taught you.</h2>
          <p className="rebuild-cta-copy">
            Whether you are looking for a role, a cofounder, or a more honest network,
            this is where the next chapter starts to take shape.
          </p>
        </div>
        <div className="rebuild-cta-actions">
          <Link href="/recovery-circles" className="btn btn-primary">
            Join the network
          </Link>
          <Link href="/app/profile" className="btn btn-secondary">
            Update profile
          </Link>
        </div>
      </div>
    </section>
  );
}
