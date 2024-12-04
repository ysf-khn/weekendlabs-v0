"use client";
import { useScroll } from "framer-motion";
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

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main ref={container} className="relative mt-[20vh]">
      <h1 className="text-center font-bold uppercase text-[5vw]">
        Our Services
      </h1>
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
