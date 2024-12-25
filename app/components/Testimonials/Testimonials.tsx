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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  const animateLetters = (text: string, delay: number = 0) => {
    return (
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay }}
        className="font-figtree text-[1.5rem] md:text-[4vw] font-bold uppercase text-center mb-2 overflow-hidden flex justify-center"
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
    <section
      className="pt-[6vh] relative bg-black text-white md:pt-[20vh]"
      id="testimonials"
    >
      {animateLetters("Client Testimonials", 0)}

      <motion.main
        className="mt-[12vh] w-4/5 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when the section is 20% in view
      >
        {testimonials.map((testimonial, index) => {
          const { name, organisation, review, imageSrc } = testimonial;
          return (
            <motion.div
              key={index}
              className="pb-[15vh]"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when the testimonial comes into view
              transition={{
                delay: index * 0.3, // Add delay for each item to stagger
              }}
            >
              <div>
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
              <p className="md:hidden text-lg text-justify">
                &quot;{review}&quot;
              </p>
              <p className="hidden md:block text-4xl">&quot;{review}&quot;</p>
            </motion.div>
          );
        })}
      </motion.main>
    </section>
  );
};

export default Testimonials;
