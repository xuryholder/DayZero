import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="main-shell py-8 md:py-10">
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm">
        <p className="text-white/70">Anonymous founder recovery platform</p>
        <Link className="btn btn-secondary" href="/landing">
          Back to Landing
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-[240px_1fr]">
        <AppSidebar />
        <section className="space-y-4">{children}</section>
      </div>
    </main>
  );
}
