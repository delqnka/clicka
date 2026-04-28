/**
 * Clicka – hero background video
 * ─────────────────────────────────
 * 1) Drop files into `public/videos/` (WebM first for quality + size, MP4 for Safari)
 * 2) Set in `.env.local` (or leave defaults below):
 *    NEXT_PUBLIC_HERO_VIDEO_WEBM=/videos/hero.webm
 *    NEXT_PUBLIC_HERO_VIDEO_MP4=/videos/hero.mp4
 *    NEXT_PUBLIC_HERO_POSTER=/images/hero-poster.jpg   (optional, improves LCP)
 * If no URL is set and no file is reachable, a lightweight canvas shader runs instead.
 */
export const site = {
  name: "clicka.bg",
  legal: "Clicka",
  title: "clicka.bg — Premium web & AI video",
  description:
    "Creative agency: next‑gen web experience design and AI‑powered video advertising. Sofia · remote.",
  hero: {
    webm:
      (typeof process !== "undefined" &&
        process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM) ||
      "",
    mp4:
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_HERO_VIDEO_MP4) ||
      "",
    poster:
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_HERO_POSTER) ||
      "",
  },
} as const;

export function getHeroVideoSources() {
  const w = site.hero.webm;
  const m = site.hero.mp4;
  const has = Boolean(w || m);
  return { webm: w || null, mp4: m || null, poster: site.hero.poster || null, has };
}
