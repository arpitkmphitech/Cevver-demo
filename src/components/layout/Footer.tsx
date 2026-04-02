"use client";

import React from "react";
import Link from "next/link";
import Container from "../common/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-r from-[#8D75EF] to-[#7556EF] xl:h-[270px] sm:h-[200px] h-[180px]  flex items-center justify-center">
      <Container>
        <div className="">
          <h2 className="text-white text-[30px] sm:text-[30px] xl:text-[40px] 2xl:text-[50px]  font-semibold text-center pb-[5px]">
            Cevver
          </h2>
          <p className="text-white md:text-[20px] text-sm font-normal text-center">
            © {new Date().getFullYear()} Cevver. All rights reserved..
          </p>
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
