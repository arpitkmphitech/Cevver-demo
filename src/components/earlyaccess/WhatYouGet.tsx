"use client";

import FeatureCard from "@/components/common/FeatureCard";
import SectionHeading from "@/components/common/SectionHeading";
import { earlyAccessData } from "@/lib/constants";

const WhatYouGet = () => {
  const { titleBefore, titleHighlight, cards } =
    earlyAccessData.whatYouGetSection || {};

  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px]">
      <SectionHeading
        as="h2"
        id="what-you-get-heading"
        titleBefore={titleBefore}
        titleHighlight={titleHighlight}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-5 xl:gap-4.5 2xl:gap-[20px]">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
