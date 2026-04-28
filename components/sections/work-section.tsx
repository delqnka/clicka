"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { showcaseProjects } from "@/lib/work-showcase";

const spans: Record<string, string> = {
  velvet: "sm:col-span-2 sm:row-span-2 sm:min-h-[22rem]",
  aether: "min-h-[200px] sm:min-h-0",
  pulse: "min-h-[200px] sm:min-h-0",
  nord: "min-h-[180px] sm:col-span-3",
};

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
              Selected work
            </p>
            <h2
              className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
              id="work-title"
            >
              Proof, not promise.
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/45">
              Open sample case studies — each route is a compact landing built for
              the portfolio.
            </p>
          </Reveal>
        </div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:max-w-none sm:auto-rows-fr sm:grid-cols-3 sm:gap-4 sm:overflow-visible">
          {showcaseProjects.map((p, i) => (
            <Reveal
              key={p.slug}
              className={`
                group relative min-w-[min(100%,20rem)] snap-center overflow-hidden rounded-2xl
                sm:min-w-0
                ${spans[p.slug] ?? ""}
                glass
              `}
              delay={0.04 * i}
            >
              <Link
                href={`/work/${p.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Open sample: ${p.title}`}
              />
              <div className="pointer-events-none relative aspect-[4/3] w-full sm:aspect-auto sm:h-full sm:min-h-[10rem]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 85vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
                  unoptimized
                  priority={i === 0}
                />
                <div className="bg-fade-bento absolute inset-0" />
                <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                  <p className="text-xs text-white/50">{p.tag}</p>
                  <p className="text-lg font-medium tracking-[-0.02em] text-white">
                    {p.title}
                  </p>
                  <p className="mt-2 text-xs text-accent/90">
                    View sample →
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-white/30 sm:text-left sm:mt-6 sm:hidden">
          Swipe for more
        </p>
      </div>
    </section>
  );
}
