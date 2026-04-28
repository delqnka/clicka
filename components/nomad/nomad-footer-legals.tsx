import { nomad } from "@/lib/nomad-config";

export function NomadFooterLegals() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 py-10 text-sm text-stone-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="[font-family:var(--font-nomad-display),system-ui,sans-serif]">
          {nomad.brand}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>Shipping · EU + UK</span>
          <span>·</span>
          <span>Repairs: hello@nomadgear.outdoor</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} {nomad.brand}</p>
      </div>
    </footer>
  );
}
