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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <div className="relative group">
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-64"
              loading="lazy"
              width={640}
              height={256}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
