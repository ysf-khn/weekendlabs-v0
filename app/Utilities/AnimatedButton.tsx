"use client";
import React, { useState } from "react";

const AnimatedButton = ({ toggleModal }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="hidden md:block relative bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md w-32  transition-colors duration-300"
      onClick={toggleModal}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-brandDark"></span>
      </span>

      <div className="relative h-6 overflow-hidden">
        <span
          className={`absolute w-full block transition-transform duration-300 text-center ${
            isHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          Get Started
        </span>
        <span
          className={`absolute w-full block transition-transform duration-300 text-center ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          Let&apos;s Go!
        </span>
      </div>
    </button>
  );
};

export default AnimatedButton;
