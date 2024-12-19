"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import Modal from "./Modal";

const projects = [
  {
    title: "Famia Home",
    type: "Ecommerce Store",
    status: "Completed",
    src: "/projects/famiahome.png",
    link: "https://www.famiahome.com",
    color: "#3357FF",
  },
  {
    title: "Stark Masale",
    type: "Ecommerce Store",
    status: "Completed",
    src: "/projects/starkmasale.png",
    link: "https://www.starkmasale.in",
    color: "#FF33A1",
  },
  {
    title: "DevOverflow",
    type: "QnA Forum App",
    status: "Completed",
    src: "/projects/devoverflow.png",
    link: "https://devflow-rose.vercel.app/",
    color: "#FA760E",
  },
  {
    title: "Email Marketing Automation",
    type: "Automation",
    status: "Completed",
    src: "/projects/marketingautomation.webp",
    link: "/#projects",
    color: "#FFC300",
  },
  {
    title: "Finanzy",
    type: "Personal Finance App",
    status: "In Progress",
    src: "/projects/finanzy.png",
    link: "https://www.finanzyapp.com",
    color: "#33FF57",
  },

  {
    title: "MetalBerg Inc.",
    type: "Website",
    status: "In Progress",
    src: "/projects/metalberg.jpeg",
    link: "/#projects",
    color: "#FF5733",
  },
];

const MemoizedProject = React.memo(Project);

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

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
    <section className=" pt-[20vh] bg-black" id="projects">
      {animateLetters("Recent Client Projects", 0)}
      {animateLetters("&", 0.6)}
      {animateLetters("templates", 1.8)}
      <main className=" flex items-center justify-center mt-[12vh] bg-black">
        <div className="w-11/12 md:w-[1000px] flex flex-col justify-center items-center">
          {projects.map((project, index) => {
            return (
              <MemoizedProject
                index={index}
                title={project.title}
                type={project.type}
                status={project.status}
                link={project.link}
                src={project.src}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        {/* <div className=""> */}
        <Modal modal={modal} projects={projects} />
        {/* </div> */}
      </main>
    </section>
  );
};

export default Projects;
