"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nomad } from "@/lib/nomad-config";

const products = [
  {
    name: "Cairn 48",
    spec: "Expedition pack · 48 L",
    price: "€189",
    src: "https://images.unsplash.com/photo-1622260614922-e6654a32e0af?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Fern GTX",
    spec: "Hiking boot · 3-season",
    price: "€229",
    src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Gully Shell",
    spec: "3L hardshell",
    price: "€299",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
  },
] as const;

export function NomadCollection() {
  return (
    <section
      className="border-b border-stone-200 bg-white py-20 sm:py-24"
      id="collection"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase">
          {nomad.brand} collection
        </p>
        <h2
          className="mt-2 text-2xl font-bold tracking-[-0.04em] [font-family:var(--font-nomad-display),system-ui,sans-serif] sm:text-3xl"
        >
          Packs · Footwear · Shells
        </h2>
        <p className="mt-2 max-w-lg text-sm text-stone-600">
          A focused line — no endless SKUs, just the pieces that survive our
          field program.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {products.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  unoptimized
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-900/70 p-4">
                  <p className="text-sm font-bold text-stone-50 [font-family:var(--font-nomad-display),system-ui,sans-serif]">
                    {p.name}
                  </p>
                  <p className="text-xs text-stone-200/80">{p.spec}</p>
                  <p className="mt-2 text-sm font-semibold text-amber-200/95">
                    {p.price}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
