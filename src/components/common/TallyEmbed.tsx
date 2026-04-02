"use client";

import Script from "next/script";
import React from "react";
import { cn } from "@/lib/utils";
import Loader from "@/components/common/Loader";
import {
  buildTallyEmbedSrc,
  callTallyLoadEmbeds,
  useTallyEmbed,
} from "@/hooks/useTallyEmbed";

type TallyEmbedProps = {
  formId: string;
  iframeTitle: string;
};

const TallyEmbed: React.FC<TallyEmbedProps> = ({ formId, iframeTitle }) => {
  const { isEmbedReady, iframeKey } = useTallyEmbed(formId);
  const showLoadingOverlay = !isEmbedReady;
  const embedSrc = buildTallyEmbedSrc(formId);

  return (
    <div className="relative min-h-[280px] sm:min-h-[320px]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={callTallyLoadEmbeds}
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-[12px] bg-[#F0F2F5] text-center transition-opacity duration-300 ease-out",
          showLoadingOverlay ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!showLoadingOverlay}
      >
        <Loader />
      </div>

      <iframe
        key={iframeKey}
        loading="lazy"
        className="w-full"
        title={iframeTitle}
        data-tally-src={embedSrc}
      />
    </div>
  );
};

export default TallyEmbed;
