import NavBar from "./components/navbar";
import HomeServices from "./components/homeservices";
import AboutHome from "./components/abouthome";
import ContactHome from "./components/contacthome";
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
          Est 2010
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

      {/* About*/}
      <AboutHome />
      <ContactHome />
      <div className="p-10 bg-black w-full h-4/6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          
          <div className="flex flex-col ">
            <div className="flex">
              <div className="w-5 h-px bg-red-700 mr-2 mt-3" />
              <p className="text-lg montserrat600 text-red-700">Services</p>
            </div>
            <h2 className="text-white text-2xl lg:text-4xl montserrat700 ">Explore Our Services</h2>
            <p className="mt-5 lg:text-lg text-white">
              We offer a variety of services to meet your needs, including
              kitchen and bathroom plumbing, sink installation, sump pumps,
              water filtration systems, natural gas fitting, pipe service, hot
              water tank installation, and more!
            </p>
          </div>
          
          <div>
            <HomeServices />
          </div>
        </div>
      </div>
    </div>
  );
}
