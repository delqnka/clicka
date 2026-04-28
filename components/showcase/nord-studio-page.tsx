import Image from "next/image";
import { ShowcaseBack } from "@/components/showcase/showcase-back";

export function NordStudioPage() {
  return (
    <div className="min-h-dvh bg-[#f4f2ed] text-zinc-800">
      <ShowcaseBack variant="light" />
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <h1
          className="text-4xl font-light tracking-[-0.04em] sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui" }}
        >
          Nord Studio
        </h1>
        <p className="mt-3 text-xs tracking-[0.2em] text-zinc-500 uppercase">
          Rebrand + site — sample
        </p>
        <p className="mt-8 max-w-prose text-sm leading-relaxed text-zinc-600">
          A calm, editorial system: generous margins, one type family, and
          photography as the lead — this light-theme sample shows range next to
          our default dark work.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative min-h-48 overflow-hidden rounded-2xl sm:min-h-64">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col justify-center border-l border-zinc-300/60 pl-6 sm:pl-8">
            <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Outcome
            </p>
            <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-zinc-900">
              A single design language across web, deck, and social.
            </p>
          </div>
        </div>
        <p className="mt-14 text-sm text-zinc-500">
          Fictional studio — visual sample for clicka.bg
        </p>
      </div>
    </div>
  );
}
