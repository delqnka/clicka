"use client";

import { useCallback, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactSection() {
  const baseId = useId();
  const [sent, setSent] = useState(false);
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
              Contact
            </p>
            <h2
              className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
              id="contact-title"
            >
              A quiet inbox.{" "}
              <span className="text-white/50">A fast response.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-white/55">
              Share a line about your launch, your budget band, and your
              deadline. {site.legal} replies to serious inquiries with a
              call slot within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass bento-tight max-w-md rounded-2xl p-5 sm:rounded-3xl sm:p-6 lg:max-w-none"
              noValidate
            >
              <div className="space-y-4">
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium text-white/45"
                    htmlFor={`${baseId}-name`}
                  >
                    Name
                  </label>
                  <input
                    id={`${baseId}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent/50"
                    placeholder="Alex Morgan"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium text-white/45"
                    htmlFor={`${baseId}-email`}
                  >
                    Work email
                  </label>
                  <input
                    id={`${baseId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium text-white/45"
                    htmlFor={`${baseId}-message`}
                  >
                    Project
                  </label>
                  <textarea
                    id={`${baseId}-message`}
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent/50"
                    placeholder="E.g. e‑commerce in Q3, 60s spot for a seed round…"
                  />
                </div>
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-b from-white/12 to-white/5 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden />
                    Send
                  </button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {sent && (
                  <motion.p
                    className="mt-4 text-center text-xs text-accent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                  >
                    Thank you — we’ll be in touch within 48 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
