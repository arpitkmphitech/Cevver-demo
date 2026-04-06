import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

const sections = [
  {
    title: "Introduction",
    body: [
      "Welcome to Cevver. This Privacy Policy describes how we handle information when you use our website, early access program, and related services (collectively, the “Services”). We are committed to protecting your privacy and being transparent about our practices.",
      "By using the Services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of the Services.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We may collect information you provide directly, such as your name, email address, phone number, event details, and vendor preferences when you join early access, submit forms, or communicate with us.",
      "We also automatically collect certain technical data when you visit our site, including browser type, device type, general location (e.g., region), pages viewed, and referring URLs. This helps us improve performance and understand how visitors use Cevver.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information we collect to provide and improve the Services, respond to your requests, send updates about early access or product changes (where permitted), personalize your experience, and analyze usage trends.",
      "We may use aggregated or de-identified data that cannot reasonably be used to identify you for analytics, research, and marketing insights.",
    ],
  },
  {
    title: "Sharing and disclosure",
    body: [
      "We do not sell your personal information. We may share information with service providers who assist us with hosting, analytics, email delivery, or customer support, subject to confidentiality obligations.",
      "We may disclose information if required by law, to protect our rights or the safety of others, or in connection with a merger, acquisition, or sale of assets, in which case we will require the successor to honor this policy or notify you of changes.",
    ],
  },
  {
    title: "Data retention and security",
    body: [
      "We retain personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer period is required or permitted by law.",
      "We implement reasonable technical and organizational measures to protect your data. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your personal information, or to object to certain processing. You may also unsubscribe from marketing emails using the link in those messages.",
      "To exercise your rights or ask questions about this policy, please contact us using the details provided on our website. We will respond within a reasonable timeframe.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. We encourage you to review this page periodically. Continued use of the Services after changes constitutes acceptance of the updated policy.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      <section
        aria-labelledby="privacy-policy-heading"
        className="relative min-h-screen py-8 sm:py-10 md:py-12"
      >
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[min(420px,50vh)] bg-linear-to-b from-[#EDE9FD] via-[#F5F3FF] to-transparent pointer-events-none"
          aria-hidden
        />
        <Container>
          <div className="mx-auto max-w-[760px]">
            <header className="mb-12 md:mb-16 text-center">
              <h1
                id="privacy-policy-heading"
                className="text-[#111827] text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight mb-4"
              >
                Privacy Policy
              </h1>
              <p className="text-[#6B7280] text-base md:text-lg">
                Last updated: March 31, 2026
              </p>
            </header>

            <div className="rounded-2xl border border-[#E8E0FF] bg-white/90 shadow-[0_4px_24px_rgba(141,117,239,0.08)] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
              <div className="space-y-10 md:space-y-12">
                {sections.map((section) => (
                  <section
                    key={section.title}
                    className="border-l-4 border-[#8D75EF] pl-5 sm:pl-6"
                  >
                    <h2 className="text-[#111827] text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-[#374151] text-[15px] md:text-base leading-relaxed">
                      {section.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
