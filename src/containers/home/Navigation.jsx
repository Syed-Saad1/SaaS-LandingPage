"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-20 py-5">
      <div className="flex items-center justify-between">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={120}
          height={28}
          className="w-25 sm:w-30 h-auto"
        />

        {/* Desktop Navigation */}
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

              <li className="flex items-center">
                <Link
                  className="text-white text-[14px] font-semibold"
                  href="/feauture"
                >
                  Feature
                </Link>

                <Image
                  src="/droparrow.png"
                  alt="arrow"
                  width={18}
                  height={18}
                  className="brightness-0 invert ml-1"
                />
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

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
