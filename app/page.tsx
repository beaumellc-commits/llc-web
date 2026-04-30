import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoPresentation from "@/components/VideoPresentation";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollReveal";
import StickyBottomCTA from "@/components/StickyBottomCTA";

export default function Home() {
  return (
    <main className="relative bg-[#050510] pb-20">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <VideoPresentation />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <VideoTestimonials />
      <FinalCTA />
      <Footer />
      <StickyBottomCTA />
    </main>
  );
}
