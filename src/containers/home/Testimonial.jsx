// import React from "react";

// export default function Testimonial() {
//   return (
//     <div className="mt-40">
//       <div
//         className="w-full h-130 bg-[#5236FF] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
//         style={{
//           backgroundImage: "url('/roundedangleback.png')",
//         }}
//       >
//         <button className="bg-[#c4b1b1] px-4 py-3 rounded-full">
//           Testimonial
//         </button>
//         <h1 className="text-white text-3xl font-bold mt-4">
//           Trusted by millions of creators.
//         </h1>
//       </div>
//     </div>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="mt-40">
      <div
        className="w-full min-h-130 bg-[#5236FF] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 max-md:px-4"
        style={{
          backgroundImage: "url('/roundedangleback.png')",
        }}
      >
        <button className="bg-white/20 text-white px-5 py-2 rounded-full  mt-4 backdrop-blur-sm">
          Testimonial
        </button>

        <h1 className="text-white text-4xl font-bold text-center mt-6 max-md:text-3xl">
          Trusted by millions of creators.
        </h1>

        <div className="w-full max-w-6xl mt-12 max-lg:px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonialSwiper"
          >
            <SwiperSlide>
              <div className="rounded-3xl text-center shadow-none flex flex-col justify-center items-center">
                <p className="font-extrabold text-7xl text-white max-md:text-5xl">
                  “
                </p>

                <p className="text-white text-xl italic max-w-4xl mx-auto max-lg:text-lg max-md:text-base max-md:px-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <Image
                  src="/men1.jpg"
                  height={60}
                  width={60}
                  alt="MaleImg"
                  className="rounded-full object-cover mt-6 max-md:w-12.5 max-md:h-12.5"
                />
                <h3 className="mt-3 text-xl font-semibold text-white max-md:text-lg">
                  James Toriff{" "}
                </h3>
                <p className="text-white text-[12px]">Devloper</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-3xl text-center shadow-none flex flex-col justify-center items-center">
                <p className="font-extrabold text-7xl text-white max-md:text-5xl">
                  “
                </p>

                <p className="text-white text-xl italic max-w-4xl mx-auto">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <Image
                  src="/men2.jpg"
                  height={60}
                  width={60}
                  alt="MaleImg"
                  className="rounded-full object-cover mt-6"
                />

                <h3 className="mt-3 text-xl font-semibold  text-white">
                  Sarah Smith{" "}
                </h3>

                <p className="text-white text-[12px]">UI/UX Designer</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-3xl text-center shadow-none flex flex-col justify-center items-center">
                <p className="font-extrabold text-7xl text-white">“</p>
                <p className="text-white text-xl italic max-w-4xl mx-auto">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <Image
                  src="/Male.png"
                  height={60}
                  width={60}
                  alt="MaleImg"
                  className="rounded-full object-cover mt-6"
                />
                <h3 className="mt-3 text-xl font-semibold  text-white">
                  Michael Lee
                </h3>

                <p className="text-white text-[12px]">Founder</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-40 max-md:mb-20"></div>
    </section>
  );
}
