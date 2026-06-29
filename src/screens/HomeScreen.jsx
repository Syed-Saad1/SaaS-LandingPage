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
    <div className="relative z-10">
      {" "}
      <img
        src="/Background.png"
        alt="Background"
        className="
      absolute
      top-0 right-0
      w-full lg:w-[60%]
      h-auto
      object-cover
    "
      />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <Feature />
        <Howitwork />
        <Testimonial />
        <Pricing />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
