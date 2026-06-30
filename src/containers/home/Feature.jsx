import React from "react";
import Image from "next/image";
import Link from "next/link";
function Feature() {
  return (
    <div>
      <div
        className="
lg:mt-10
flex flex-col
justify-center
items-center
-space-x-8
max-lg:flex-col
max-lg:space-x-0
max-lg:gap-8
max-lg:px-4
"
      >
        <button className="bg-[#EFECFF] px-10 py-4 rounded-full text-[#5236FF] font-bold text-[13px]">
          Features
        </button>
        <h1 className="font-extrabold text-3xl text-center mt-5">
          Powerful features to boost <br /> your productivity
        </h1>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-20 mt-10 px-4">
        {" "}
        <div className="w-83.25 h-110 rounded-2xl max-lg:w-full max-lg:h-auto">
          <Image
            src="/Icon1.png"
            className="py-4 px-5 w-full h-auto"
            width={380}
            height={380}
            alt="Icon1"
          />
          <div className="flex-col flex justify-center items-center mt-3">
            <h1 className="font-semibold  text-xl">Secured Platform</h1>
            <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
              Contrary to popular belief, Lore Ipsum <br /> is not simply random
              text. It has roots <br /> in a piece.
            </p>
            <Link
              className="underline font-bold text-[15px] text-[#242331] mt-6"
              href="/learnMore"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full max-w-83.25 h-120 lg:h-110 rounded-2xl bg-[#F9F9F9]">
          <Image
            src="/Icon2.png"
            className="py-4 px-5 w-full h-auto"
            width={320}
            height={320}
            alt="Icon2"
          />
          <div className="flex-col flex justify-center items-center mt-3">
            <h1 className="font-semibold  text-xl">Advanced Analytics</h1>
            <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
              Contrary to popular belief, Lore Ipsum <br /> is not simply random
              text. It has roots <br /> in a piece.
            </p>
            <Link
              className="underline font-bold text-[15px] text-[#5236FF] mt-6"
              href="/learnMore"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-83.25 h-110 rounded-2xl max-lg:w-full max-lg:h-auto">
          <Image
            src="/Icon3.png"
            className="py-4 px-5 w-full h-auto"
            width={380}
            height={380}
            alt="Icon3"
          />
          <div className="flex-col flex justify-center items-center mt-3">
            <h1 className="font-semibold  text-xl">Powerful Automation</h1>
            <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
              Contrary to popular belief, Lore Ipsum <br /> is not simply random
              text. It has roots <br /> in a piece.
            </p>
            <Link
              className="underline font-bold text-[15px] text-[#242331] mt-6"
              href="/learnMore"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-30 flex flex-col lg:flex-row justify-center items-center px-4">
        <div
          className="
      h-120
      w-180
      bg-[#F1F1F1]
      rounded-[40px]
      flex flex-col
      justify-center
      px-12
      relative
      z-10
      max-lg:w-full
      max-lg:h-auto
      max-lg:px-10
      max-lg:py-10
    "
        >
          <h1 className="font-bold text-2xl lg:text-3xl">
            Powerful and easy to use <br />
            saas builder platform
          </h1>

          <p className="mt-4 text-[#797979] font-medium text-[14px] leading-7">
            It is a long established fact that a reader will be by the from
            <br />
            readable content of a page when looking at its layout. The point
            <br />
            of using lorem Ipsum.
          </p>

          <div className="flex mt-8 items-center gap-4">
            <Image
              src="/CostImg.png"
              width={60}
              height={60}
              alt="Cost Effective"
            />

            <div>
              <h2 className="font-bold text-[20px]">Cost Effective</h2>

              <p className="text-[#797979] text-[14px] leading-6">
                Contrary to popular belief, Lore Ipsum
                <br />
                is not simply random text.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative lg:-ml-32 mt-10 lg:mt-0">
          <Image
            src="/BgBlue.png"
            width={260}
            height={260}
            alt="Blue Shape"
            className="
        absolute
        
        right-40
        left-120.5
        top-1/2
        -translate-y-1/2
        z-0
      "
          />

          <Image
            src="/System.png"
            width={400}
            height={400}
            alt="Dashboard"
            className="
        relative
        z-10
        w-140
        h-100
        object-contain
      "
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
