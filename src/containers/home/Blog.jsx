import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div>
      <div className="mt-20 flex flex-col justify-center items-center px-4">
        <button className="bg-[#EFECFF] px-8 py-3 rounded-full text-[#5236FF] font-bold text-[13px]">
          Blogs
        </button>

        <h1 className="font-extrabold text-[#000000] text-2xl sm:text-3xl mt-2 text-center">
          Most popular articles
        </h1>
      </div>

      <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 mt-16 px-5 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pl-14 px-2 lg:px-0">
          {" "}
          <div className="w-full max-w-130 bg-[#F9F9F9] rounded-[32px] mx-auto">
            {" "}
            <div className="flex justify-center">
              <img
                src="/Eimg.png"
                alt=""
                className="w-[90%] h-auto object-cover mt-4 rounded-2xl mx-auto"
              />
            </div>
            <div className="px-6 py-6">
              <h3 className="text-[#797979] font-medium text-sm">
                November 15, 2022
              </h3>

              <h1 className="mt-4 font-extrabold text-[20px] sm:text-[22px] leading-tight">
                10 Top tips for making your <br className="hidden sm:block" />
                Saas product sticky
              </h1>

              <p className="text-[#797979] font-medium text-[12px] mt-3 leading-6">
                It is a long established fact that a reader will be distracted
                <br className="hidden sm:block" />
                by the readable content of a page from when looking at it
                <br className="hidden sm:block" />
                layout. The point of using Lorem Ipsum
              </p>

              <Link
                href="/readmore"
                className="inline-block underline text-[#5236FF] text-[12px] font-bold mt-6"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 px-2 lg:px-0">
          {" "}
          <div className="w-full max-w-130 bg-[#F9F9F9] rounded-[32px] mx-auto">
            {" "}
            <div className="flex justify-center">
              <img
                src="/Limg.png"
                alt=""
                className="w-[90%] h-auto object-cover mt-4 rounded-2xl mx-auto"
              />
            </div>
            <div className="px-6 py-6">
              <h3 className="text-[#797979] font-medium text-sm">
                November 15, 2022
              </h3>

              <h1 className="mt-4 font-extrabold text-[20px] sm:text-[22px] leading-tight">
                Automate Reports Generation
                <br className="hidden sm:block" />
                with Saasup
              </h1>

              <p className="text-[#797979] font-medium text-[12px] mt-3 leading-6">
                It is a long established fact that a reader will be distracted
                <br className="hidden sm:block" />
                by the readable content of a page from when looking at it
                <br className="hidden sm:block" />
                layout. The point of using Lorem Ipsum
              </p>

              <Link
                href="/readmore"
                className="inline-block underline text-[#5236FF] text-[12px] font-bold mt-6"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
