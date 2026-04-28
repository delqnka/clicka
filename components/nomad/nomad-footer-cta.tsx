"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function NomadFooterCta() {
  return (
    <section
      className="bg-gradient-to-b from-emerald-950/95 to-stone-950 py-20 text-stone-100"
      id="shop"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2
          className="text-2xl font-extrabold tracking-[-0.04em] [font-family:var(--font-nomad-display),system-ui,sans-serif] sm:text-3xl"
        >
          Ready to leave the carpark?
        </h2>
        <p className="mt-3 text-sm text-stone-300/90">
          Restock drops with field notes and cut numbers. First in line gets
          the full range.
        </p>
        <motion.form
          className="mt-8 flex max-w-md flex-col gap-3 sm:mx-auto sm:flex-row"
          initial={{ opacity: 1, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label htmlFor="nomad-email" className="sr-only">
            Email
          </label>
          <input
            id="nomad-email"
            name="email"
            type="email"
            required
            placeholder="work email"
            autoComplete="email"
            className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-stone-50 placeholder:text-stone-500 outline-none focus:border-amber-200/50"
          />
          <button
            type="button"
            className="h-12 rounded-full bg-amber-100 px-6 text-sm font-bold text-stone-900"
          >
            Get launch note
          </button>
        </motion.form>
        <p className="mt-8 text-xs text-stone-500">
          <Link
            href="/"
            className="underline decoration-stone-600 underline-offset-2 transition hover:text-stone-300"
          >
            Site by clicka.bg
          </Link>
          {" "}
          · One email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
