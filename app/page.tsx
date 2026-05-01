import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsTicker from "@/components/StatsTicker";
import VideoPresentation from "@/components/VideoPresentation";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FounderSection from "@/components/FounderSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollReveal";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import LiveProof from "@/components/LiveProof";

export default function Home() {
  return (
    <main className="relative bg-black pb-20">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <StatsTicker />
      <VideoPresentation />
      <Features />
      <HowItWorks />
      <FounderSection />
      <Pricing />
      <Testimonials />
      <VideoTestimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBottomCTA />
      <LiveProof />
    </main>
  );
}
