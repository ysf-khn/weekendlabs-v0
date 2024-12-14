"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Card from "./Card";
import { services } from "./services-data";

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        when: "afterChildren",
      },
    }),
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main ref={container} className="relative pt-[20vh] bg-black">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="text-center font-bold uppercase text-[5vw] overflow-hidden"
      >
        {"Our Services".split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={titleVariants}
            className="inline-block text-[1.75rem] md:text-[4vw]"
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      {services.map((project: any, i: number) => {
        const targetScale = 1 - (services.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            // range needs to be updated according to the # of items in array. current is 100/8
            range={[i * 0.111, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
