"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataEngineerForSection from "@/components/DataEngineerForSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleExploreSolutions = () => {
    const el = document.getElementById("solutions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#2ec4b6] selection:text-white relative font-sans">
      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-1">
        {/* 1. Hero Section (Image 1 content + Image 2 double-shade theme) */}
        <HeroSection
          onOpenContact={handleOpenContact}
          onExploreSolutions={handleExploreSolutions}
        />

        {/* 2. Data Engineer For Section (Replaces ChallengesSection with 3 cards) */}
        <DataEngineerForSection onOpenContact={handleOpenContact} />

        {/* 3. Our Data Engineering Capabilities */}
        <CapabilitiesSection />

        {/* 4. Technologies & Ecosystems */}
        <TechnologiesSection onOpenContact={handleOpenContact} />

        {/* 5. Industry-Focused Solutions */}
        <IndustriesSection onOpenContact={handleOpenContact} />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. Call to Action Banner */}
        <CallToActionSection onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mail / Quick Contact button (as seen in Image 1 bottom-right) */}
      <button
        onClick={handleOpenContact}
        aria-label="Quick Contact"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-2xl bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 text-white shadow-xl shadow-[#2ec4b6]/30 flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 group cursor-pointer"
      >
        <Mail className="w-6 h-6 group-hover:rotate-6 transition-transform" />
      </button>

      {/* Interactive Consultation / Contact Dialog */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
