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
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-0 left-0 p-2">
                <button
                  onClick={() => setOverlay(service)}
                  className="bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-4 w-1/2 transform translate-x-[-10%]">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <a
                href={`/services/${service.title.toLowerCase()}`}
                className="absolute bottom-0 right-0 m-4 text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {overlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">{overlay.title}</h3>
            <p className="mb-4">{overlay.moreInfo}</p>
            <button
              onClick={() => setOverlay(null)}
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
