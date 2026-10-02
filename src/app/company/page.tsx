"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";
import GlobalOfficesSection from "@/components/GlobalOfficesSection";

export default function CompanyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const leadership = [
    {
      name: "Siranjeevi Ramdoss",
      role: "Founder & CEO",
      image: "/images/leader-siranjeevi.jpg",
      linkedin: "https://www.linkedin.com",
      imagePosition: "object-[center_20%]",
    },
    {
      name: "Palani Kumar Murugesan",
      role: "CTO",
      image: "/images/leader-palani.jpeg",
      linkedin: "https://www.linkedin.com",
      imagePosition: "object-[50%_12%]",
    },
    {
      name: "Arsha Fahima",
      role: "Business Development Manager",
      image: "/images/leader-arsha.jpeg",
      linkedin: "https://www.linkedin.com",
      imagePosition: "object-[50%_15%]",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#2ec4b6] selection:text-white font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#1f6fb2] px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/pibi-logo.png"
              alt="Pi bi Logo"
              width={32}
              height={32}
              className="h-7 w-auto object-contain"
            />
            <span className="text-xl font-display font-extrabold text-slate-900">
              Pibi Tech
            </span>
          </Link>

          <button
            onClick={handleOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-md shadow-[#1f6fb2]/20 transition-all cursor-pointer"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* =========================================================
            1. HERO SECTION (Image 4 Style)
           ========================================================= */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white overflow-hidden border-b border-slate-100">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/60 via-teal-50/40 to-transparent pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Title (Double Shade Gradient with User Color Palette) */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] max-w-4xl mx-auto text-[#10213a]">
                Empowering Enterprise Growth Through{" "}
                <span className="bg-[linear-gradient(135deg,#123c64,#22b8b0)] bg-clip-text text-transparent">
                  Modern Data Architecture
                </span>
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="mt-7 text-base sm:text-lg lg:text-xl font-sans text-[#627089] max-w-3xl mx-auto leading-relaxed font-normal">
                Pi bi Technologies is a global data engineering and cloud solutions partner powering
                enterprise digital transformation at scale. We combine specialized domain expertise,
                robust real-time streaming architectures, and secure modern data stacks to help
                enterprises build scalable systems they can rely on.
              </p>
            </ScrollReveal>

            {/* Hero CTAs */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[linear-gradient(135deg,#123c64,#22b8b0)] hover:brightness-110 shadow-lg shadow-[#22b8b0]/25 hover:shadow-[#22b8b0]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Talk to Our Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/#solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#10213a] bg-[#f5f9fc] hover:bg-[#eef5fa] border border-[#dee8f0] transition-colors"
                >
                  <span>Explore Our Solutions</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================
            2. MEET OUR LEADERSHIP TEAM (Image 1 Style)
           ========================================================= */}
        <section className="py-20 lg:py-28 bg-[#f5f9fd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
                  Meet Our{" "}
                  <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                    Leadership Team
                  </span>
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed font-normal">
                  Our leadership team brings proven experience in technology and strategy. With a strong focus on personalized services and GenAI solutions, they help clients drive scalable and reliable digital transformation.
                </p>
              </div>
            </ScrollReveal>

            {/* 3 Leadership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader, idx) => (
                <ScrollReveal key={leader.name} animation="fade-up" delay={100 * (idx + 1)}>
                  <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#2ec4b6] shadow-xs hover:shadow-xl hover:shadow-[#2ec4b6]/10 transition-all duration-300 flex flex-col items-center text-center group h-full">
                    {/* Circular Avatar */}
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#1f6fb2] to-[#2ec4b6] shadow-md group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className={`object-cover ${leader.imagePosition || "object-center"}`}
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-display font-extrabold text-slate-900 group-hover:text-[#1f6fb2] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans font-medium text-slate-500 mt-1 mb-5">
                      {leader.role}
                    </p>

                    {/* LinkedIn Link */}
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0077b5] transition-colors mt-auto pt-4"
                    >
                      <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.93H5.06v8.57h2.8z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. GLOBAL & INDIA OFFICES (Image 2 Style)
           ========================================================= */}
        <GlobalOfficesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
