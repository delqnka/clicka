import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./nomad.css";

const display = Outfit({
  variable: "--font-nomad-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-nomad-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const title = "Nomad Gear | Outdoor & adventure equipment";
const description =
  "Packs, footwear, and layers tested in real conditions — from monsoon ridgelines to tundra. Built for the route ahead.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a2f24",
  colorScheme: "light",
};

export default function NomadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${body.variable} nomad-root relative z-[60] w-full min-h-dvh bg-stone-100 text-stone-900 [font-family:var(--font-nomad-body),system-ui,sans-serif]`}
    >
      {children}
    </div>
  );
}
