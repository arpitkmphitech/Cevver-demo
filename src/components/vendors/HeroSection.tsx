"use client";

import { useCallback, useMemo, useState } from "react";
import { HOME_BANNER } from "@/lib/images";
import Button from "@/components/common/Button";
import HeroBackground from "@/components/common/HeroBackground";
import TypingHeroHeadline from "@/components/common/TypingHeroHeadline";
import { vendorsData } from "@/lib/constants";
import { scrollToSectionId } from "@/lib/scroll";

const HeroSection = () => {
  const { heroSection } = vendorsData;
  const {
    headlineBefore,
    headlineAfter,
    headlineHighlight,
    subtitle,
    ctaLabel,
    images,
  } = heroSection;

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

  const showBannerOverlay = Boolean(images && images.length > 0);

  return (
    <section
      className="relative box-border flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-[120px] sm:pt-[128px] md:pt-[150px]"
      aria-labelledby="hero-heading"
    >
      <HeroBackground
        slides={backgroundSlides}
        activeIndex={activeSlideIndex}
        showBannerOverlay={showBannerOverlay}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full mx-auto sm:px-8 px-[20px]">
        <TypingHeroHeadline
          id="hero-heading"
          className="text-white text-4xl sm:text-5xl md:text-[60px] font-semibold mb-[28px] 2xl:pt-[12px] xl:pt-[10px] sm:pt-[8px] pt-[6px]"
          headlineBefore={headlineBefore}
          headlineAfter={headlineAfter}
          headlineHighlight={headlineHighlight}
          onSentenceIndexChange={onSentenceIndexChange}
        />

        <p
          className="text-white 2xl:text-[26px] xl:text-[22px] sm:text-[18px] text-[16px] font-medium max-w-[655px] leading-relaxed mb-[70px]"
          data-aos="fade-up"
          data-aos-delay={180}
          data-aos-duration="680"
        >
          {subtitle}
        </p>

        <div data-aos="zoom-in" data-aos-delay={320} data-aos-duration="650">
          <Button
            variant="primary"
            className="w-auto 2xl:min-w-[322px] xl:min-w-[280px] sm:min-w-[240px] min-w-[200px] 2xl:h-[70px] xl:h-[60px] sm:h-[50px] h-[40px] rounded-[140px] 2xl:text-[24px] xl:text-[20px] sm:text-[18px] text-[16px] font-medium"
            onClick={() => scrollToSectionId("join", { clearHash: true })}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
