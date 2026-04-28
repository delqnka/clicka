"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wildShots } from "@/lib/nomad-config";
import { Clapperboard } from "lucide-react";

const base = 0.07;

export function NomadTestedWild() {
  return (
    <section
      className="relative border-b border-stone-800/20 bg-stone-900 py-20 text-stone-100 sm:py-28"
      id="tested"
      aria-labelledby="tested-title"
    >
      <div className="pointer-events-none absolute inset-0 nomad-radial" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-200/80 uppercase">
              <Clapperboard className="h-4 w-4" strokeWidth={1.5} />
              Action footage
            </p>
            <h2
              className="mt-2 text-3xl font-extrabold tracking-[-0.04em] [font-family:var(--font-nomad-display),system-ui,sans-serif] sm:text-5xl"
              id="tested-title"
            >
              Tested in the Wild
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-sm text-stone-400 sm:text-base">
              Real weather, not a studio. Our crew shoots packs and footwear
              in places that break gear — so when you see rain, rock, and snow
              in these frames, the products earned their place in frame.
            </p>
          </div>
          <p className="max-w-xs text-right text-xs text-stone-500 sm:text-left">
            Dynamic cuts · handheld · long lens on ridgelines. Replace stills
            with your 4K loops in the same layout when you go live.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {wildShots.map((shot, i) => {
            return (
              <motion.figure
                key={shot.id}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[240px] lg:min-h-[260px]"
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * base }}
                style={{ willChange: "transform, opacity" }}
              >
                <Image
                  src={shot.src}
                  alt={`${shot.label} — field conditions`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/10 to-transparent" />
                <figcaption className="absolute right-0 bottom-0 left-0 p-4 sm:p-5">
                  <span className="text-[11px] font-bold tracking-widest text-amber-200/90 uppercase">
                    {shot.label}
                  </span>
                  <p className="mt-1 text-sm text-stone-200/90">{shot.sub}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
