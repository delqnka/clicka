"use client";

import { motion } from "framer-motion";
import { Droplets, Mountain, Shield, Wind } from "lucide-react";

const items = [
  {
    icon: Droplets,
    title: "3L waterproofing",
    copy: "Taped seams, storm flaps, breathability where you sweat first.",
  },
  {
    icon: Mountain,
    title: "Load discipline",
    copy: "Hip-hugging carry system rated for 25 kg without frame twist.",
  },
  {
    icon: Wind,
    title: "Aero flow",
    copy: "Laminates and pit-zips that dump heat in vertical gain.",
  },
  {
    icon: Shield,
    title: "Field repairable",
    copy: "Buckles, cord, and zips we stock for life on the trail.",
  },
] as const;

export function NomadValues() {
  return (
    <section
      className="border-b border-stone-200/80 bg-stone-50 py-20 sm:py-24"
      id="about"
      aria-labelledby="values-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          className="text-2xl font-bold tracking-[-0.04em] text-stone-900 [font-family:var(--font-nomad-display),system-ui,sans-serif] sm:text-3xl"
          id="values-title"
        >
          Engineered for the worst day.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-stone-600">
          Earthy tones, recycled nylons where it matters, and no decoration
          that doesn’t earn its grams.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((x, i) => {
            const Icon = x.icon;
            return (
              <motion.article
                key={x.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm"
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-800">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-stone-900 [font-family:var(--font-nomad-display),system-ui,sans-serif]">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{x.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
