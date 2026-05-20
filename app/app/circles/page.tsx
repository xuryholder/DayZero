import Link from "next/link";

const circles = [
  {
    title: "Burnout Recovery Circle",
    schedule: "Tonight • Voice-only • 7 founders",
    body: "For founders whose body stopped before their ambition did. Less advice, more recovery language.",
    cta: "Enter room"
  },
  {
    title: "Post-Shutdown Confidence Reset",
    schedule: "Tomorrow • Anonymous enabled • 8 founders",
    body: "A room for founders rebuilding self-trust after collapse, silence, and months of feeling professionally erased.",
    cta: "Request access"
  },
  {
    title: "Cofounder Conflict Debrief",
    schedule: "This week • Small group • 6 founders",
    body: "For processing betrayal, misalignment, and the personal fallout that lingers long after the company ends.",
    cta: "See details"
  }
];

const principles = [
  "Anonymous by default when needed",
  "Voice-first rooms for lower performance pressure",
  "No pitching, networking, or startup theater",
  "Small trusted groups with shared context"
];

const quotes = [
  "This was the first place where I stopped pretending I was fine.",
  "I did not need advice. I needed a room where collapse made sense.",
  "For the first time after shutdown, I did not feel professionally exiled."
];

export default function CirclesPage() {
  return (
    <section className="dz-panel circles-page">
      <div className="circles-hero">
        <div>
          <p className="circles-kicker">Private founder rooms</p>
          <h1 className="circles-title">Recovery Circles</h1>
          <p className="circles-subtitle">
            Small trusted rooms for founders processing shutdown, burnout, betrayal,
            investor silence, and the part nobody sees after the company ends.
          </p>
        </div>
        <article className="circles-featured">
          <div className="circles-featured-top">
            <p className="circles-featured-kicker">Active room</p>
            <span className="circles-live-chip">Live in 3h</span>
          </div>
          <h2 className="circles-featured-title">Shutdown Circle</h2>
          <p className="circles-featured-copy">
            A private room for founders trying to metabolize shutdown without turning
            pain into performance.
          </p>
          <div className="circles-featured-meta">
            <span>8 founders</span>
            <span>Anonymous</span>
            <span>Voice-only</span>
          </div>
        </article>
      </div>

      <div className="circles-grid">
        {circles.map((circle) => (
          <article key={circle.title} className="circles-card">
            <p className="circles-card-schedule">{circle.schedule}</p>
            <h2 className="circles-card-title">{circle.title}</h2>
            <p className="circles-card-body">{circle.body}</p>
            <button type="button" className="circles-card-link">
              {circle.cta}
              <span>→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="circles-principles">
        <div>
          <p className="circles-kicker">What makes these rooms work</p>
          <h2 className="circles-principles-title">Safety before strategy. Honesty before image.</h2>
        </div>
        <div className="circles-principles-list">
          {principles.map((item) => (
            <div key={item} className="circles-principle">
              <span className="circles-principle-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="circles-quotes">
        <div className="circles-quotes-head">
          <p className="circles-kicker">Founder voices</p>
          <p className="circles-quotes-note">
            What these rooms feel like when someone finally stops performing.
          </p>
        </div>
        <div className="circles-quotes-grid">
          {quotes.map((quote) => (
            <blockquote key={quote} className="circles-quote">
              <p>&ldquo;{quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="circles-cta">
        <div>
          <p className="circles-kicker">Join quietly</p>
          <h2 className="circles-cta-title">You do not have to survive the aftermath alone.</h2>
          <p className="circles-cta-copy">
            Enter a room built for honesty, not optics. Start with the circle that best
            matches what you are carrying right now.
          </p>
        </div>
        <div className="circles-cta-actions">
          <Link href="/recovery-circles" className="btn btn-primary">
            Apply for access
          </Link>
          <Link href="/app/stories" className="btn btn-secondary">
            Read founder stories
          </Link>
        </div>
      </div>
    </section>
  );
}
