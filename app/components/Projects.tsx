"use client";

import React, { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import { section } from "framer-motion/client";

const projects = [
  {
    title: "Famia Home",
    type: "Ecommerce Store",

    src: "/projects/famiahome.png",
    color: "#3357FF",
  },
  {
    title: "Stark Masale",
    type: "Ecommerce Store",
    src: "/projects/starkmasale.png",
    color: "#FF33A1",
  },
  {
    title: "Ecommerce Store",

    src: "",
    color: "#FF5733",
  },
  {
    title: "Portfolio Website",
    src: "",
    color: "#33FF57",
  },

  {
    title: "AI Automation Tool",
    src: "",
    color: "#FFC300",
  },
  {
    title: "SEO Services",
    src: "",
    color: "#DAF7A6",
  },
  {
    title: "Custom Software Solution",
    src: "",
    color: "#900C3F",
  },
  {
    title: "UI/UX Design",
    src: "",
    color: "#581845",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className=" mt-[20vh] pt-8">
      <h1 className="text-[4vw] font-bold uppercase text-center mb-2">
        Recent Client Projects
      </h1>
      <h1 className="text-[4vw] font-bold uppercase text-center mb-2">&</h1>
      <h1 className="text-[4vw] font-bold uppercase text-center mb-[12vh]">
        templates
      </h1>
      <main className=" flex items-center justify-center">
        <div className="w-[1000px] flex flex-col justify-center items-center">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </section>
  );
};

export default Projects;
