import NavBar from "./components/navbar";
import HomeServices from "./components/homeservices"; // Import the component
import Image from "next/image";
import BackgroundImage from "/public/background.jpg";
import MobileBackgroundImage from "/public/backgroundMobile.jpg";
import "/src/app/globals.css";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative z-50">
        <NavBar />
      </div>
      <div className="hidden sm:block">
        <Image
          src={BackgroundImage}
          className="object-cover brightness-75 z-10"
          fill
          alt="Background Image"
          priority
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src={MobileBackgroundImage}
          className="object-cover brightness-75 z-10"
          fill
          alt="Mobile Background Image"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-start justify-center min-h-screen px-7 lg:px-10 xl:px-14 2xl:px-24 textMontserrat">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-wrap montserrat">
          Kelownas Trusted <br /> Plumbing Professionals
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white">
          Est 2020
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="bg-transparent text-white px-6 py-2 border border-white text-lg"
          >
            Services
          </a>
          <a
            href="#"
            className="bg-red-700 text-white px-6 py-2 border border-red-700 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Services Header Section */}
      <div className="relative flex flex-col sm:grid sm:grid-cols-2 pt-20 pb-20 gap-y-10 lg:px-24 xl:px-48 2xl:px-80 xl:gap-y-7">
        {/* Services Header Section */}
        <div className="flex flex-col justify-center relative">
          {/* "Our Services" Line */}
          <div className="absolute top-0 left-7 flex items-center">
            <div className="w-10 h-px bg-red-700 mr-4"></div>
            <p className="text-sm md:text-base lg:text-md font-semibold text-red-700">
              Our Services
            </p>
          </div>

          {/* For small screens */}
          <h2 className="px-7 text-3xl sm:hidden montserrat700 mt-6">
            From Leaking Faucets to Bursting Pipes
          </h2>

          {/* For medium to large screens */}
          <h2 className="px-7 hidden sm:block lg:block text-3xl montserrat700 mt-6">
            From Leaking Faucets to <br/>Bursting Pipes
          </h2>
        </div>

        {/* Services Description Section */}
        <div className="px-7 text-base sm:text-base lg:text-lg flex flex-col md:justify-center lg:justify-end ">
          <p>
            We got you covered. We do a wide range of services, from private
            sector to large industrial commercial plumbing. No job is too big or
            too small.
          </p>
        </div>
      </div>
      <HomeServices />
    </div>
  );
}

