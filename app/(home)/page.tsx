"use client";

import Projects from "../components/Projects";
import Services from "../components/Services/Services";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
