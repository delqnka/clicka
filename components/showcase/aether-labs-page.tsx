import { ShowcaseBack } from "@/components/showcase/showcase-back";
import { Cpu, Sparkles } from "lucide-react";

export function AetherLabsPage() {
  return (
    <div className="min-h-dvh bg-[#030308] text-zinc-100">
      <ShowcaseBack />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,90,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200/80">
          <Sparkles className="h-3.5 w-3.5" />
          AI product — sample
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Aether Labs
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
          Model routing, eval dashboards, and developer-first docs — this sample
          layout shows how we structure deep product stories without noise.
        </p>
        <ul className="mt-10 space-y-3">
          {[
            "Ship inference with observability you can read in one screen.",
            "Component library aligned to your design tokens.",
            "Motion that explains hierarchy, not decoration.",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-zinc-300"
            >
              <Cpu
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/80"
                aria-hidden
              />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <p className="mt-8 text-center text-xs text-zinc-600">
          Fictional brand — portfolio demonstration by clicka.bg
        </p>
      </div>
    </div>
  );
}
