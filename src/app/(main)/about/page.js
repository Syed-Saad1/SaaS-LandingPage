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
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
          <div className="flex gap-10">
            <div className="flex bg-[#F9F9F9] h-auto w-100 py-4 px-6 rounded-3xl">
              <div>
                <img className="h-20 w-26 object-contain" src="/Ino.png" />
              </div>
              <div></div>
            </div>
            <div className="flex bg-[#F9F9F9] h-auto w-100 py-4 px-6 rounded-3xl">
              <div>
                {" "}
                <img className="h-20 w-26 object-contain" src="/TW.png" />
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex gap-10">
            {" "}
            <div className="flex bg-[#F9F9F9] h-auto w-100 py-4 px-6 rounded-3xl">
              <div>
                {" "}
                <img className="h-20 w-26 object-contain" src="/EX.png" />
              </div>
              <div></div>
            </div>
            <div className="flex bg-[#F9F9F9] h-auto w-100 py-4 px-6 rounded-3xl">
              <div>
                {" "}
                <img className="h-20 w-26 object-contain" src="/RES.png" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
