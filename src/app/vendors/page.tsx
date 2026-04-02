import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/vendors/HeroSection";
import WhyLoveCevver from "@/components/vendors/WhyLoveCevver";
import WhoCanJoin from "@/components/vendors/WhoCanJoin";
import VendorEarlyAccess from "@/components/vendors/VendorEarlyAccess";
import VendorForm from "@/components/vendors/VendorForm";

const VendorsPage = () => {
  return (
    <>
      <HeroSection />
      <section id="vendorsLove" className="scroll-mt-[110px]">
        <WhyLoveCevver />
      </section>
      <section id="whoCanJoin" className="scroll-mt-[110px]">
        <WhoCanJoin />
      </section>
      <section id="vendorEarlyAccess" className="scroll-mt-[110px]">
        <VendorEarlyAccess />
      </section>
      <section id="join" className="scroll-mt-[110px]">
        <VendorForm />
      </section>
      <Footer />
    </>
  );
};

export default VendorsPage;
