"use client";

import { HOME_BANNER } from "@/lib/images";
import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  slides: string[];
  activeIndex: number;
  showBannerOverlay: boolean;
  className?: string;
};

export default function HeroBackground({
  slides,
  activeIndex,
  showBannerOverlay,
  className,
}: HeroBackgroundProps) {
  const safeSlides = slides.length > 0 ? slides : [HOME_BANNER];
  const idx = activeIndex % safeSlides.length;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div className="absolute inset-0 z-0">
        {safeSlides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === idx ? 1 : 0,
            }}
            aria-hidden={i !== idx}
          />
        ))}
      </div>
      {showBannerOverlay && (
        <div
          className="absolute inset-0 z-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HOME_BANNER})`,
            opacity: 0.42,
          }}
          aria-hidden
        />
      )}
      <div
        className="absolute inset-0 z-2 bg-linear-to-b from-black/45 via-black/25 to-black/55"
        aria-hidden
      />
    </div>
  );
}
