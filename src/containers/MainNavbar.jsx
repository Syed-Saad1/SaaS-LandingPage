"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-4 sm:mx-8 lg:mx-30 my-5">
      {/* Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img src="/Logo.png" alt="Logo" width={120} height={28} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="h-10 w-100 bg-black/10 rounded-[39px]">
            <ul className="flex items-center justify-center gap-4 h-full">
              <li>
                <Link href="/" className="text-black text-[14px] font-semibold">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-black text-[14px] font-semibold"
                >
                  About
                </Link>
              </li>

              <li>
                <div className="flex items-center gap-1">
                  <Link
                    href="/feauture"
                    className="text-black text-[14px] font-semibold"
                  >
                    Feature
                  </Link>

                  <img src="/droparrow.png" alt="" width={18} height={18} />
                </div>
              </li>

              <li>
                <div className="flex items-center gap-1">
                  <Link
                    href="/pages"
                    className="text-black text-[14px] font-semibold"
                  >
                    Pages
                  </Link>

                  <img src="/droparrow.png" alt="" width={18} height={18} />
                </div>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-black text-[14px] font-semibold"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="text-black text-[14px] font-semibold"
                >
                  Cart(0)
                </Link>
              </li>
            </ul>
          </nav>

          <button className="bg-[#5236FF] text-white font-bold text-[14px] px-6 py-2 rounded-full">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-5 bg-black rounded-3xl shadow-lg p-6">
          <ul className="flex flex-col items-center gap-5 text-white">
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

            <li className="w-full">
              <button
                onClick={() => setOpen(false)}
                className="w-full bg-[#5236FF] text-white rounded-full py-3"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
