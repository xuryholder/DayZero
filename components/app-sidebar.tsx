"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainItems = [
  ["Home", "/app"],
  ["Recovery Circles", "/app/circles"],
  ["Stories", "/app/stories"],
  ["Rebuild", "/app/rebuild"],
  ["Signals", "/app/autopsy"],
  ["Library", "/app/library"]
];

const lowerItems = [
  ["Quiet Mode", "/app/journal"],
  ["Profile", "/app/profile"]
  ,["Settings", "/app/profile"]
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="app-sidebar">
      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/50">DAY0</p>
      <p className="mb-6 text-sm text-white/62">Quiet OS</p>
      <nav className="flex flex-col gap-1.5">
        {mainItems.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className={`app-nav-item ${pathname === href ? "app-nav-item-active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="my-4 h-px bg-white/8" />
      <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-white/45">Personal</p>
      <nav className="flex flex-col gap-1.5">
        {lowerItems.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className={`app-nav-item app-nav-item-muted ${pathname === href ? "app-nav-item-active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
