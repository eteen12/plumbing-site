"use client";
import React from "react";
import Image from "next/image";
import "/src/app/globals.css";
import PlumberSpeaking from "/public/plumberSpeaking.jpg";

export default function AboutHome() {
  return (
    <div className="p-10 py-20 grid grid-cols-1 sm:grid-cols-2 lg:px-20 gap-10">
      <div className="relative h-[400px] sm:h-[500px]">
        <Image
          src={PlumberSpeaking}
          className="object-cover"
          fill
          alt="Smiling plumber"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw" // Responsive sizing
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex">
          <div className="w-5 h-px bg-red-700 mr-2 mt-3" />
          <p className="text-lg montserrat600 text-red-700">About Us</p>
        </div>
        <h2 className="montserrat700 text-2xl lg:text-4xl">Your Local Plumbing Experts</h2>
        <p className="mt-5 lg:text-lg">
          Serving Kelowna for over 10 years, we are dedicated to providing
          top-quality plumbing services with a commitment to customer
          satisfaction. Our experienced team is here to handle all your plumbing
          needs, from routine maintenance to emergency repairs.
        </p>
        <div className="flex mt-5">
          <a
            href="#"
            className="bg-red-700 text-white px-6 py-2 border border-red-700 text-lg text-nowrap"
          >
            Contact Us
          </a>
          <a
            href="/request-quote"
            className="text-black group flex items-center pl-4 font-semibold text-nowrap"
          >
            <span className="ml-2 transition-opacity duration-300 ease-in-out montserrat500">
              Request a Quote
            </span>
            <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
