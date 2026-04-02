import { cn } from "@/lib/utils";
import React from "react";

const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("loader", className)}>
      <div className="load-inner load-one"></div>
      <div className="load-inner load-two"></div>
      <div className="load-inner load-three"></div>
    </div>
  );
};

export default Loader;
