"use client";

import Projects from "../components/Projects";
import Services from "../components/Services/Services";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
}
