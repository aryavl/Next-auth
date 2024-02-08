import Footer from "@/components/landingpage/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import LandingNavbar from "@/components/landingpage/LandingNavbar";
import Pricing from "@/components/landingpage/Pricing";
import Testimonials from "@/components/landingpage/Testimonials";

export default function Home() {
  return (
    <main className=" ">
   <LandingNavbar/>
    <HeroSection/>
    <Pricing/>
    <Testimonials/>
    <div className='footer px-10 sm:px-20 md:px-28  py-5'>
    <Footer/>
    </div>
</main>
  );
}
