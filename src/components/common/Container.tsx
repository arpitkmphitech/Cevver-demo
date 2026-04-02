import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1500px] md:px-[26px] px-[12px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
