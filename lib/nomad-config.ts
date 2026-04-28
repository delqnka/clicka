/**
 * Nomad Gear — production demo landing
 * Add hero loop to public/videos/ and set:
 * NEXT_PUBLIC_NOMAD_HERO_WEBM=/videos/nomad-hero.webm
 * NEXT_PUBLIC_NOMAD_HERO_MP4=/videos/nomad-hero.mp4
 * NEXT_PUBLIC_NOMAD_HERO_POSTER=/images/nomad-hero-poster.jpg
 */
export const nomad = {
  brand: "Nomad Gear",
  tagline: "Outdoor & adventure equipment",
  metaDescription:
    "Rugged packs, trail footwear, and layers tested from monsoon ridgelines to tundra — Nomad Gear is built for the route ahead.",
  hero: {
    webm:
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_NOMAD_HERO_WEBM) ||
      "",
    mp4:
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_NOMAD_HERO_MP4) || "",
    poster:
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_NOMAD_HERO_POSTER) ||
      "",
  },
} as const;

export function getNomadHeroVideo() {
  const w = nomad.hero.webm;
  const m = nomad.hero.mp4;
  return { webm: w || null, mp4: m || null, poster: nomad.hero.poster || null, has: Boolean(w || m) };
}

/** Hero fallback when no video (high-res outdoor / action) */
export const NOMAD_HERO_FALLBACK =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop";

export const wildShots = [
  {
    id: "alpine",
    label: "Alpine",
    sub: "−18°C · wind-scoured cols",
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "monsoon",
    label: "Monsoon",
    sub: "Ridgelines in hard rain",
    src: "https://images.unsplash.com/photo-1511593358241-91eea299fc3c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "canyon",
    label: "Canyon",
    sub: "Dust, heat, vertical gain",
    src: "https://images.unsplash.com/photo-1504851149312-803a7d3fd0c2?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "tundra",
    label: "Tundra",
    sub: "Ice crust · zero visibility",
    src: "https://images.unsplash.com/photo-1531366936337-7c912a4585a4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "river",
    label: "River",
    sub: "Fords & fast water",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "night-ridge",
    label: "Night ridge",
    sub: "Headlamps · last push",
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80&auto=format&fit=crop",
  },
] as const;
