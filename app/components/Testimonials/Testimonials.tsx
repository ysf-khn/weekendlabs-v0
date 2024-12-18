"use client";

import { motion } from "framer-motion";
import React from "react";
import { testimonials } from "./testimonial-data";
import Image from "next/image";

const Testimonials = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
      },
    }),
  };

  const animateLetters = (text: string, delay: number = 0) => {
    return (
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay }}
        className="text-[1.5rem] md:text-[4vw] font-bold uppercase text-center mb-2 overflow-hidden flex justify-center"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            className="inline-block"
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    );
  };

  return (
    <section className=" pt-[6vh] relative bg-black md:pt-[20vh]">
      {animateLetters("Client Testimonials", 0)}

      <main className="mt-[12vh] w-4/5 mx-auto">
        {testimonials.map((testimonial, index) => {
          const { name, organisation, review, imageSrc } = testimonial;
          return (
            <div className="pb-[15vh]" key={index}>
              <div key={index} className="">
                <Image
                  src={imageSrc}
                  alt={`${name}`}
                  height={400}
                  width={180}
                  className={`${
                    index === 0 ? "float-left mr-4" : "float-right ml-4"
                  } mb-3 rounded-t-lg rounded-b-lg`}
                />
              </div>
              <p
                className={`font-bold text-2xl md:text-4xl mb-2 ${
                  index === 0 ? "" : "text-right"
                }`}
              >
                {name}
              </p>
              <p
                className={`text-lg md:text-xl mb-[4rem] md:mb-[8rem] ${
                  index === 0 ? "" : "text-right"
                }`}
              >
                {organisation}
              </p>
              <p className=" text-xl md:text-4xl">&quot;{review}&quot;</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Testimonials;
