"use client";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-[30px] md:text-[36px] lg:text-[48px] font-extrabold text-[#242331]">
            About our company
          </h1>

          <p className="mt-3 text-[#797979] text-sm md:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br className="hidden md:block" />
            interdum ullamcorper sed pharetra sene.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <div className="flex gap-5">
            <div className="w-[64%]">
              <img
                src="/fm.png"
                alt=""
                className="w-full h-auto rounded-[28px] object-cover"
              />
            </div>

            <div className="w-[36%]">
              <img
                src="/fl.png"
                alt=""
                className="w-full h-auto rounded-[28px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 xl:gap-32 mt-16 px-4">
          <div className="lg:w-[30%]">
            <h1 className="text-[30px] lg:text-[42px] font-extrabold text-[#242331]">
              What we do
            </h1>
          </div>
          <div className="lg:w-[70%]">
            <p className="text-[#797979] text-[15px] lg:text-[16px] leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </p>

            <p className="text-[#797979] text-[15px] lg:text-[16px] leading-8 mt-6">
              Content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="w-[90%] lg:w-[82%] mx-auto bg-[#F9F9F9] rounded-xl py-10 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 text-center">
            <div>
              <h1 className="font-extrabold text-[28px] lg:text-[34px]">
                100 <span className="text-[#5236FF]">M</span>
              </h1>
              <p className="text-[#242331] font-bold text-sm lg:text-base">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h1 className="font-extrabold text-[28px] lg:text-[34px]">
                24 <span className="text-[#5236FF]">h</span>
              </h1>
              <p className="text-[#242331] font-bold text-sm lg:text-base">
                Expert Support Team
              </p>
            </div>

            <div>
              <h1 className="font-extrabold text-[28px] lg:text-[34px]">
                98 <span className="text-[#5236FF]">k+</span>
              </h1>
              <p className="text-[#242331] font-bold text-sm lg:text-base">
                Sales Count
              </p>
            </div>

            <div>
              <h1 className="font-extrabold text-[28px] lg:text-[34px]">
                208 <span className="text-[#5236FF]">+</span>
              </h1>
              <p className="text-[#242331] font-bold text-sm lg:text-base">
                Client Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-4">
          <div className="lg:w-1/2">
            <h1 className="text-[30px] lg:text-[42px] font-extrabold text-[#242331]">
              Our Mission
            </h1>

            <p className="text-[15px] lg:text-[16px] text-[#797979] mt-6 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu
              aliquet diam lorem viverra at justo. Nulla odio neque gravida in
              pharetra egestas. Ac id sagittis at morbi interdum nibh diam
              sagittis et.
            </p>

            <p className="text-[15px] lg:text-[16px] text-[#797979] mt-6 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu
              aliquet diam lorem viverra at justo. Nulla odio neque gravida in
              pharetra egestas.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/Laptop.png"
              alt="Laptop"
              className="w-full max-w-140 h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center mt-16">
          <button className="bg-[#EFECFF] text-[#5236FF] px-3 py-3 rounded-full text-[15px] font-bold">
            Our values
          </button>
          <h1 className="text-center font-extrabold text-4xl mt-6 leading-9 max-lg:text-3xl">
            {" "}
            The story and values behind <br /> our company
          </h1>
        </div>{" "}
        <div className="flex flex-col justify-center items-center gap-10 mt-10 px-4">
          {" "}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-34 w-full justify-center">
            {" "}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F9F9F9] h-auto w-full sm:max-w-130 py-4 px-6 rounded-3xl">
              <div className="h-24 w-20 rounded-xl bg-[#6046FF] flex items-center justify-center shrink-0">
                <img
                  src="/Ino.svg"
                  alt="Icon"
                  className="h-15 w-12.5 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                {" "}
                <h1 className="text-[#242331] font-bold text-[18px]">
                  Innovation
                </h1>
                <p className="text-[12px] text-[#797979] pt-1">
                  Long established fact that a readeed to will{" "}
                  <br className="hidden sm:block" /> be distracted by the
                  readable content of a page when looking at its layout
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F9F9F9] h-auto w-full sm:max-w-130 py-4 px-6 rounded-3xl">
              <div className="h-24 w-20 rounded-xl bg-[#6046FF] flex items-center justify-center shrink-0">
                <img
                  src="/TW.svg"
                  alt="Icon"
                  className="h-15 w-12.5 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                {" "}
                <h1 className="text-[#242331] font-bold text-[18px]">
                  Team Work
                </h1>
                <p className="text-[12px] text-[#797979] pt-1">
                  Long established fact that a readeed to will{" "}
                  <br className="hidden sm:block" /> be distracted by the
                  readable content of a page when looking at its layout
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-34 w-full justify-center">
            {" "}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F9F9F9] h-auto w-full sm:max-w-130 py-4 px-6 rounded-3xl">
              <div className="h-24 w-20 rounded-xl bg-[#6046FF] flex items-center justify-center shrink-0">
                <img
                  src="/EX.svg"
                  alt="Icon"
                  className="h-15 w-12.5 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                {" "}
                <h1 className="text-[#242331] font-bold text-[18px]">
                  Excellence
                </h1>
                <p className="text-[12px] text-[#797979] pt-1">
                  Long established fact that a readeed to will{" "}
                  <br className="hidden sm:block" /> be distracted by the
                  readable content of a page when looking at its layout
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F9F9F9] h-auto w-full sm:max-w-130 py-4 px-6 rounded-3xl">
              <div className="h-24 w-20 rounded-xl bg-[#6046FF] flex items-center justify-center shrink-0">
                <img
                  src="/RES.svg"
                  alt="Icon"
                  className="h-15 w-12.5 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                {" "}
                <h1 className="text-[#242331] font-bold text-[18px]">
                  Responsibility{" "}
                </h1>
                <p className="text-[12px] text-[#797979] pt-1">
                  Long established fact that a readeed to will{" "}
                  <br className="hidden sm:block" /> be distracted by the
                  readable content of a page when looking at its layout
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-26">
          <hr />
        </div>
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-20 mt-26 gap-12">
          {" "}
          <div>
            {" "}
            <button className="bg-[#EFECFF] text-[#5236FF] px-6 py-3 rounded-full text-[15px] font-bold">
              Career
            </button>
            <h1 className="font-extrabold text-3xl lg:text-4xl mt-6 leading-tight">
              {" "}
              Join our Saasup <br className="hidden sm:block" /> Let’s work
              together
            </h1>
          </div>
          <div>
            <div className="mt-6 h-auto w-full lg:w-120 border border-[#CBCBCB] rounded-2xl">
              <div className="px-5 sm:px-8 py-6 sm:py-8">
                <h1 className="font-bold text-md text-[#242331]">
                  Web Designer & Developer
                </h1>
                <p className="font-normal text-sm text-[#242331] pt-2">
                  San Francisco, CA |{" "}
                  <span className="text-[#5236FF]">Full Time</span>
                </p>
                <p className="text-[13.10px] font-normal text-[#797979] pt-3">
                  It is a long established fact that a reader will be distracted
                  by the <br className="hidden sm:block" />
                  readable content of a page from when looking at it layout. The
                  point of <br className="hidden sm:block" /> using Lorem Ipsum
                  looking at it layout.
                </p>
                <button className="mt-4 bg-[#242331] px-4 py-2 text-whites rounded-full text-white text-xs ">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="mt-6 h-auto w-full lg:w-120 border border-[#CBCBCB] rounded-2xl">
              <div className="px-5 sm:px-8 py-6 sm:py-8">
                <h1 className="font-bold text-md text-[#242331]">
                  Product Development manager{" "}
                </h1>
                <p className="font-normal text-sm text-[#242331] pt-2">
                  San Francisco, CA |{" "}
                  <span className="text-[#5236FF]">Full Time</span>
                </p>
                <p className="text-[13.10px] font-normal text-[#797979] pt-3">
                  It is a long established fact that a reader will be distracted
                  by the <br className="hidden sm:block" /> readable content of
                  a page from when looking at it layout. The point of{" "}
                  <br className="hidden sm:block" /> using Lorem Ipsum looking
                  at it layout.
                </p>
                <button className="mt-4 border px-4 py-2 text-whites rounded-full text-black text-xs ">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="mt-6 h-auto w-full lg:w-120 border border-[#CBCBCB] rounded-2xl">
              {" "}
              <div className="px-5 sm:px-8 py-6 sm:py-8">
                <h1 className="font-bold text-md text-[#242331]">
                  Head of finnance{" "}
                </h1>
                <p className="font-normal text-sm text-[#242331] pt-2">
                  San Francisco, CA |{" "}
                  <span className="text-[#5236FF]">Full Time</span>
                </p>
                <p className="text-[13.10px] font-normal text-[#797979] pt-3">
                  It is a long established fact that a reader will be distracted
                  by the <br className="hidden sm:block" /> readable content of
                  a page from when looking at it layout. The point of{" "}
                  <br className="hidden sm:block" /> using Lorem Ipsum looking
                  at it layout.
                </p>
                <button className="mt-4 border px-4 py-2 text-whites rounded-full text-black text-xs ">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="mt-6 h-auto w-full lg:w-120 bg-[#5236FF] rounded-2xl">
              <div className="flex flex-col justify-center items-center py-10 sm:py-14 px-6">
                <h3 className="text-white font-bold text-lg">
                  Can't find the position you are looking for?
                </h3>
                <p className="text-center text-white text-xs mt-2 font-normal">
                  Don't worry, get in touch with us anyways, we are always{" "}
                  <br /> looking for great team members to join us.
                </p>
                <button className="mt-4 bg-[#FFFFFF] px-4 py-2 text-whites rounded-full text-black text-xs ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
