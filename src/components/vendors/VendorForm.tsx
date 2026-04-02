"use client";

import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import TallyEmbed from "@/components/common/TallyEmbed";

const VendorForm: React.FC = () => {
  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px]">
      <SectionHeading
        as="h2"
        id="vendor-form-heading"
        titleBefore="Ready to get more "
        titleHighlight="clients?"
        subtitle="Join the vendor waitlist."
      />

      <div className="mx-auto rounded-[20px] bg-[#F7F8FA] 2xl:p-[50px] xl:p-[40px] sm:p-[30px] p-[20px] max-w-[640px] sm:max-w-[792px]">
        <TallyEmbed formId="9qOrxG" iframeTitle="Join Vendor Waitlist" />
      </div>
    </div>
  );
};

export default VendorForm;
