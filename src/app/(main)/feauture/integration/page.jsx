import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

function Integrations() {
  return (
    <div>
      <div>
        <div className="max-w-3xl mx-auto text-center px-4 mt-10">
          <h1 className="text-[30px] md:text-[36px] lg:text-[48px] font-extrabold text-[#242331]">
            Integrations{" "}
          </h1>

          <p className="mt-3 text-[#797979] text-sm md:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br className="hidden md:block" />
            interdum ullamcorper sed pharetra sene.
          </p>
        </div>{" "}
        <div className="flex justify-center mt-20">
          <div className="w-[80%]">
            <hr className="border-t border-[#E3E3E3]" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#5571FF] rounded-xl flex items-center justify-center">
                    <img src="/F.svg" alt="Facebook" className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Facebook</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br />
                  Ipsum is not simply random text. <br />
                  has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>

              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#1DA1F2] rounded-xl flex items-center justify-center">
                    <img
                      src="/T.svg"
                      alt="Facebook"
                      className="w-6 h-6 text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Twitter</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br /> Ipsum is not simply
                  random text. <br /> has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block text-[#5236FF] mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>
              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#FF2F2F] rounded-xl flex items-center justify-center">
                    <img src="/Y.svg" alt="Facebook" className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Youtube</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br /> Ipsum is not simply
                  random text. <br /> has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>
              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#B7081B] rounded-xl flex items-center justify-center">
                    <img src="/P.svg" alt="Facebook" className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Pinterest</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br /> Ipsum is not simply
                  random text. <br /> has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>
              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#A83AFF] rounded-xl flex items-center justify-center">
                    <img src="/Twitch.svg" alt="Facebook" className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Twitch</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br /> Ipsum is not simply
                  random text. <br /> has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>
              <div className="bg-[#F9F9F9] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F4F21F] rounded-xl flex items-center justify-center">
                    <img src="/S.svg" alt="Facebook" className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Snapchat</h3>
                    <p className="text-sm text-gray-500">Social</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-500 leading-7">
                  Contrary to popular belief, Lorem <br /> Ipsum is not simply
                  random text. <br /> has roots in a piece.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold underline"
                >
                  View Integration
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      </section>{" "}
    </div>
  );
}

export default Integrations;
