import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm font-medium tracking-[-0.02em] text-white/50">
          © {new Date().getFullYear()} {site.legal}
        </p>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <span className="hover:text-white/60">Sofia · remote</span>
          <Link href="mailto:hello@clicka.bg" className="hover:text-white/80">
            hello@clicka.bg
          </Link>
        </div>
      </div>
    </footer>
  );
}
