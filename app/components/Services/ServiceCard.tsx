import React from "react";
import { Service } from "./types";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onHover: () => void;
}

export default function ServiceCard({
  service,
  isActive,
  onHover,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-300 ease-out ${
        isActive ? "translate-x-4" : ""
      }`}
      onMouseEnter={onHover}
    >
      <div className="flex items-center justify-between py-1 px-6">
        <h3
          className={`text-2xl md:text-5xl font-medium md:font-extrabold transition-colors duration-300 ${
            isActive ? "text-white" : "text-gray-500"
          }`}
        >
          {service.title}
        </h3>

        {/* <ArrowRightIcon
          className={`w-6 h-6 transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0 -translate-x-4"
          }`}
        /> */}
      </div>
      {/* {isActive && (
        <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
      )} */}
    </div>
  );
}
