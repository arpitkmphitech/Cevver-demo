"use client";

import { HOME_BANNER } from "@/lib/images";
import Button from "@/components/common/Button";
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
  } = heroSection;

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HOME_BANNER})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center justify-center text-center w-full mx-auto sm:px-8 px-[20px]">
        {/* <div className="bg-[#8266EF1A] border border-[#785AEF] rounded-[50px] 2xl:px-[30px] xl:px-[25px] sm:px-[20px] px-[15px] 2xl:py-[12px] xl:py-[10px] sm:py-[8px] py-[6px] text-[#7759EF] font-medium text-lg mb-[70px] mt-[100px]">
          {tagline}
        </div> */}
        <TypingHeroHeadline
          id="hero-heading"
          className="text-[#111827] text-4xl sm:text-5xl md:text-[60px] font-semibold mb-[28px]"
          headlineBefore={headlineBefore}
          headlineAfter={headlineAfter}
          headlineHighlight={headlineHighlight}
        />

        <p className="text-[#8C8D91] 2xl:text-[26px] xl:text-[22px] sm:text-[18px] text-[16px] font-medium max-w-[655px] leading-relaxed mb-[70px]">
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
