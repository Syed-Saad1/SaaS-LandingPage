"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-30 py-5">
      <div className="flex items-center justify-between">
        <Image
          href="/"
          src="/Logo.png"
          alt="Logo"
          width={120}
          height={28}
          className="w-25 sm:w-30 h-auto"
        />

        <div className="hidden lg:flex items-center gap-6">
          <nav className="w-107 h-10 bg-black/10 rounded-full">
            <ul className="flex items-center justify-center gap-4 h-full">
              <li>
                <Link className="text-white text-[14px] font-semibold" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-white text-[14px] font-semibold"
                  href="/about"
                >
                  About
                </Link>
              </li>

              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    href="/feauture"
                    className="text-white text-[14px] font-semibold"
                  >
                    Feature
                  </Link>

                  <img
                    src="/droparrow.png"
                    className="brightness-0 invert ml-1"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link
                    href="/feauture/integration"
                    className="block px-5 py-3 text-sm hover:bg-[#5236FF] hover:text-white rounded-t-xl"
                  >
                    Integration{" "}
                  </Link>

                  <Link
                    href="/feature/feature-2"
                    className="block px-5 py-3 text-sm hover:bg-[#5236FF] hover:text-white"
                  >
                    Feature Two
                  </Link>

                  <Link
                    href="/feature/feature-3"
                    className="block px-5 py-3 text-sm hover:bg-[#5236FF] hover:text-white rounded-b-xl"
                  >
                    Feature Three
                  </Link>
                </div>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-white text-[14px] font-semibold"
                  href="/pages"
                >
                  Pages
                </Link>

                <Image
                  src="/droparrow.png"
                  alt="arrow"
                  width={18}
                  height={18}
                  className="brightness-0 invert ml-1"
                />
              </li>

              <li>
                <Link
                  className="text-white text-[14px] font-semibold"
                  href="/blog"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  className="text-white text-[14px] font-semibold"
                  href="/cart"
                >
                  Cart(0)
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/signin"
            className="bg-white text-[#242331] font-bold text-[14px] px-6 py-2 rounded-full"
          >
            Sign In
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden z-50 relative"
        >
          {open ? (
            <X size={28} color="black" />
          ) : (
            <Menu size={28} color="black" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-5 bg-white rounded-3xl shadow-xl p-6">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/feauture" onClick={() => setOpen(false)}>
                Feature
              </Link>
            </li>

            <li>
              <Link href="/pages" onClick={() => setOpen(false)}>
                Pages
              </Link>
            </li>

            <li>
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blogs
              </Link>
            </li>

            <li>
              <Link href="/cart" onClick={() => setOpen(false)}>
                Cart(0)
              </Link>
            </li>

            <li className="">
              <button
                href=""
                onClick={() => setOpen(false)}
                className="block text-center bg-[#5236FF] text-white px-20 py-3 rounded-full"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
