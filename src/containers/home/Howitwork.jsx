import React from "react";
import Image from "next/image";

export default function Howitwork() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <button className="bg-[#EFECFF] text-[#5236FF] px-3 py-3 rounded-full text-[15px] font-bold">
          How It Work
        </button>
        <h1 className="text-center font-extrabold text-4xl mt-6 leading-9 max-lg:text-3xl">
          {" "}
          Work smarter <br /> with easy access for user..
        </h1>
        <div className="flex gap-5 mt-6 max-lg:flex-col max-lg:w-full max-lg:px-4">
          {" "}
          <button className="px-20 py-6 text-center bg-[#5236FF] rounded-2xl overflow-hidden text-white font-bold text-[18px] max-lg:px-8">
            01. Create account
          </button>
          <button className="px-20 py-6 text-center bg-[#F9F9F9] rounded-2xl overflow-hidden text-black font-bold text-[18px] max-lg:px-8">
            02. Install tracking code
          </button>
          <button className="px-20 py-6 text-center bg-[#F9F9F9] rounded-2xl overflow-hidden text-black font-bold text-[18px] max-lg:px-8">
            03. Track analytics
          </button>
        </div>
      </div>

      <div className="mt-20 gap-56 flex justify-center items-center max-lg:flex-col max-lg:gap-10 max-lg:px-4">
        {" "}
        <div>
          <div className="flex justify-center items-center gap-4 max-lg:flex-col">
            {" "}
            <Image src="/icon.svg" height={70} width={60} alt="callIcon" />
            <h1 className="font-extrabold text-xl">
              Create your account <br /> & start your work
            </h1>
          </div>
          <div className="pl-27 mt-4 max-lg:pl-0 max-lg:text-center">
            {" "}
            <p className="font-medium text-[#797979] text-[14px]">
              It is a long established fact that a reader will be distracted{" "}
              <br /> by the readable content of a page from when looking at it{" "}
              <br />
              layout. The point of using Lorem Ipsum
            </p>
            <button className="mt-6 px-8 py-3 rounded-full bg-black text-white font-bold text-[12px]">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/call.png"
            height={400}
            width={400}
            alt="Callbox"
            className="max-lg:w-70 max-lg:h-auto"
          />{" "}
        </div>
      </div>
    </div>
  );
}
