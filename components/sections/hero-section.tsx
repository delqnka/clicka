"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero-background";
import { MagneticCta } from "@/components/magnetic-cta";
import { site } from "@/lib/site";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10">
        <HeroBackground />
        <div className="bg-fade-hero pointer-events-none absolute inset-0" />
        <div className="grid-overlay pointer-events-none absolute inset-0" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="mb-4 inline-flex max-w-prose items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
          <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
          Creative agency
        </p>
        <motion.h1
          className="max-w-[14ch] text-[clamp(2.5rem,6vw+1rem,4.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-white"
          id="hero-title"
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The web, refined.
          <span className="text-white/30"> / </span>
          Video, reimagined.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md text-pretty text-base text-white/55"
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {site.description}
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticCta href="#contact" aria-label="Request a project">
            Book a call
          </MagneticCta>
          <motion.a
            href="#work"
            className="px-2 text-sm font-medium text-white/45 transition hover:text-white/90"
            whileHover={{ x: 2 }}
          >
            View work →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
