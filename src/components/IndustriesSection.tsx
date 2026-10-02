"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface IndustriesSectionProps {
  onSelectIndustry?: (industryId: string) => void;
  onOpenContact: () => void;
}

export default function IndustriesSection({
  onSelectIndustry,
  onOpenContact,
}: IndustriesSectionProps) {
  const industries = [
    {
      id: "healthcare",
      title: "Healthcare",
      image: "/images/healthcare.jpg",
      href: "/healthcare",
      summary:
        "Enable better patient outcomes with real-time clinical data, analytics and secure data platforms.",
    },
    {
      id: "finance",
      title: "Finance",
      image: "/images/finance.jpg",
      href: "/finance",
      summary:
        "Detect risks, prevent fraud and accelerate decision-making with trusted, real-time data.",
    },
    {
      id: "autonomous-vehicles",
      title: "Autonomous Vehicles",
      image: "/images/autonomous-vehicles.jpg",
      href: "/autonomous-vehicles",
      summary:
        "Process sensor and telemetry data to power safer, smarter and connected mobility.",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      image: "/images/ecommerce.jpg",
      href: "/ecommerce",
      summary:
        "Understand customers, optimize inventory and personalize experiences with data-driven insights.",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pibi Tech Double Shade */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
              Industries{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed font-normal">
              Tailored data engineering solutions for domain-specific enterprise challenges.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Scroll Reveal and Hover FX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {industries.map((ind, idx) => {
            return (
              <ScrollReveal key={ind.id} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                <div
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#2ec4b6] shadow-xs hover:shadow-2xl hover:shadow-[#2ec4b6]/20 transition-all duration-300 card-hover-effect shimmer-card h-full flex-1 justify-between"
                >
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950 shrink-0">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-[#1f6fb2] transition-colors min-h-[58px] flex items-start">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-slate-600 mt-2.5 leading-relaxed group-hover:text-slate-800 transition-colors min-h-[72px]">
                        {ind.summary}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
                      {ind.href ? (
                        <Link
                          href={ind.href}
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#1f6fb2] hover:text-[#2ec4b6] group-hover:gap-2.5 transition-all cursor-pointer"
                        >
                          <span className="group-hover:underline underline-offset-4">Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <button
                          onClick={onOpenContact}
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#1f6fb2] hover:text-[#2ec4b6] group-hover:gap-2.5 transition-all cursor-pointer"
                        >
                          <span className="group-hover:underline underline-offset-4">Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
