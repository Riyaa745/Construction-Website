import AboutSection from "./Components/About";
import HeroSection from "./Components/Herosection";
import ProjectCards from "./Components/Project";
import TestimonialCarousel from "./Components/Testimonial";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ProjectCards/>
    <TestimonialCarousel/>
    </>
  );
}
