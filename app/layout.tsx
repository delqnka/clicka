import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  metadataBase: new URL("https://clicka.bg"),
  openGraph: {
    title: site.title,
    description: site.description,
    url: "https://clicka.bg",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  alternates: { canonical: "https://clicka.bg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legal,
  url: "https://clicka.bg",
  email: "hello@clicka.bg",
  description: site.description,
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SmoothScroll>
          <div className="relative z-10 min-h-dvh">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
