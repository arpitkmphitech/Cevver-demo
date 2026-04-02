"use client";

import React from "react";
import { cn } from "@/lib/utils";
import ImageCustom from "@/components/common/ImageCustom";

interface FeatureCardProps {
  description: string;
  imageSrc: string;
  subtitle?: string;
  className?: string;
  cardBackgroundClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  description,
  imageSrc,
  subtitle,
  className,
  cardBackgroundClassName = "bg-[#F7F8FA]",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center rounded-[20px] px-4 py-6 xl:px-5 xl:py-7 2xl:px-6 2xl:py-8 min-h-[160px] xl:min-h-[180px] 2xl:min-h-[200px]",
        cardBackgroundClassName,
        className
      )}
    >
      <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] xl:w-[65px] xl:h-[65px] 2xl:w-[80px] 2xl:h-[80px] mb-4 xl:mb-5">
        <ImageCustom
          src={imageSrc}
          alt="imageSrc"
          className="w-full h-full object-contain"
        />
      </div>

      <p
        className={cn(
          "text-[#111827] leading-snug text-base sm:text-base xl:text-lg 2xl:text-[20px] max-w-[200px]",
          subtitle ? "font-semibold" : "font-medium"
        )}
      >
        {description}
      </p>
      {subtitle && (
        <p className="mt-1 font-normal text-center text-[#8C8D91] leading-snug text-base sm:text-base xl:text-lg 2xl:text-[20px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;
