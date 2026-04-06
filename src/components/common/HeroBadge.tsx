import React from "react";
import { cn } from "@/lib/utils";

interface HeroBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const HeroBadge: React.FC<HeroBadgeProps> = ({ children, className }) => (
  <span
    className={cn(
      "inline-flex items-center justify-center 2xl:px-[30px] xl:px-[25px] sm:px-[20px] px-[15px] 2xl:py-[12px] xl:py-[10px] sm:py-[8px] py-[6px] rounded-[9999px] text-sm font-medium text-[#7759EF] border border-[#785AEF] bg-[#785AEF]/10% backdrop-blur-sm",
      className
    )}
  >
    {children}
  </span>
);

export default HeroBadge;
