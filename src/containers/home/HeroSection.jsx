import React from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 lg:pt-0 pt-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Build your
              <br />
              audience and
              <br />
              grow your brand
            </h1>

            <p className="lg:text-md text-sm mt-4 text-gray-500 lg:leading-6 leading-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit <br />{" "}
              interdum ullamcorper sed pharetra sene.{" "}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <button className="cursor-pointer w-full sm:w-auto bg-[#5236FF] text-white px-8 py-4 rounded-full">
                Get Started
              </button>
              <button className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 px-8 py-4 rounded-full">
                Watch Video
                <Play fill="white" size={18} />
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src="/Image.png" className="w-full max-w-205" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
