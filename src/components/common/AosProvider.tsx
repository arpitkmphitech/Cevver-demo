"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

const AOS_OPTIONS = {
  duration: 700,
  easing: "ease-out-cubic" as const,
  once: false,
  mirror: true,
  offset: 80,
  delay: 0,
};

function refreshAos() {
  requestAnimationFrame(() => {
    AOS.refresh();
  });
}

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init(AOS_OPTIONS);
    refreshAos();

    const timeouts = [
      window.setTimeout(refreshAos, 100),
      window.setTimeout(refreshAos, 350),
      window.setTimeout(refreshAos, 600),
    ];

    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) refreshAos();
      });
    }

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [pathname]);

  return <>{children}</>;
}
