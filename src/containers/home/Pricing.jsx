import Image from "next/image";
import React from "react";

function Pricing() {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row
  justify-center items-center gap-50 px-5 lg:px-0"
      >
        <div className="text-center lg:text-left">
          {" "}
          <button className="bg-[#EFECFF] text-[#5236FF] text-sm px-4 py-2 rounded-full">
            Pricing
          </button>
          <h1 className="text-2xl md:text-5xl text-black font-extrabold mt-4">
            {" "}
            Simple and <br /> flexible pricing
          </h1>
          <p className="text-[#797979] font-medium mt-4 text-sm md:text-md">
            {" "}
            It is a long established fact that a reader the <br /> will be
            distracted by the readable content of <br /> a page from when
            looking at it layout.{" "}
          </p>
          <h1 className="text-lg font-bold text-black mt-3">
            Accepted Payment Methods
          </h1>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 bg-[#F9F9F9] px-6 py-3 rounded-xl mt-5 w-fit">
            <Image src="/VISA.svg" height={40} width={50} alt="VisaImg" />
            <Image src="/MASTER.svg" height={40} width={50} alt="MasterImg" />
            <Image src="/PAYPAL.svg" height={40} width={50} alt="PaypalImg" />
            <Image src="/AMAZON.svg" height={40} width={50} alt="AmazonImg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full sm:w-75 h-112 rounded-2xl bg-[#F9F9F9]">
            <div className="bg-[#F9F9F9] w-full sm:w-75 h-auto min-h-115 rounded-2xl">
              {" "}
              <div
                className="flex
            justify-between items-center px-8 py-6"
              >
                <h1 className="text-[#242331] font-extrabold text-2xl">
                  Basic
                </h1>
                <button className="bg-[#FFFFFF] px-4 py-2 rounded-full text-[#797979] font-bold text-sm">
                  Save 30%
                </button>
              </div>
              <div className="flex justify-center">
                <hr className="w-[80%] border-t border-[#D3D3D3]" />
              </div>{" "}
              <div className="flex flex-col justify-center items-center p-4">
                <h1 className="font-extrabold text-2xl">
                  $7.99 <sub className="text-sm">/ month</sub>
                </h1>
                <button className="mt-4 bg-[#FFEECC] text-[#C68A15] font font-semibold text-xs px-4 py-1 rounded-full">
                  Billed as $96 per year
                </button>
              </div>
              <div className="flex justify-center">
                <hr className="w-[80%] border-t border-[#D3D3D3]" />
              </div>{" "}
              <div>
                <p className="leading-7.5 text-center text-[#797979] mt-6 text-[14px]">
                  Unlimited members <br />{" "}
                  <span className="text-[#242331] font-bold"> Unlimited</span>{" "}
                  feedback <br /> Weekly team Feedback Friday <br /> Custom
                  Kudos{" "}
                  <span className="text-[#242331] font-bold">
                    +9 illustration
                  </span>{" "}
                  <br />
                  Team feedback history
                </p>
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <button className="mt-6 w-[80%] sm:w-auto border border-[#D3D3D3] px-4 py-2 rounded-full font-bold text-[14px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-75 h-130 rounded-2xl bg-[#F9F9F9]">
            <div className="bg-[#F9F9F9] w-full sm:w-75 h-130 min-h-130 rounded-2xl">
              {" "}
              <div
                className="flex
            justify-between items-center px-8 py-6"
              >
                <h1 className="text-[#242331] font-extrabold text-2xl">
                  Advanced
                </h1>
                <button className="bg-[#EFECFF] px-4 py-2 rounded-full text-[#5236FF] font-bold text-sm">
                  Popular
                </button>
              </div>
              <div className="flex justify-center">
                <hr className="w-[80%] border-t border-[#D3D3D3]" />
              </div>{" "}
              <div className="flex flex-col justify-center items-center p-4">
                <h1 className="font-extrabold text-2xl">
                  $10.99 <sub className="text-sm">/ month</sub>
                </h1>
                <button className="mt-4 bg-[#FFEECC] text-[#C68A15] font font-semibold text-xs px-4 py-1 rounded-full">
                  Billed as $199 per year
                </button>
              </div>
              <div className="flex justify-center">
                <hr className="w-[80%] border-t border-[#D3D3D3]" />
              </div>{" "}
              <div>
                <p className="leading-7.5 text-center text-[#797979] mt-6 text-[14px]">
                  Unlimited members <br />{" "}
                  <span className="text-[#5236FF] font-bold"> Unlimited</span>{" "}
                  feedback <br /> Weekly team Feedback Friday <br /> Custom
                  Kudos{" "}
                  <span className="text-[#5236FF] font-bold">
                    +9 illustration
                  </span>{" "}
                  <br />
                  Team feedback history (30 items) <br /> Personal feedback
                  history (6 items) <br /> Slack integration{" "}
                </p>
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <button className="mt-6 bg-[#242331] px-5 py-2 rounded-full font-bold text-white text-[14px]">
                  Get Started
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default Pricing;
