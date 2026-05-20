import Link from "next/link";

const items = [
  ["Home", "/app"],
  ["Stories", "/app/stories"],
  ["Circles", "/app/circles"],
  ["Autopsy AI", "/app/autopsy"],
  ["Rebuild", "/app/rebuild"],
  ["Journal", "/app/journal"],
  ["Profile", "/app/profile"]
];

export function AppSidebar() {
  return (
    <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="mb-6 text-xs uppercase tracking-[0.24em] text-white/70">DAYZERO</p>
      <nav className="flex flex-col gap-2">
        {items.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl border border-transparent px-3 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
