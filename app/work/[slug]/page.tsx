import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  getShowcaseBySlug,
  SHOWCASE_SLUGS,
  type ShowcaseSlug,
} from "@/lib/work-showcase";
import { AetherLabsPage } from "@/components/showcase/aether-labs-page";
import { NordStudioPage } from "@/components/showcase/nord-studio-page";
import { PulseLaunchPage } from "@/components/showcase/pulse-launch-page";
import { VelvetCommercePage } from "@/components/showcase/velvet-commerce-page";

const pages: Record<ShowcaseSlug, ReactNode> = {
  velvet: <VelvetCommercePage />,
  aether: <AetherLabsPage />,
  pulse: <PulseLaunchPage />,
  nord: <NordStudioPage />,
};

export function generateStaticParams() {
  return SHOWCASE_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getShowcaseBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} — sample case`,
    description: p.description,
    robots: { index: true, follow: true },
  };
}

export default async function ShowcasePage({ params }: Props) {
  const { slug } = await params;
  if (!SHOWCASE_SLUGS.includes(slug as ShowcaseSlug)) notFound();
  return pages[slug as ShowcaseSlug];
}
