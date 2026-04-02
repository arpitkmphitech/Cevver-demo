"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type TallyWindow = { Tally?: { loadEmbeds?: () => void } };

export function callTallyLoadEmbeds() {
  if (typeof window === "undefined") return;
  (window as unknown as TallyWindow).Tally?.loadEmbeds?.();
}

export function buildTallyEmbedSrc(formId: string) {
  const params =
    "alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
  return `https://tally.so/embed/${formId}?${params}`;
}

type ParsedTallyMessage =
  | { kind: "formLoaded"; formId: string }
  | { kind: "formSubmitted"; formId: string }
  | null;

function parseTallyMessage(event: MessageEvent): ParsedTallyMessage {
  if (!String(event.origin).includes("tally.so")) return null;

  const raw = event.data;
  if (typeof raw !== "string" || !raw.includes("Tally.")) return null;

  let payload: { payload?: { formId?: string } };
  try {
    payload = JSON.parse(raw);
  } catch {
    return null;
  }

  const formId = payload.payload?.formId;
  if (!formId) return null;

  if (raw.includes("Tally.FormSubmitted")) {
    return { kind: "formSubmitted", formId };
  }
  if (raw.includes("Tally.FormLoaded")) {
    return { kind: "formLoaded", formId };
  }

  return null;
}

export function useTallyEmbed(formId: string) {
  const pathname = usePathname();
  const resetDelayMs = 5000;

  const [iframeInstanceId, setIframeInstanceId] = useState(0);
  const [isEmbedReady, setIsEmbedReady] = useState(false);
  const resetTimerId = useRef<number | null>(null);

  const remountIframe = useCallback(() => {
    setIsEmbedReady(false);
    setIframeInstanceId((n) => n + 1);
  }, []);

  const scheduleRemountAfterSubmit = useCallback(() => {
    if (resetTimerId.current != null) {
      window.clearTimeout(resetTimerId.current);
    }
    resetTimerId.current = window.setTimeout(() => {
      resetTimerId.current = null;
      remountIframe();
    }, resetDelayMs);
  }, [remountIframe, resetDelayMs]);

  useEffect(() => {
    return () => {
      if (resetTimerId.current != null) {
        window.clearTimeout(resetTimerId.current);
      }
    };
  }, []);

  useEffect(() => {
    function onWindowMessage(event: MessageEvent) {
      const msg = parseTallyMessage(event);
      if (!msg || msg.formId !== formId) return;

      if (msg.kind === "formSubmitted") {
        scheduleRemountAfterSubmit();
        return;
      }
      if (msg.kind === "formLoaded") {
        setIsEmbedReady(true);
      }
    }

    window.addEventListener("message", onWindowMessage);
    return () => window.removeEventListener("message", onWindowMessage);
  }, [formId, scheduleRemountAfterSubmit]);

  useEffect(() => {
    callTallyLoadEmbeds();
    const retry = window.setTimeout(callTallyLoadEmbeds, 300);
    return () => window.clearTimeout(retry);
  }, [pathname, iframeInstanceId]);

  const iframeKey = `${pathname}-${iframeInstanceId}`;

  return { iframeInstanceId, isEmbedReady, iframeKey };
}
