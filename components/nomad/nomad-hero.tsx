"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { getNomadHeroVideo, NOMAD_HERO_FALLBACK, nomad } from "@/lib/nomad-config";
import { ArrowRight } from "lucide-react";

export function NomadHero() {
  const { webm, mp4, poster, has } = getNomadHeroVideo();
  const [showVideo, setShowVideo] = useState(has);
  const onVideoError = useCallback(() => setShowVideo(false), []);
  const posterOrFallback = poster || NOMAD_HERO_FALLBACK;

  return (
    <section
      className="relative min-h-[min(100dvh,56rem)] overflow-hidden bg-stone-900"
      id="top"
      aria-labelledby="nomad-hero-title"
    >
      {showVideo && has ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={posterOrFallback}
          preload="auto"
          onError={onVideoError}
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={NOMAD_HERO_FALLBACK}
            alt="Mountain range at dawn, dramatic clouds"
            fill
            className="object-cover nomad-ken"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>
      )}
      <div className="nomad-film absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/55 to-stone-900"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
        <div className="mx-auto w-full max-w-4xl text-center sm:text-left">
          <motion.p
            className="text-sm font-medium tracking-[0.25em] text-amber-100/90 uppercase"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {nomad.tagline}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-stone-50 [font-family:var(--font-nomad-display),system-ui,sans-serif] sm:text-6xl md:text-7xl"
            id="nomad-hero-title"
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Built for the
            <br className="sm:hidden" />
            <span className="text-amber-200/95"> wild miles.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-lg text-balance text-base text-stone-200/80 sm:mx-0"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Waterproof shells, load-bearing packs, and soles that keep grip
            when the trail disappears.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 1, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-100 px-6 py-3.5 text-sm font-semibold text-stone-900 transition hover:bg-white"
            >
              Shop the range
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tested"
              className="inline-flex items-center justify-center text-sm font-medium text-stone-200/90 underline-offset-4 hover:underline"
            >
              See where we test
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
