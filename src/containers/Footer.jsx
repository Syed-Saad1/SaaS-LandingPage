import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div>
        <div className="flex justify-center mt-20">
          <hr className="w-[80%] border-t border-[#E3E3E3]" />
        </div>{" "}
        <div className="flex flex-col lg:flex-row justify-between gap-10 w-full max-w-7xl mx-auto px-6 lg:px-20 mt-20">
          {" "}
          <div className="w-full lg:w-1/4">
            {" "}
            <Image src="/Logo.png" height={28} width={100} alt="" />
            <p className="font-medium text-sm text-[#797979] mt-4">
              It is a long established fact that from <br /> will be distracted
              by the readable <br /> from when looking.
            </p>
            <div
              className="flex gap-2  mt-6
            "
            >
              <div>
                <img
                  className="h-4 w-4 mt-1
                "
                  src="/mail.png"
                  alt=""
                />
              </div>
              <div className="text-[#797979] font-normal text-sm">
                <p>saasup@gmail.com</p>
                <p>mail@saasup.com</p>
              </div>
            </div>
            <div
              className="flex gap-2  mt-4
            "
            >
              <div>
                <img
                  className="h-4 w-4 mt-1
                "
                  src="/phone.png"
                  alt=""
                />
              </div>
              <div className="text-[#797979] font-normal text-sm">
                <p>+987 6541 3654</p>
                <p>+001 6547 6589</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/6">
            {" "}
            <h1 className="font-bold text-lg">Pages</h1>
            <div className="w-[30%] mt-4">
              {" "}
              <hr className="text-[#E3E3E3]" />
            </div>
            <ul className="font-normal text-[#797979] pt-2">
              <li className="pt-1.5 text-md">Home</li>
              <li className="pt-1.5 text-md">About Us</li>
              <li className="pt-1.5 text-md text-[#5236FF] font-bold">
                Integrations
              </li>
              <li className="pt-1.5 text-md">Pricing</li>
              <li className="pt-1.5 text-md">Features</li>
              <li className="pt-1.5 text-md">Contact Us</li>
            </ul>
          </div>
          <div className="w-1/6">
            <h1 className="font-bold text-lg">Utility Pages</h1>
            <div className="w-[30%] mt-4">
              {" "}
              <hr className="text-[#E3E3E3]" />
            </div>
            <ul className="font-normal text-[#797979] pt-2">
              <li className="pt-1.5 text-md">Password</li>
              <li className="pt-1.5 text-md">Protected</li>
              <li className="pt-1.5 text-md">404 Not Found</li>
              <li className="pt-1.5 text-md">Style Guide</li>
              <li className="pt-1.5 text-md">Licenses</li>
              <li className="pt-1.5 text-md">Changelog</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 bg-[#F9F9F9] rounded-4xl px-6 py-8">
            {" "}
            <div>
              <div>
                <p className="font-bold text-[#5236FF] text-md">Download</p>
                <h1 className="font-extrabold text-xl mt-2">
                  Its suitable to all <br /> decvices and screens
                </h1>
                <p className="font-normal text-[#797979] text-sm mt-2">
                  It is a long established fact that a reader <br /> will be
                  distracted layout.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  {" "}
                  <img src="/Button.png" alt="" className="w-30 h-auto" />{" "}
                  <img className="w-30 h-auto" src="/Button (1).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-20">
            <hr className="w-[80%] border-t border-[#E3E3E3]" />
          </div>{" "}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-6 px-6 lg:px-20 mb-6 text-center lg:text-left">
            {" "}
            <p className="font-normal text-[#797979] text-md">
              Copyright © Saasup | Designed by Victorflow - Powered by Webflow
            </p>
            <div>
              <img
                src="/SocialMedia.png"
                alt="Social Media"
                className="w-36 h-auto"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
