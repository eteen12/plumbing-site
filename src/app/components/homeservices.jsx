"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Residential from "/public/residentialPlumbing.jpg";
import Commercial from "/public/commercialPlumbing.jpg";
import Emergency from "/public/emergencyPlumbing.jpg";

export default function HomeServices() {
  const services = [
    { id: 1, image: Residential, title: "Residential" },
    { id: 2, image: Commercial, title: "Commercial" },
    { id: 3, image: Emergency, title: "Emergency" },
  ];

  return (
    <div className="p-10 bg-black w-full h-5/6 ">
      {/*GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
        {/*FIRST COL */}

        <div className="flex flex-col ">
          <div className="flex">
            <div className="w-5 h-px bg-red-700 mr-2 mt-3" />
            <p className="text-lg montserrat600 text-red-700">Services</p>
          </div>
          <h2 className="text-white text-2xl lg:text-4xl montserrat700 ">
            Explore Our Services
          </h2>
          <p className="mt-5 lg:text-lg text-white">
            We offer a variety of services to meet your needs, including kitchen
            and bathroom plumbing, sink installation, sump pumps, water
            filtration systems, natural gas fitting, pipe service, hot water
            tank installation, and more!
          </p>
        </div>

        {/* SECOND COL */}
        <div className="w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="h-full w-full"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="relative group w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    fill
                  />
                  <div className="absolute bottom-0 flex items-center justify-center w-full">
                    <p className="text-white">hi</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
