import AboutSection from "./Components/About";
import HeroSection from "./Components/Herosection";
import Service from "./Components/Service";
import Choose from "./Components/Choose";
import TestimonialCarousel from "./Components/Testimonial";
import FAQSection from "./Components/FAQ";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Service/>
      <Choose/>
      <FAQSection/>
      <TestimonialCarousel />
    </>
  );
}
