import Image from "next/image";
import { ShowcaseBack } from "@/components/showcase/showcase-back";
import { Play } from "lucide-react";

export function PulseLaunchPage() {
  return (
    <div className="min-h-dvh overflow-hidden bg-black text-white">
      <ShowcaseBack />
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-1/2 left-1/2 h-[120%] w-[80%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_50%,#ff2d6a20_0deg,transparent_120deg,#3b2cff18_240deg,transparent_360deg)] opacity-60 blur-3xl"
          aria-hidden
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
        <p className="text-xs font-medium tracking-[0.4em] text-rose-400/90 uppercase">
          Sample campaign
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.07em] sm:text-7xl sm:leading-[0.95]">
          Pulse
        </h1>
        <p className="mt-2 text-2xl font-light tracking-[-0.04em] text-white/50 sm:text-3xl">
          / Launch
        </p>
        <p className="mx-auto mt-8 max-w-md text-pretty text-sm text-white/45">
          One hero film, one landing, one CTA. This sample page mirrors how we
          build launch moments for AI and product teams.
        </p>
        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <Play
                  className="ml-1 h-6 w-6 text-white/90"
                  fill="currentColor"
                  aria-hidden
                />
              </span>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/35">
          Fictional campaign — clicka.bg demo reel placeholder
        </p>
      </div>
    </div>
  );
}
