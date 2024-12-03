import React from "react";
import { services } from "./services-data";

interface ServiceImageProps {
  activeService: number;
}

export default function ServiceImage({ activeService }: ServiceImageProps) {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            activeService === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
}
