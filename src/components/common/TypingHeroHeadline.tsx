"use client";

import { useEffect, useMemo, useState } from "react";

type HeadlineValue = string | string[] | undefined;

type TypingHeroHeadlineProps = {
  id?: string;
  className?: string;
  headlineBefore: HeadlineValue;
  headlineAfter: HeadlineValue;
  headlineHighlight: HeadlineValue;
  typingSpeedMs?: number;
  highlightDelayMs?: number;
  sentenceHoldMs?: number;
  onSentenceIndexChange?: (index: number) => void;
};

const normalizeList = (value: HeadlineValue): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => item ?? "");
  }

  return [value ?? ""];
};

const TypingHeroHeadline = ({
  id,
  className,
  headlineBefore,
  headlineAfter,
  headlineHighlight,
  typingSpeedMs = 65,
  highlightDelayMs = 250,
  sentenceHoldMs = 1800,
  onSentenceIndexChange,
}: TypingHeroHeadlineProps) => {
  const beforeList = normalizeList(headlineBefore);
  const afterList = normalizeList(headlineAfter);
  const highlightList = normalizeList(headlineHighlight);
  const listLength = Math.max(
    1,
    Math.min(beforeList.length, afterList.length, highlightList.length)
  );

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [showHighlight, setShowHighlight] = useState(false);

  const parts = useMemo(() => {
    const before = beforeList[sentenceIndex] ?? "";
    const after = afterList[sentenceIndex] ?? "";
    const highlight = highlightList[sentenceIndex] ?? "";
    const blackText = `${before} ${after}`.trim();

    return { before, after, highlight, blackText };
  }, [afterList, beforeList, highlightList, sentenceIndex]);

  useEffect(() => {
    setTypedCount(0);
    setShowHighlight(false);
  }, [sentenceIndex]);

  useEffect(() => {
    onSentenceIndexChange?.(sentenceIndex);
  }, [sentenceIndex, onSentenceIndexChange]);

  useEffect(() => {
    if (typedCount < parts.blackText.length) {
      const typingTimer = window.setTimeout(() => {
        setTypedCount((count) => count + 1);
      }, typingSpeedMs);

      return () => window.clearTimeout(typingTimer);
    }

    if (!showHighlight) {
      const showTimer = window.setTimeout(() => {
        setShowHighlight(true);
      }, highlightDelayMs);

      return () => window.clearTimeout(showTimer);
    }

    const nextSentenceTimer = window.setTimeout(() => {
      setSentenceIndex((index) => (index + 1) % listLength);
    }, sentenceHoldMs);

    return () => window.clearTimeout(nextSentenceTimer);
  }, [
    highlightDelayMs,
    listLength,
    parts.blackText.length,
    sentenceHoldMs,
    showHighlight,
    typedCount,
    typingSpeedMs,
  ]);

  const typedBlackText = parts.blackText.slice(0, typedCount);
  const beforeLength = parts.before.length;
  const typedBefore = typedBlackText.slice(0, beforeLength);
  const typedAfter = typedBlackText
    .slice(beforeLength)
    .replace(/^\s+/, "")
    .trimStart();

  return (
    <h1 id={id} className={className}>
      <span className="block leading-tight 2xl:pb-[28px] xl:pb-[24px] sm:pb-[20px] pb-[10px] 2xl:text-[60px] xl:text-[50px] sm:text-[40px] max-[490px]:text-[32px] text-[35px]">
        {typedBefore || "\u00A0"}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[6px] 2xl:gap-x-[20px] xl:gap-x-[15px] sm:gap-x-[10px]">
        <span className="block leading-tight 2xl:text-[60px] xl:text-[50px] sm:text-[40px] max-[490px]:text-[32px] text-[35px] pb-3">
          {typedAfter || "\u00A0"}
        </span>
        <span
          className={`inline-block shrink-0 max-[490px]:ml-0 ml-1 2xl:px-[30px] xl:px-[25px] sm:px-[20px] px-[15px] pt-1 2xl:pb-[15px] xl:pb-[12px] sm:pb-[10px] pb-[8px] rounded-[140px] leading-tight 2xl:text-[60px] xl:text-[50px] sm:text-[40px] max-[490px]:text-[32px] text-[35px] button-gradient-active text-white font-bold align-baseline ${
            showHighlight ? "animate-pulse opacity-100" : "opacity-0"
          }`}
        >
          {parts.highlight}
        </span>
      </div>
    </h1>
  );
};

export default TypingHeroHeadline;
