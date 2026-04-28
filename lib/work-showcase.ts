export const showcaseProjects = [
  {
    slug: "velvet",
    title: "Velvet Commerce",
    tag: "Web / performance",
    description:
      "Headless commerce with sub-second navigation and luxury-first visual language — sample case study.",
    src: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80&auto=format&fit=crop",
    alt: "Abstract minimal architecture",
  },
  {
    slug: "aether",
    title: "Aether Labs",
    tag: "Product / AI",
    description:
      "Product marketing site for an AI research stack — sample case study.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop",
    alt: "Fluid dark gradient",
  },
  {
    slug: "pulse",
    title: "Pulse / Launch",
    tag: "Video / campaign",
    description:
      "60-second launch film and campaign landing — sample case study.",
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80&auto=format&fit=crop",
    alt: "Colour and light",
  },
  {
    slug: "nord",
    title: "Nord Studio",
    tag: "Rebrand + site",
    description:
      "Identity refresh and minimal marketing site for a design studio — sample case study.",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&q=80&auto=format&fit=crop",
    alt: "Misty landscape",
  },
] as const;

export type ShowcaseSlug = (typeof showcaseProjects)[number]["slug"];

export const SHOWCASE_SLUGS: ShowcaseSlug[] = showcaseProjects.map(
  (p) => p.slug
);

export function getShowcaseBySlug(slug: string) {
  return showcaseProjects.find((p) => p.slug === slug);
}
