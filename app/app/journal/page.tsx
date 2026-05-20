import Link from "next/link";

const moods = ["foggy", "calm", "tired", "angry", "clear"];

const recentEntries = [
  {
    title: "I miss the version of me that believed more easily.",
    meta: "2 days ago • 8 min",
    excerpt: "Today felt less dramatic than the shutdown itself. The hard part was noticing how long I have been performing okay."
  },
  {
    title: "I keep calling it a lesson when it still feels like grief.",
    meta: "4 days ago • 5 min",
    excerpt: "I do not need a sharper framework today. I need language that does not turn pain into a strategy memo."
  },
  {
    title: "The quiet is starting to feel less hostile.",
    meta: "1 week ago • 6 min",
    excerpt: "For the first time, being offline did not feel like disappearing. It felt like recovery."
  }
];

const patterns = [
  "You write most often after 9 PM, usually when the day finally gets quiet.",
  "Identity loss and exhaustion show up more often than tactical regret.",
  "Your entries are getting less reactive and more reflective."
];

export default function JournalPage() {
  return (
    <section className="dz-panel journal-page">
      <div className="journal-hero">
        <div>
          <p className="journal-kicker">Private recovery journal</p>
          <h1 className="journal-title">Write without performing.</h1>
          <p className="journal-subtitle">
            A quiet space to capture what is true today, track emotional patterns,
            and rebuild clarity without turning everything into a pitch.
          </p>
          <div className="journal-hero-actions">
            <button type="button" className="btn btn-primary">
              Start writing
            </button>
            <button type="button" className="btn btn-secondary">
              Use guided prompt
            </button>
          </div>
        </div>

        <aside className="journal-sidecard">
          <p className="journal-sidecard-kicker">Quiet mode</p>
          <p className="journal-sidecard-title">No audience. No polish required.</p>
          <p className="journal-sidecard-copy">
            Draft privately, save automatically, and return later when the words are
            clearer than the adrenaline.
          </p>
          <div className="journal-sidecard-meta">
            <span>Saved locally</span>
            <span>Encrypted journal</span>
          </div>
        </aside>
      </div>

      <div className="journal-grid">
        <div className="journal-main">
          <section className="journal-prompt-card">
            <div className="journal-prompt-head">
              <div>
                <p className="journal-label">Today&apos;s prompt</p>
                <h2 className="journal-prompt-title">
                  What did your last startup teach you that your next one must never ignore?
                </h2>
              </div>
              <div className="journal-prompt-actions">
                <button type="button" className="journal-text-btn">
                  Shuffle prompt
                </button>
                <button type="button" className="journal-text-btn">
                  Write freely
                </button>
              </div>
            </div>
          </section>

          <section className="journal-composer">
            <div className="journal-composer-head">
              <div>
                <p className="journal-label">Entry draft</p>
                <p className="journal-compose-note">Saved 2 min ago</p>
              </div>
              <div className="journal-compose-stats">
                <span>412 words</span>
                <span>Private</span>
              </div>
            </div>

            <div className="journal-checkin">
              <div>
                <p className="journal-checkin-label">How are you arriving today?</p>
                <div className="journal-moods">
                  {moods.map((mood, index) => (
                    <button
                      key={mood}
                      type="button"
                      className={`journal-mood${index === 1 ? " is-active" : ""}`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              <div className="journal-energy">
                <div className="journal-energy-row">
                  <span>Energy</span>
                  <span>6/10</span>
                </div>
                <div className="journal-energy-track">
                  <span className="journal-energy-fill" />
                </div>
              </div>
            </div>

            <div className="journal-editor" role="textbox" aria-label="Journal entry draft">
              <p>
                The hardest part is admitting that I was not just tired. I was trying
                to stay legible to everyone around me while internally I had already
                stopped believing in the company.
              </p>
              <p>
                I keep wanting to translate the collapse into a clean lesson. But if I
                am honest, what I need first is to name what it cost me to keep acting
                certain after certainty was gone.
              </p>
              <p className="journal-editor-muted">
                Keep writing. No one else needs to see the unfinished version.
              </p>
            </div>

            <div className="journal-composer-actions">
              <button type="button" className="btn btn-primary">
                Save entry
              </button>
              <button type="button" className="btn btn-secondary">
                Add private tag
              </button>
            </div>
          </section>
        </div>

        <aside className="journal-rail">
          <section className="journal-insights">
            <p className="journal-label">Quiet insights</p>
            <h2 className="journal-rail-title">Patterns from recent entries</h2>
            <div className="journal-patterns">
              {patterns.map((pattern) => (
                <article key={pattern} className="journal-pattern">
                  {pattern}
                </article>
              ))}
            </div>
          </section>

          <section className="journal-streak">
            <p className="journal-label">Writing rhythm</p>
            <p className="journal-streak-number">3 entries this week</p>
            <p className="journal-streak-copy">
              Consistency matters more than length. Quiet honesty counts.
            </p>
          </section>
        </aside>
      </div>

      <section className="journal-recent">
        <div className="journal-recent-head">
          <div>
            <p className="journal-label">Recent entries</p>
            <h2 className="journal-recent-title">Return to what you were trying to say.</h2>
          </div>
          <Link href="/app/stories" className="journal-text-link">
            Read founder stories
          </Link>
        </div>

        <div className="journal-recent-grid">
          {recentEntries.map((entry) => (
            <article key={entry.title} className="journal-entry-card">
              <p className="journal-entry-meta">{entry.meta}</p>
              <h3 className="journal-entry-title">{entry.title}</h3>
              <p className="journal-entry-excerpt">{entry.excerpt}</p>
              <button type="button" className="journal-text-btn">
                Open entry
              </button>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
