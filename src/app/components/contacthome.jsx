import React from "react";
import Image from "next/image";
import BackgroundImage from "/public/sinkRunning.jpg";
import { FaCalendarDays } from "react-icons/fa6";
import "/src/app/globals.css";

export default function ContactHome() {
  return (
    <div className="relative h-[130vh]">
      <div className="relative w-full h-1/3 sm:h-1/2">
        <Image
          src={BackgroundImage}
          alt="Contact Background"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="red-tint opacity-70 absolute inset-0"></div>
        {/*TEXT*/}
        <div className="absolute inset-0 flex flex-col items-center ">
          <div className="p-5 text-white">
            <FaCalendarDays className="text-3xl" />
          </div>
          <div className="text-white text-center">
            <h2 className="text-2xl montserrat700">
              Book an Apointment With Us Today
            </h2>
            <p className="p-5">Fill out the form to get started.</p>
          </div>
        </div>
        {/*FORM */}
      </div>
      <form className="absolute top-[21%] left-1/2 transform -translate-x-1/2 w-[89%] sm:w-[75%] md:w-[60%] bg-white p-6 shadow-md z-30 opacity-100">
        <div className="mb-4 flex flex-col">
          <h3 className="text-red-700 montserrat600 text-lg pb-2">
            Book with us now
          </h3>
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <label className="block text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <label className="block text-gray-700" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <label className="block text-gray-700" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <label className="block text-gray-700" htmlFor="notes">
            Notes (Max 200 characters)
          </label>
          <textarea
            id="notes"
            maxLength="200"
            className="border border-gray-300 p-2 w-full rounded"
            rows="4"
          />
          <button
            type="submit"
            className="mt-4 bg-red-700 text-white font-bold py-2 hover:bg-red-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
