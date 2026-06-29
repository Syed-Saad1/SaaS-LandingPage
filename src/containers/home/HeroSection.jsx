import React from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-56 lg:pt-0 flex items-center">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        <div className="flex items-center px-6 sm:px-10 lg:px-20 text-center lg:text-left">
          <div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-5xl leading-tight">
              Build your
              <br />
              audience and
              <br />
              grow your brand
            </h1>

            <p className="text-[#797979] font-medium mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing
              <br className="hidden lg:block" />
              elit interdum ullamcorper sed pharetra sene.
            </p>

            <div className="flex flex-row justify-center lg:justify-start gap-3 mt-6">
              <button className="bg-[#5236FF] px-5 py-3 rounded-full text-[14px] text-white">
                Get Started
              </button>

              <button className="flex items-center gap-2 bg-[#F4F4F4] px-5 py-3 rounded-full text-[14px] text-black">
                Watch Video
                <Play size={16} className="fill-black" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 lg:mt-0 px-5">
          <div className="relative w-full max-w-125 lg:max-w-150">
            {" "}
            <img
              src="/Image.png"
              alt="tradeImg"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
