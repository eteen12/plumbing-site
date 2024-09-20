"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HomeServices() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex flex-col  items-center  p-10 bg-red-700 rounded-lg">
          <div className="text-white w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Our Commitment to Quality</h3>
            <p className="mt-4">
              We provide reliable plumbing solutions tailored to your needs. Our team is dedicated to ensuring your home or business is running smoothly.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="" 
              alt="Plumbing Services"
              className="object-cover rounded-lg h-64 md:h-full"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white">Slide 2</h3>
          <p className="text-white mt-2">Content for slide 2.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white">Slide 3</h3>
          <p className="text-white mt-2">Content for slide 3.</p>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}
