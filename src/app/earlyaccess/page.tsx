import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/earlyaccess/HeroSection";
import Planning from "@/components/earlyaccess/Planning";
import HowItWorksSection from "@/components/earlyaccess/HowItWorksSection";
import WhatYouGet from "@/components/earlyaccess/WhatYouGet";
import TestimonialSection from "@/components/earlyaccess/TestimonialSection";
import EventForm from "@/components/earlyaccess/EventForm";

const EarlyAccessPage = () => {
  return (
    <>
      <section id="hero" className="scroll-mt-[100px]">
        <HeroSection />
      </section>
      <section id="problem" className="scroll-mt-[100px]">
        <Planning />
      </section>
      <section id="howItWorks" className="scroll-mt-[100px]">
        <HowItWorksSection />
      </section>
      <section id="benefits" className="scroll-mt-[100px]">
        <WhatYouGet />
      </section>
      <TestimonialSection />
      <section id="join" className="scroll-mt-[100px]">
        <EventForm />
      </section>
      <Footer />
    </>
  );
};

export default EarlyAccessPage;
