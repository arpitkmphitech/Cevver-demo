"use client";

import React from "react";
import Link from "next/link";
import ImageCustom from "../common/ImageCustom";
import Container from "../common/Container";
import {
  ICON_EMAIL,
  ICON_FACEBOOK,
  ICON_INSTA,
  ICON_LINKEDIN,
  ICON_TWITTER,
} from "@/lib/images";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1CKstxfWdj/?mibextid=wwXIfr",
    icon: ICON_FACEBOOK,
    label: "Cevver on Facebook",
  },
  {
    href: "https://www.instagram.com/cevverhq?igsh=MW1vdHN3bXU3MXJyeg==",
    icon: ICON_INSTA,
    label: "Cevver on Instagram",
  },
  {
    href: "https://www.linkedin.com/company/cevverhq/",
    icon: ICON_LINKEDIN,
    label: "Cevver on LinkedIn",
  },
  {
    href: "mailto:info@cevver.com",
    icon: ICON_EMAIL,
    label: "Email",
  },
  {
    href: "https://x.com/cevverhq?s=21&t=i-EQdliXduqHvh9S1OQA8w",
    icon: ICON_TWITTER,
    label: "Cevver on X",
  },
] as const;

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-r from-[#8D75EF] to-[#7556EF] min-h-[280px] sm:min-h-[300px] xl:min-h-[340px] flex items-center justify-center py-8 sm:py-10">
      <Container>
        <div>
          <h2 className="text-white text-[30px] sm:text-[30px] xl:text-[40px] 2xl:text-[50px] font-semibold text-center pb-[5px]">
            Cevver
          </h2>
          <p className="text-white md:text-[20px] text-sm font-normal text-center">
            © {new Date().getFullYear()} Cevver. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 list-none m-0 p-0">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={href} className="m-0 p-0">
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="shrink-0 cursor-pointer rounded-full transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white inline-flex"
                >
                  <ImageCustom
                    src={icon}
                    alt="icon"
                    width={44}
                    height={44}
                    className="pointer-events-none w-10 h-10 sm:w-11 sm:h-11"
                  />
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/privacy-policy"
            className="block text-white md:text-[20px] text-sm font-medium text-center underline pt-6 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
