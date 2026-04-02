"use client";

import { useCallback, useMemo, useState } from "react";
import { HOME_BANNER } from "@/lib/images";
import Button from "@/components/common/Button";
import TypingHeroHeadline from "@/components/common/TypingHeroHeadline";

import { earlyAccessData } from "@/lib/constants";
import { scrollToSectionId } from "@/lib/scroll";

/**
 * Home banner overlay strength (0–1). Lower = photos show more, less bright washout.
 * Raise slightly if you want more of the banner gradient; lower if photos should dominate.
 */
const HOME_BANNER_OVERLAY_OPACITY = 0.42;

const HeroSection = () => {
  const { headlineBefore, headlineAfter, headlineHighlight, subtitle, ctaLabel, images } =
    earlyAccessData.heroSection || {};

  const backgroundSlides = useMemo(() => {
    if (images && images.length > 0) return images;
    return [HOME_BANNER];
  }, [images]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onSentenceIndexChange = useCallback(
    (index: number) => {
      setActiveSlideIndex(index % backgroundSlides.length);
    },
    [backgroundSlides.length]
  );

  const hasRotatingSlides = Boolean(images && images.length > 0);

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Underlay: rotating hero photos (synced with headline) */}
        <div className="absolute inset-0 z-0">
          {backgroundSlides.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${src})`,
                opacity: i === activeSlideIndex ? 1 : 0,
              }}
              aria-hidden={i !== activeSlideIndex}
            />
          ))}
        </div>
        {/* Overlay: home banner (soft — not full opacity so photos stay visible) */}
        {hasRotatingSlides && (
          <div
            className="absolute inset-0 z-1 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HOME_BANNER})`,
              opacity: HOME_BANNER_OVERLAY_OPACITY,
            }}
            aria-hidden
          />
        )}
        {/* Dark scrim: less “blown out” center, better contrast for white text */}
        <div
          className="absolute inset-0 z-2 bg-linear-to-b from-black/45 via-black/25 to-black/55"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full mx-auto sm:px-8 px-[20px]">
        <TypingHeroHeadline
          id="hero-heading"
          className="text-white text-4xl sm:text-5xl md:text-[60px] font-semibold mb-[28px] 2xl:pt-[12px] xl:pt-[10px] sm:pt-[8px] pt-[6px]"
          headlineBefore={headlineBefore}
          headlineAfter={headlineAfter}
          headlineHighlight={headlineHighlight}
          onSentenceIndexChange={onSentenceIndexChange}
        />

        <p className="text-white 2xl:text-[26px] xl:text-[22px] sm:text-[18px] text-[16px] font-medium max-w-[655px] leading-relaxed mb-[70px]">
          {subtitle}
        </p>

        <Button
          variant="primary"
          className="w-auto 2xl:min-w-[322px] xl:min-w-[280px] sm:min-w-[240px] min-w-[200px] 2xl:h-[70px] xl:h-[60px] sm:h-[50px] h-[40px] rounded-[140px] 2xl:text-[24px] xl:text-[20px] sm:text-[18px] text-[16px] font-medium"
          onClick={() => scrollToSectionId("join", { clearHash: true })}
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
