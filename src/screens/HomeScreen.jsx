import Navigation from "@/containers/home/Navigation";
import HeroSection from "@/containers/home/HeroSection";
import Feature from "@/containers/home/Feature";
import Howitwork from "@/containers/home/Howitwork";
import Testimonial from "@/containers/home/Testimonial";
import Pricing from "@/containers/home/Pricing";
import Blog from "@/containers/home/Blog";
import Footer from "@/containers/Footer";

const HomeScreen = () => {
  return (
    <main className=" relative overflow-hidden">
      {/* Purple Background */}
      <div
        className="
        md:block
        hidden
        absolute
        top-0
        right-0
        w-[65%]
        h-205
        bg-no-repeat
        bg-top-right
        bg-contain
        -z-10
      "
        style={{
          backgroundImage: "url('/Background.png')",
        }}
      />

      <Navigation />
      <HeroSection />

      <Feature />
      <Howitwork />
      <Testimonial />
      <Pricing />
      <Blog />
      <Footer />
    </main>
  );
};
export default HomeScreen;
