import MainNavbar from "@/containers/MainNavbar";
import Footer from "@/containers/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <MainNavbar />
      <div className="absolute -top-60 -left-60 w-175 h-175 border border-gray-200 rounded-full opacity-60"></div>
      <div className="absolute -top-60 right-0 w-175 h-175 border border-gray-200 rounded-full opacity-60"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-[120px] md:text-[170px] font-extrabold leading-none bg-linear-to-r from-[#6B5BFF] to-[#4F46E5] bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-5 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
          pretium faucibus leo nisl nulla pharetra nullam.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 px-8 py-3 rounded-full bg-linear-to-r from-[#6B5BFF] to-[#4F46E5] text-white font-semibold hover:scale-105 duration-300"
        >
          Homepage
        </Link>
      </div>{" "}
      <Footer />
    </>
  );
}
