"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "James Toriff",
      role: "Developer",
      image: "/men1.jpg",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      image: "/men2.jpg",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Founder",
      image: "/Male.png",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  return (
    <section className="mt-40">
      <div
        className="w-full min-h-130 bg-[#5236FF] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 max-md:px-4"
        style={{
          backgroundImage: "url('/roundedangleback.png')",
        }}
      >
        <button className="cursor-pointer bg-white/20 text-white px-5 py-2 rounded-full  mt-4 backdrop-blur-sm">
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
            loop
            className="testimonialSwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-3xl text-center shadow-none flex flex-col justify-center items-center">
                  <p className="font-extrabold text-7xl text-white max-md:text-5xl">
                    "
                  </p>

                  <p className="text-white text-xl italic max-w-4xl mx-auto max-lg:text-lg max-md:text-base max-md:px-4">
                    {item.review}
                  </p>

                  <div className="mt-4 relative flex overflow-hidden justify-center items-center size-14 rounded-full">
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="object-cover size-full"
                    />
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-white max-md:text-lg">
                    {item.name}
                  </h3>

                  <p className="text-white text-[12px]">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mb-40 max-md:mb-20"></div>
    </section>
  );
}
