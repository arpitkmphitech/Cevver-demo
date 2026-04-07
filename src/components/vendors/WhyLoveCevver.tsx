"use client";

import React from "react";
import FeatureCard from "@/components/common/FeatureCard";
import SectionHeading from "@/components/common/SectionHeading";
import { vendorsData } from "@/lib/constants";
import { aosCardAnimation } from "@/lib/aos";

const WhyLoveCevver = () => {
  const { whyLoveCevverSection } = vendorsData;
  const { titleBefore, titleHighlight, cards } = whyLoveCevverSection;
  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px] bg-[#F7F8FA]">
      <div data-aos="fade-up" data-aos-duration="600">
        <SectionHeading
          as="h2"
          id="problem-heading"
          titleBefore={titleBefore}
          titleHighlight={titleHighlight}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-5 xl:gap-4.5 2xl:gap-[20px]">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
            aos={aosCardAnimation(index)}
            aosDelay={index * 70}
            cardBackgroundClassName="bg-white"
          />
        ))}
      </div>
    </div>
  );
};

export default WhyLoveCevver;
