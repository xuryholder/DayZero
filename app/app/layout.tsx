import Link from "next/link";
import { AppRightRail } from "@/components/app-right-rail";
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
        <AppRightRail />
      </div>
      <footer className="app-footer">
        <p className="text-white/55">Start again <span className="text-orange-300">from Day Zero.</span></p>
        <p className="text-white/40">© 2026 DayZero</p>
      </footer>
    </main>
  );
}
