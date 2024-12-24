"use client";
import Image from "next/image";
import React from "react";

export default function Project({
  index,
  title,
  type,
  status,
  link,
  src,
  setModal,
}: any) {
  return (
    <a
      href={link}
      target={link !== "/#projects" ? "_blank" : ""}
      rel="noopener noreferrer"
      aria-label={`Visit ${title} website`}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <Image
        src={src}
        height={0}
        width={0}
        style={{ width: "100%", height: "auto", borderRadius: "0.5rem" }}
        sizes="100vw"
        alt={`${title}'s Image`}
        className="lg:hidden"
      />

      <h2 className="">{title}</h2>
      <div className="projectSeparator"></div>
      <div>
        <p className="text-xl">{type}</p>
        <p>Design & Development</p>
        <p
          className={`${
            status === "Completed"
              ? "bg-brandGreen"
              : status === "In Progress"
              ? "bg-orange-400"
              : "bg-red-400"
          } mt-4 w-fit text-black px-4 py-2 rounded-full`}
        >
          {status}
        </p>
      </div>
    </a>
  );
}
