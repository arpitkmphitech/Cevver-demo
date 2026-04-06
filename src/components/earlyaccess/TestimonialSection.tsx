"use client";

import ImageCustom from "../common/ImageCustom";
import { ICON_TESTIMONIAL } from "@/lib/images";
import { earlyAccessData } from "@/lib/constants";

const TestimonialSection = () => {
  const { quote, author } = earlyAccessData.testimonialSection || {};

  return (
    <section
      className="w-full bg-[#F7F8FA] py-16 md:py-20 lg:py-24 px-6 md:px-12"
      aria-label="Testimonial"
    >
      <div className="max-w-[668px] mx-auto flex flex-col items-center text-center gap-10">
        <div data-aos="zoom-in" data-aos-duration="600">
          <ImageCustom
            src={ICON_TESTIMONIAL}
            alt="Testimonial"
            className="size-20"
          />
        </div>
        <div
          className="text-[#090A0F] text-lg font-medium leading-tight sm:text-xl sm:font-semibold md:text-2xl lg:text-[28px] xl:text-[30px] 2xl:text-[34px] 2xl:font-semibold"
          data-aos="fade-up"
          data-aos-delay={120}
          data-aos-duration="700"
        >
          {quote}
        </div>
        <div
          className="font-normal text-[#8C8D91] text-sm sm:text-base md:text-lg xl:text-[20px]"
          data-aos="fade-up"
          data-aos-delay={220}
          data-aos-duration="650"
        >
          {author}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
