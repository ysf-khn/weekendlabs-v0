import React from "react";
import Projects from "../components/Projects";
import Services from "../components/Services/Services";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default page;
