import Image from "next/image";
import { ShowcaseBack } from "@/components/showcase/showcase-back";

export function VelvetCommercePage() {
  return (
    <div className="min-h-dvh bg-[#0c0a09] text-[#f5f0e8]">
      <ShowcaseBack />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        <p className="text-xs tracking-[0.3em] text-amber-200/50 uppercase">
          Case study — sample
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Velvet Commerce
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/55">
          A premium retail experience: edge-cached product routes, image CDNs, and
          a restrained palette that keeps focus on craft — built as a clicka
          pattern for headless commerce.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {["Sub-0.4s TTFB", "A11y · AA", "Core Web Vitals green"].map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs text-white/60"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl border border-amber-200/10">
          <Image
            src="https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1400&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent" />
        </div>
        <p className="mt-6 text-center text-xs text-white/30">
          Illustrative sample for clicka.bg portfolio — not a live client store.
        </p>
      </div>
    </div>
  );
}
