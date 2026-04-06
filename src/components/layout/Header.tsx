"use client";

import React, { useCallback, useEffect, useState } from "react";
import { LOGO_MAIN } from "@/lib/images";
import ImageCustom from "../common/ImageCustom";
import { cn } from "@/lib/utils";
import Button from "../common/Button";
import { X, EllipsisVertical } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { usePathname, useRouter } from "next/navigation";
import { earlyAccessData, vendorsData } from "@/lib/constants";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { menuItems, ctaLabel, ctaHref } =
    pathname === "/vendors" ? vendorsData.navLinks : earlyAccessData.navLinks;

  const pendingHashKey = "cevver:pendingHashScroll";

  useEffect(() => {
    const onScroll = () =>
      setScrolled(typeof window !== "undefined" && window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setOpen(false);
    setHash(typeof window !== "undefined" ? window.location.hash : "");
  }, [pathname]);

  const scrollToHash = useCallback((targetHash: string) => {
    if (!targetHash || targetHash === "#") return;
    const id = targetHash.startsWith("#") ? targetHash.slice(1) : targetHash;
    const tryScroll = (attempt: number) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempt >= 25) return;
      window.setTimeout(() => tryScroll(attempt + 1), 50);
    };
    tryScroll(0);
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
    }
    setHash("");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const pending = window.sessionStorage.getItem(pendingHashKey);
    if (!pending) return;
    if (hash) return;

    window.sessionStorage.removeItem(pendingHashKey);
    const t = window.setTimeout(() => {
      scrollToHash(pending);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
      setHash(pending);
    }, 0);

    return () => window.clearTimeout(t);
  }, [hash, pendingHashKey, pathname, scrollToHash]);

  const isActive = useCallback(
    (href: string) => {
      const fragment = href.includes("#") ? href.split("#")[1] : "";
      if (fragment) return hash === `#${fragment}`;
      return pathname === href;
    },
    [hash, pathname]
  );

  const onNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href) return;
      if (href.startsWith("http://") || href.startsWith("https://")) return;

      const [toPath, fragment] = href.split("#");

      if (fragment && (!toPath || toPath === pathname)) {
        e.preventDefault();
        const nextHash = `#${fragment}`;
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`
        );
        setHash(nextHash);
        scrollToHash(nextHash);
        return;
      }

      if (fragment && toPath?.startsWith("/")) {
        e.preventDefault();
        const nextHash = `#${fragment}`;
        window.sessionStorage.setItem(pendingHashKey, nextHash);
        router.push(toPath);
        return;
      }

      if (href.startsWith("/")) {
        e.preventDefault();
        router.push(href);
      }
    },
    [pathname, pendingHashKey, router, scrollToHash]
  );

  if (pathname === "/privacy-policy") {
    return null;
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 min-h-[90px] flex items-center px-[20px] md:px-0",
        scrolled
          ? "mt-0 border-b border-white/40 bg-gray-100 py-3"
          : "mt-[20px] md:mt-10 bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="w-full rounded-b-[16px] md:px-12 lg:px-[100px]">
        <div
          className={cn(
            "mx-auto flex min-h-[80px] w-full items-center justify-between rounded-[150px] border border-white/70 bg-white/80 pl-[7px] pr-[7px] pt-[7px] pb-[7px] lg:pl-[40px]",
            scrolled &&
              "border-white/60 bg-white/90 shadow-[0_2px_4px_rgba(79,70,229,0.1)]"
          )}
        >
          <button
            type="button"
            className="shrink-0"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ImageCustom
              src={LOGO_MAIN}
              alt="ceVver"
              className="cursor-pointer w-[80px] 2xl:w-[100px] xl:w-[90px] sm:w-[80px] h-[40px] 2xl:h-[61px] xl:h-[55px] sm:h-[50px]"
            />
          </button>

          <nav
            className="hidden md:flex items-center 2xl:gap-[50px] xl:gap-[40px] gap-[15px]"
            aria-label="Primary menu"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className={cn(
                  "text-[#929292] text-lg md:text-lg lg:text-[20px] font-medium hover:opacity-80 transition-opacity",
                  isActive(item.href) ? "text-[#8D75EF]" : ""
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Button
              variant="secondary"
              className="min-w-0 2xl:h-[78px] xl:h-[64px] sm:h-[56px] shrink-0 rounded-[140px] 2xl:text-[20px] xl:text-[18px] md:text-base font-semibold"
              onClick={() => {
                setHash("");
                router.push(ctaHref);
              }}
            >
              {ctaLabel}
            </Button>
            <EllipsisVertical
              size={24}
              className="md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      <Drawer open={open} onOpenChange={setOpen} direction="left">
        <DrawerContent>
          <DrawerTitle />
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    scrollToTop();
                    setOpen(false);
                  }}
                  aria-label="Scroll to top"
                >
                  <ImageCustom
                    src={LOGO_MAIN}
                    alt="ceVver"
                    className="w-fit h-[35px] "
                  />
                </button>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
            </DrawerHeader>
            <div className="flex flex-col gap-6 p-5">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[#929292] text-base font-medium",
                    isActive(item.href) ? "text-[#7556EF]" : ""
                  )}
                  onClick={(e) => {
                    onNavClick(e, item.href);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
