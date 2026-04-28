import Link from "next/link";
import { nomad } from "@/lib/nomad-config";
import { Mountain } from "lucide-react";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#tested", label: "Tested in the Wild" },
  { href: "#about", label: "Materials" },
] as const;

export function NomadNav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-stone-900/5 bg-stone-100/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/nomad-gear"
          className="flex items-center gap-2 text-lg font-bold tracking-[-0.04em] text-stone-900 [font-family:var(--font-nomad-display),system-ui,sans-serif]"
        >
          <Mountain
            className="h-6 w-6 text-emerald-800"
            strokeWidth={2.2}
            aria-hidden
          />
          {nomad.brand}
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-emerald-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#shop"
          className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-stone-50 transition hover:bg-emerald-800"
        >
          Shop
        </a>
      </div>
    </header>
  );
}
