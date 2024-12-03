"use client";

import React, { useState } from "react";
import { services } from "./services-data";
import ServiceImage from "./ServiceImage";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="min-h-screen bg-black text-white pt-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl mb-16">Services</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[4/3] bg-[#0A0A14]  overflow-hidden">
          <ServiceImage activeService={activeService} />
        </div>

        <div className="space-y-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === index}
              onHover={() => setActiveService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
