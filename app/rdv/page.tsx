import BookingPage from "@/components/BookingPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver un appel — Liberty Scale",
  description: "Réservez votre appel gratuit de 20 minutes avec l'équipe Liberty Scale. On vous explique comment créer votre LLC américaine en moins de 7 jours.",
};

export default function RDVPage() {
  return (
    <main className="relative bg-[#050510] min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <BookingPage />
      <Footer />
    </main>
  );
}
