import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  variant?: "dark" | "light";
};

export function ShowcaseBack({ variant = "dark" }: Props) {
  const isLight = variant === "light";
  return (
    <Link
      href="/#work"
      className={[
        "fixed top-4 left-4 z-[100] inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md transition",
        isLight
          ? "border-zinc-200/80 bg-white/80 text-zinc-700 hover:border-zinc-300"
          : "border-white/15 bg-black/50 text-white/80 hover:text-white",
      ].join(" ")}
    >
      <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
      clicka.bg
    </Link>
  );
}
