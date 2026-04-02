"use client";

import { cn } from "@/lib/utils";
import ImageCustom from "@/components/common/ImageCustom";
import SectionHeading from "@/components/common/SectionHeading";
import { vendorsData } from "@/lib/constants";

const VendorEarlyAccess = () => {
  const { vendorEarlyAccessSection } = vendorsData;
  const {
    comingSoonLabel,
    titleBefore,
    titleHighlight,
    subtitle,
    starting,
    free,
    // price,
    // priceUnit,
    features,
  } = vendorEarlyAccessSection;

  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px] bg-[#F7F8FA]">
      <div className="text-center">
        <p className="text-[#8C8D91] font-normal mb-4 sm:mb-5 text-base sm:text-[20px]">
          {comingSoonLabel}
        </p>
        <SectionHeading
          as="h2"
          id="vendor-early-access-heading"
          titleBefore={titleBefore}
          titleHighlight={titleHighlight}
          subtitle={subtitle}
        />
      </div>

      <div className="mx-auto max-w-[350px] bg-white rounded-[20px] px-6 py-8 sm:px-8 sm:py-10 xl:px-10 xl:py-12 2xl:px-[40px] 2xl:py-[40px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col justify-center mb-6 sm:mb-8 xl:mb-[20px]">
            {/* <span className="text-black font-bold text-[28px] sm:text-[32px] xl:text-[36px] 2xl:text-[38px]">
              {price}
            </span>
            <span className="text-[#8C8D91] font-normal align-top text-base sm:text-lg xl:text-[20px]">
              {priceUnit}
            </span> */}
            <span className="text-black font-semibold text-[28px] sm:text-[30px]">
              {starting}
            </span>
            <span className="text-[#785AEF] font-semibold text-[28px] sm:text-[30px]">
              {free}
            </span>
          </div>
          <div className="flex justify-center w-full">
            <ul className="flex flex-col items-start gap-[8px] sm:gap-[10px] w-fit">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-3 text-[#111827] font-normal text-base sm:text-[17px] xl:text-[18px]"
                >
                  <span className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center">
                    <ImageCustom
                      src={feature.imageSrc}
                      alt="imageSrc"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <span className="sm:text-base xl:text-lg 2xl:text-[20px] font-medium">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorEarlyAccess;
