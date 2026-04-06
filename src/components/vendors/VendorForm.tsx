"use client";

import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import TallyEmbed from "@/components/common/TallyEmbed";

const VendorForm: React.FC = () => {
  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px]">
      <div data-aos="fade-up" data-aos-duration="620">
        <SectionHeading
          as="h2"
          id="vendor-form-heading"
          titleBefore="Ready to get more "
          titleHighlight="clients?"
          subtitle="Join the vendor waitlist."
        />
      </div>

      <div
        className="mx-auto rounded-[20px] bg-[#F7F8FA] 2xl:p-[50px] xl:p-[40px] sm:p-[30px] p-[20px] max-w-[640px] sm:max-w-[792px] transition duration-300 ease-out motion-safe:hover:shadow-lg motion-safe:hover:shadow-[#090A0F]/6"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration="700"
      >
        <TallyEmbed formId="9qOrxG" iframeTitle="Join Vendor Waitlist" />
      </div>
    </div>
  );
};

export default VendorForm;
