"use client";

import { cn } from "@/lib/utils";
import { earlyAccessData } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

const HowItWorksSection = () => {
  const { titleBefore, titleHighlight, steps } =
    earlyAccessData.howItWorksSection || {};

  const sectionRef = useRef<HTMLElement>(null);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setSectionInView(visible);
        if (visible) {
          requestAnimationFrame(() => AOS.refresh());
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="How it works"
      className="w-full bg-[#F7F8FA] 2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] px-6 md:px-12 lg:px-[100px]"
    >
      <div data-aos="fade-up" data-aos-duration="600">
        <SectionHeading
          as="h2"
          id="how-it-works-heading"
          titleBefore={titleBefore}
          titleHighlight={titleHighlight}
        />
      </div>

      <div className="flex flex-col gap-6 lg:hidden max-w-xl mx-auto mt-2">
        {steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 90}
            data-aos-duration="650"
            className="group flex items-center gap-4 rounded-full bg-[#A389E9] py-4 px-5 sm:py-5 sm:px-6 shadow-md shadow-[#967EE2]/20 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#967EE2]/30"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-2 ring-white/80 transition duration-300 group-hover:ring-[#967EE2]/40">
              <span className="text-[#090A0F] font-bold text-lg">
                {step.stepNumber}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                {step.title}
              </h3>
              <p className="text-white/95 text-sm sm:text-base mt-0.5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block max-w-[1170px] mx-auto relative mt-2">
        <div
          className="absolute left-1/2 top-0 bottom-0 my-7 w-2 -translate-x-1/2 overflow-hidden rounded-full"
          aria-hidden
        >
          <div
            className={cn(
              "h-full w-full origin-top rounded-full bg-[#090A0F] transition-transform duration-1100 ease-out",
              sectionInView ? "scale-y-100" : "scale-y-0"
            )}
          />
        </div>
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className={cn(
                "group relative flex items-center gap-6 mb-12 last:mb-0",
                isLeft ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center rounded-[170px] bg-[#A389E9] py-[5px] px-[7px] shadow-md shadow-[#967EE2]/15 transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#967EE2]/25",
                  isLeft
                    ? "flex-row-reverse justify-end mr-20"
                    : "flex-row justify-start ml-20"
                )}
              >
                <div className="shrink-0 size-20 rounded-full bg-white flex items-center justify-center transition duration-300 group-hover:ring-4 group-hover:ring-[#967EE2]/35">
                  <span className="text-[#090A0F] font-semibold text-[34px] pb-2">
                    {step.stepNumber}
                  </span>
                </div>
                <div
                  className={cn(
                    "min-w-0 flex-1",
                    isLeft ? "text-right mr-4" : "text-left ml-4"
                  )}
                >
                  <h3 className="text-white font-semibold text-lg xl:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-white/95 text-base mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
              <div
                className="absolute left-1/2 top-1/2 z-10 flex size-[36px] shrink-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
                aria-hidden
              >
                <div className="flex size-6 items-center justify-center rounded-full bg-[#967EE2] ring-2 ring-[#A389E9]/40">
                  <div className="size-3.5 rounded-full bg-[#9F87E7] motion-safe:animate-pulse" />
                </div>
              </div>
              <div className="flex-1" aria-hidden />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
