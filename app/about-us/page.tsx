import Image from "next/image";
import React from "react";
import Values from "../components/AboutUs/Values";

const page = () => {
  return (
    <main className="pt-[10vh] bg-black text-white">
      <section className="h-[90vh] flex items-center justify-center">
        <Image
          src="/LogoTextWhite.svg"
          height={500}
          width={500}
          alt="Weekend Labs Logo"
        />
      </section>

      <section className="h-screen text-[6rem] font-bold p-10">
        Our Agency brings creativity, innovation, and relentless drive to your
        business.
      </section>

      <section className=" text-[6rem] font-bold p-10 my-6">
        At first, Weekend Labs focused on crafting modern eCommerce stores and
        product showcase websites for growing brands.
      </section>

      <section className=" text-[6rem] font-bold p-10 my-6">
        Later, Weekend Labs expanded its expertise to include branding, custom
        software solutions, and AI-powered automation to help businesses scale
        seamlessly.
      </section>

      <section className=" text-[6rem] font-bold p-10 my-6">
        From stunning Shopify stores and impactful UI/UX design to logo creation
        and SEO strategies, Weekend Labs' portfolio caters to the diverse needs
        of businesses aiming to showcase, sell, and scale.
      </section>

      <Values />
    </main>
  );
};

export default page;
