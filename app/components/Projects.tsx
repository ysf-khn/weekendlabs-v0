"use client";

import React, { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

const projects = [
  {
    title: "Ecommerce Store",
    src: "https://source.unsplash.com/800x600/?ecommerce,store",
    color: "#FF5733",
  },
  {
    title: "Portfolio Website",
    src: "https://source.unsplash.com/800x600/?portfolio,design",
    color: "#33FF57",
  },
  {
    title: "Famia Home",
    src: "https://source.unsplash.com/800x600/?branding,website",
    color: "#3357FF",
  },
  {
    title: "Stark Masale",
    src: "https://source.unsplash.com/800x600/?product,showcase",
    color: "#FF33A1",
  },
  {
    title: "AI Automation Tool",
    src: "https://source.unsplash.com/800x600/?technology,ai",
    color: "#FFC300",
  },
  {
    title: "SEO Services",
    src: "https://source.unsplash.com/800x600/?seo,marketing",
    color: "#DAF7A6",
  },
  {
    title: "Custom Software Solution",
    src: "https://source.unsplash.com/800x600/?software,development",
    color: "#900C3F",
  },
  {
    title: "UI/UX Design",
    src: "https://source.unsplash.com/800x600/?ui,ux",
    color: "#581845",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
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
  );
};

export default Projects;
