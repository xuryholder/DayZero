import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="main-shell app-shell py-8 md:py-10">
      <div className="app-topbar">
        <p className="text-sm text-white/58">Welcome, Founder!</p>
        <div className="app-topbar-right">
          <span className="app-quiet-chip">Quiet Mode</span>
          <span className="app-live-dot">Live</span>
          <Link className="text-sm text-white/72 hover:text-white" href="/">
            Log out
          </Link>
        </div>
      </div>
      <div className="app-shell-grid">
        <AppSidebar />
        <section className="space-y-4">{children}</section>
        <aside className="space-y-4">
          <div className="app-right-card app-right-sticky">
            <div className="app-circle-head">
              <p className="app-circle-kicker">Active Circle</p>
              <span className="app-live-chip">Live in 3h</span>
            </div>
            <h3 className="app-circle-title">Shutdown Circle</h3>
            <div className="app-circle-meta">
              <div className="app-meta-pill">8 founders</div>
              <div className="app-meta-pill">Anonymous enabled</div>
            </div>
            <div className="app-circle-mode">
              Voice-only room
            </div>
            <div className="app-card-divider" />
            <Link href="/recovery-circles" className="btn btn-primary app-enter-btn w-full justify-center">
              Enter Circle
            </Link>
          </div>
        </aside>
      </div>
      <footer className="app-footer">
        <p className="text-white/55">Start again <span className="text-orange-300">from Day Zero.</span></p>
        <p className="text-white/40">© 2026 DayZero</p>
      </footer>
    </main>
  );
}
