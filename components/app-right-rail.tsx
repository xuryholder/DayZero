"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppRightRail() {
  const pathname = usePathname();

  if (pathname !== "/app") {
    return null;
  }

  return (
    <div className="app-right-rail space-y-4">
      <div className="app-right-card app-right-sticky">
        <div className="app-circle-head">
          <p className="app-circle-kicker">Active Circle</p>
          <span className="app-live-chip">
            <span className="app-live-pulse" />
            Live in 3h
          </span>
        </div>
        <h3 className="app-circle-title">Shutdown Circle</h3>
        <p className="app-circle-copy">
          A private founder room for processing shutdown, shame, and what comes next
          without performance.
        </p>
        <div className="app-circle-meta-line">
          <span>8 founders</span>
          <span>Anonymous</span>
          <span>Voice-only</span>
        </div>
        <div className="app-circle-features">
          <div className="app-meta-pill">
            <span className="app-meta-pill-label">Format</span>
            <span className="app-meta-pill-value">Voice-only room</span>
          </div>
          <div className="app-meta-pill">
            <span className="app-meta-pill-label">Tone</span>
            <span className="app-meta-pill-value">Quiet, founder-only</span>
          </div>
        </div>
        <div className="app-card-divider" />
        <Link href="/recovery-circles" className="btn btn-primary app-enter-btn w-full justify-center">
          Enter Circle
          <span className="app-enter-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
