"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  titleBefore: string;
  titleHighlight: string;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  titleBefore,
  titleHighlight,
  subtitle,
  as: Tag = "h2",
  id,
  className,
}) => {
  return (
    <div className={cn("mx-auto max-w-[660px]", subtitle && "mb-0")}>
      <Tag
        id={id}
        className={cn(
          "text-[#111827] text-center font-medium 2xl:text-[50px] 2xl:leading-[1.2] xl:text-[36px] xl:leading-tight sm:text-[28px] sm:leading-[1.3] text-[28px] leading-[1.35]",
          subtitle
            ? "mb-3 sm:mb-4"
            : "mb-[30px] sm:mb-[35px] xl:mb-[40px] 2xl:mb-[50px]",
          className
        )}
      >
        {titleBefore}{" "}
        <span className="font-bold 2xl:text-[50px] xl:text-[36px] sm:text-[28px] text-[28px]">
          {titleHighlight}
        </span>
      </Tag>
      {subtitle && (
        <p className="text-[#8C8D91] text-center mx-auto text-base sm:text-base xl:text-[20px] 2xl:text-[24px] mb-8 sm:mb-10 xl:mb-12 2xl:mb-[100px] font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
