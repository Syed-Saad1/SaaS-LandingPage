import React from "react";
import Image from "next/image";

export default function Howitwork() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <button className="bg-[#EFECFF] text-[#5236FF] px-3 py-3 rounded-full text-[15px] font-bold cursor-pointer">
          How It Work
        </button>
        <h1 className="text-center font-extrabold text-4xl mt-6 leading-9 max-lg:text-3xl">
          {" "}
          Work smarter <br /> with easy access for user..
        </h1>
        <div className="flex gap-4 lg:gap-20 mt-10 max-lg:flex-col max-lg:w-full max-lg:px-4">
          {" "}
          <button className="cursor-pointer px-20 py-6 text-center bg-[#5236FF] rounded-2xl overflow-hidden text-white font-bold text-[18px] max-lg:px-8">
            01. Create account
          </button>
          <button className="cursor-pointer px-20 py-6 text-center bg-[#F9F9F9] rounded-2xl overflow-hidden text-black font-bold text-[18px] max-lg:px-8">
            02. Install tracking code
          </button>
          <button className="cursor-pointer px-20 py-6 text-center bg-[#F9F9F9] rounded-2xl overflow-hidden text-black font-bold text-[18px] max-lg:px-8">
            03. Track analytics
          </button>
        </div>
      </div>

      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-30 grid lg:grid-cols-2 items-center gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <Image src="/Icon.svg" width={70} height={70} alt="Icon" />

              <h1 className="font-extrabold text-3xl leading-tight">
                Create your account <br />& start your work
              </h1>
            </div>

            <p className="mt-6 text-[#797979] text-[15px] leading-7 text-center lg:text-left">
              It is a long established fact that a reader will be distracted
              <br className="hidden lg:block" />
              by the readable content of a page when looking at its
              <br className="hidden lg:block" />
              layout. The point of using Lorem Ipsum.
            </p>

            <button className="cursor-pointer mt-8 bg-black text-white px-8 py-3 rounded-full font-semibold">
              Get Started
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/call.png"
              width={520}
              height={620}
              alt="Call"
              className="w-full max-w-130 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
