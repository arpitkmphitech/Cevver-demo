import { cn } from "@/lib/utils";
import { IImage } from "@/types/types";
import Image from "next/image";
import React from "react";

const ImageCustom: React.FC<IImage> = ({
  src,
  alt,
  className,
  onClick,
  width = 26,
  height = 26,
  fill = false,
  priority = true,
}) => {
  const imageWidth = fill ? undefined : width || 26;
  const imageHeight = fill ? undefined : height || 26;

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      {...(!fill && { width: imageWidth, height: imageHeight })}
      onClick={onClick}
      className={cn("w-[26px] h-[26px]", className)}
      priority={priority}
      unoptimized={src?.endsWith(".svg")}
      sizes={fill ? "100vw" : `${imageWidth}px`}
    />
  );
};

export default ImageCustom;
