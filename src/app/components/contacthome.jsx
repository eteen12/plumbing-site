import React from "react";
import Image from "next/image";
import BackgroundImage from "/public/sinkRunning.jpg";
import Woman from "/public/woman.jpg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import "/src/app/globals.css";

export default function ContactHome() {
  return (
    <div className="relative min-h-screen"> 
      <div className="relative w-full min-h-[40vh] sm:min-h-[35vh] flex flex-col items-center">
        <Image
          src={BackgroundImage}
          alt="Contact Background"
          className="object-cover"
          loading="lazy"
          fill
        />
        <div className="red-tint opacity-70 absolute inset-0"></div>
        {/*TEXT*/}
        <div className="relative z-10 flex flex-col items-center p-5 text-white">
          <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-red-700 rounded-full">
            <MdOutlineCalendarMonth className="text-3xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl montserrat700 text-center mt-2">
            Book an Appointment With Us Today
          </h2>
          <p className="p-5 pb-8 sm:text-lg text-center">Fill out the form to get started!</p>
        </div>
      </div>
      {/* Form and Image Sections */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 w-11/12 md:w-9/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 mx-auto -mt-14 sm:-mt-8 shadow-lg">
        {/* Form Section */}
        <form className="flex flex-col bg-white p-6 z-30 opacity-100">
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
              className="object-cover h-full w-full"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 w-1/3 h-2/8 sm:w-3/6 smClientDiv flex flex-col items-center justify-center text-white border-spacing-3 border-4 border-white bg-red-700">
              <span className="text-3xl iconSize sm:text-4xl z-20">
                <GoPerson />
              </span>
              <p className="font-bold text-xl sm:text-2xl z-20">200 +</p>
              <p className="z-20 text-sm baseTxt sm:text-base text-center">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
