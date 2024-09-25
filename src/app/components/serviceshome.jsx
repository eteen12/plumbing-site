"use client";
import React, { useState } from "react";
import Image from "next/image";

import Residential from "/public/residentalPlumbing.jpg";
import Commercial from "/public/commercialPlumbing.jpg";
import Emergency from "/public/emergencyPlumbing.jpg";

export default function ServicesHome() {
  const [overlay, setOverlay] = useState(null);

  const services = [
    {
      title: "Residental",
      description:
        "We provide a wide range of plumbing services for residential and commercial properties.",
      image: Residential,
      moreInfo: "Detailed information about plumbing services.",
    },
    {
      title: "Commercial",
      description:
        "Our team of electricians can handle any electrical project you have.",
      image: Commercial,
      moreInfo: "Detailed information about electrical services.",
    },
    {
      title: "Emergency",
      description:
        "We offer HVAC services for all types of heating and cooling systems.",
      image: Emergency,
      moreInfo: "Detailed information about HVAC services.",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md cursor-pointer 
            "
              onMouseEnter={() => setOverlay(index)}
              onMouseLeave={() => setOverlay(null)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 flex justify-between transform translate-y-1/2 bg-white p-4 w-2/3 shadow-md">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <button
                  onClick={() => setOverlay(index)}
                  className="text-black text-2xl "
                >
                  +
                </button>
              </div>
              {overlay === index && (
                <div className="absolute inset-0 bg-red-700  flex items-center justify-center h-[113%]">
                  <div className="text-white text-center p-4">
                    <h2 className="text-3xl mb-4">{service.title}</h2>
                    <p className="mb-4">{service.moreInfo}</p>
                    <button
                      onClick={() => setOverlay(null)}
                      className="bg-white text-black px-4 py-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
