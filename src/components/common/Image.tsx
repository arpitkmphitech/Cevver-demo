import { cn } from "@/lib/utils";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { FALLBACK_IMAGE } from "@/lib/images";

const Image = ({
  src = "",
  className = "",
}: {
  src: string;
  className: string;
}) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoaded = () => {
    setLoading(false);
  };
  return (
    <>
      <img
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          setLoading(false);
          const target = e.currentTarget;
          target.src = FALLBACK_IMAGE;
        }}
        onLoad={handleImageLoaded}
        src={src ?? FALLBACK_IMAGE}
        className={cn(loading && "hidden", className)}
        alt=""
      />
      <Skeleton
        className={cn("bg-neutral-300", !loading && "hidden", className)}
      />
    </>
  );
};

export default Image;
