import React from "react";
import Image from "next/image";
import BackgroundImage from "/public/sinkRunning.jpg";
import Woman from "/public/woman.jpg";
import { FaCalendarDays } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import "/src/app/globals.css";

export default function ContactHome() {
  return (
    <div className="relative h-[160vh] sm:h-[130vh]">
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
            <div className="flex items-center justify-center w-14 h-14 bg-red-700 rounded-full">
              <FaCalendarDays className="text-3xl" />
            </div>
          </div>
          <div className="text-white text-center">
            <h2 className="text-2xl montserrat700">
              Book an Apointment With Us Today
            </h2>
            <p className="p-5">Fill out the form to get started!</p>
          </div>
        </div>
        {/*FORM */}
      </div>
      <div className=" relative top-[-20%] grid grid-cols-1 sm:grid-cols-2 w-11/12 md:w-9/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 mx-auto shadow-lg">
        {/* Form Section */}
        <form className="flex flex-col bg-white p-6 z-30 opacity-100">
          {/* w-[89%] sm:w-[75%] md:w-[60%] */}
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

        {/* Image Section */}
        <div className="bg-white p-3 sm:p-5 maxHeight">
          <div className="w-full h-full flex items-center justify-center relative">
            <Image
              src={Woman}
              alt="Happy Customer Using Sink"
              className="object-cover h-full w-full "
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 0 w-1/3 h-1/5 flex flex-col items-center text-white border-spacing-3 border-4 border-white bg-red-700">
              <span className="text-4xl  z-20">
                <GoPerson />
              </span>
              <p className="font-bold text-3xl  z-20">200 +</p>
              <p className="z-20">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
