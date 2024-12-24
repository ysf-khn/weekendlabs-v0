import React from "react";
import Values from "../components/AboutUs/Values";
import FounderNote from "../components/AboutUs/FounderNote";
import { LampDemo } from "../Utilities/lamp";

const page = () => {
  return (
    <main className="pt-[10vh] bg-black text-white">
      <LampDemo />

      <section className="md:h-screen text-[2rem] md:text-[6rem] text-center font-bold p-4 md:p-10">
        Our Agency brings creativity, innovation, and relentless drive to your
        business.
      </section>

      <section className=" text-[2rem] md:text-[6rem] font-bold text-center p-4 md:p-10 my-8 md:leading-[6.5rem]">
        At first, Weekend Labs focused on crafting modern Ecommerce stores and
        product showcase websites for growing brands.
      </section>

      <section className=" text-[2rem] md:text-[6rem] font-bold text-center p-4 md:p-10 my-8 md:leading-[6.5rem]">
        Later, Weekend Labs expanded its expertise to include branding, custom
        software solutions, and AI-powered automation to help businesses scale
        seamlessly.
      </section>

      <section className=" text-[2rem] md:text-[6rem] font-bold text-center p-4 md:p-10 my-8 md:leading-[6.5rem]">
        From stunning Ecommerce stores and impactful UI/UX design to logo
        creation and SEO strategies, Weekend Labs&apos; portfolio caters to the
        diverse needs of businesses aiming to showcase, sell, and scale.
      </section>

      <Values />
      <FounderNote />
    </main>
  );
};

export default page;
