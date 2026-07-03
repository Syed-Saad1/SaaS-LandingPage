import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function feauturePage() {
  return (
    <>
      <section>
        <div className="max-w-3xl mx-auto text-center px-4 mt-10">
          <h1 className="text-[30px] md:text-[36px] lg:text-[48px] font-extrabold text-[#242331]">
            Features{" "}
          </h1>

          <p className="mt-3 text-[#797979] text-sm md:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br className="hidden md:block" />
            interdum ullamcorper sed pharetra sene.
          </p>
        </div>{" "}
        <div>
          <div
            className="
lg:mt-30
mt-10
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
            <button className="cursor-pointer bg-[#EFECFF] px-6 py-4 rounded-full text-[#5236FF] font-bold text-[13px]">
              Analytics
            </button>
            <h1 className="font-extrabold text-3xl text-center mt-5">
              Powerful features to <br /> advanced user analytics
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
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
        </div>{" "}
      </section>
      <div className="flex justify-center mt-20">
        <hr className="w-[80%] border-t border-[#E3E3E3]" />
      </div>
      <section>
        <div>
          <div
            className="
lg:mt-20
mt-10
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
            <button className="cursor-pointer bg-[#EFECFF] px-6 py-4 rounded-full text-[#5236FF] font-bold text-[13px]">
              Integration
            </button>
            <h1 className="font-extrabold text-3xl text-center mt-5">
              Connect all your tools
              <br />
              and work efficiently.
            </h1>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-20 mt-10 px-4">
            {" "}
            <div className="w-83.25 h-110 rounded-2xl max-lg:w-full max-lg:h-auto">
              <Image
                src="/20Int.png"
                className="py-4 px-5 w-full h-auto"
                width={380}
                height={380}
                alt="Icon1"
              />
              <div className="flex-col flex justify-center items-center mt-3">
                <h1 className="font-semibold  text-xl">20+ integrations</h1>
                <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
                src="/AIOP.png"
                className="py-4 px-5 w-full h-auto"
                width={320}
                height={320}
                alt="Icon2"
              />
              <div className="flex-col flex justify-center items-center mt-3">
                <h1 className="font-semibold  text-xl">All-in-one platform</h1>
                <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
                src="/AC.png"
                className="py-4 px-5"
                width={340}
                height={280}
                alt="Icon3"
              />
              <div className="flex-col flex justify-center items-center">
                <h1 className="font-semibold text-xl">Advanced charts</h1>
                <p className="mt-2 text-[#797979] text-[14px] font-medium text-center">
                  Contrary to popular belief, Lore Ipsum <br /> is not simply
                  random text. It has roots <br /> in a piece.
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
        </div>{" "}
      </section>
      <section>
        <div
          className="mt-20 lg:mt-40 w-[86%] mx-auto rounded-4xl min-h-100 lg:h-100 overflow-hidden flex flex-col lg:flex-row justify-center items-center pt-10 lg:pt-14 gap-10 lg:gap-60"
          style={{
            backgroundImage: "url('/BackgroundBlue.png')",
          }}
        >
          <div>
            <h1 className="font-extrabold text-2xl md:text-3xl text-white text-center lg:text-left">
              {" "}
              Start your free trial <br /> today
            </h1>
            <p className="text-[#FFFFFF] font-medium text-[14px] mt-3 text-center lg:text-left">
              {" "}
              It is a long established fact that a reader will be <br /> by the
              readable when looking at it layout.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              {" "}
              <input
                className="bg-[#FFFFFF]/20 w-full sm:w-auto px-6 py-3 outline-none rounded-full text-[14px] text-white placeholder:text-white/70"
                type="text"
                placeholder="your mail here..."
              />
              <button className="bg-[#FFFFFF] px-6 py-3 rounded-full text-[14px] text-[#5236FF] font-bold">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/TRADE.png"
              width={460}
              height={460}
              alt="TRADE"
              className="w-70 md:w-90 lg:w-115 h-auto"
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
