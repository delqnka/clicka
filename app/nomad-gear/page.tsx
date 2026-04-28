import { NomadNav } from "@/components/nomad/nomad-nav";
import { NomadHero } from "@/components/nomad/nomad-hero";
import { NomadValues } from "@/components/nomad/nomad-values";
import { NomadCollection } from "@/components/nomad/nomad-collection";
import { NomadTestedWild } from "@/components/nomad/nomad-tested-wild";
import { NomadFooterCta } from "@/components/nomad/nomad-footer-cta";
import { NomadFooterLegals } from "@/components/nomad/nomad-footer-legals";
import { nomad } from "@/lib/nomad-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: nomad.brand,
  description: nomad.metaDescription,
} as const;

export default function NomadGearPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NomadNav />
      <NomadHero />
      <NomadValues />
      <NomadCollection />
      <NomadTestedWild />
      <NomadFooterCta />
      <NomadFooterLegals />
    </main>
  );
}
