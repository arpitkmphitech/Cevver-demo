"use client";

import ImageCustom from "@/components/common/ImageCustom";
import SectionHeading from "@/components/common/SectionHeading";
import { vendorsData } from "@/lib/constants";
import { aosCardAnimation } from "@/lib/aos";

const WhoCanJoin = () => {
  const { whoCanJoinSection } = vendorsData;
  const { titleBefore, titleHighlight, items } = whoCanJoinSection;

  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] px-[20px] bg-white max-w-[950px] mx-auto">
      <div data-aos="zoom-in" data-aos-duration="620">
        <SectionHeading
          as="h2"
          id="who-can-join-heading"
          titleBefore={titleBefore}
          titleHighlight={titleHighlight}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-5 xl:gap-4.5 2xl:gap-[50px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center text-center"
            data-aos={aosCardAnimation(index)}
            data-aos-delay={index * 65}
            data-aos-duration={650}
          >
            <div className="flex items-center justify-center rounded-full bg-[#F7F8FA] shadow-sm size-[80px] sm:size-[100px] xl:size-[130px] 2xl:size-[150px] mb-3 sm:mb-4 xl:mb-4 2xl:mb-5 transition duration-300 ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:shadow-md">
              <ImageCustom
                src={item.imageSrc}
                alt="imageSrc"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[#111827] font-medium leading-snug text-sm sm:text-base xl:text-base 2xl:text-[18px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoCanJoin;
