"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreSolutions?: () => void;
}

export default function HeroSection({
  onOpenContact,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[580px] lg:min-h-[640px] pt-32 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-white text-slate-900 border-b border-slate-100"
    >
      {/* Ambient background blue & teal glows */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-200/30 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/25 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle modern dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 lg:py-16 text-center">

        {/* Main Headline with exact content and Blue gradient */}
        <ScrollReveal animation="fade-up" delay={200}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-5">
            Data{" "}
            <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
              Engineering
            </span>{" "}
            Services
          </h1>
        </ScrollReveal>

        {/* Blue accent divider line */}
        <ScrollReveal animation="zoom-in" delay={300}>
          <div className="w-16 h-1 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] rounded-full mx-auto mb-7 shadow-xs" />
        </ScrollReveal>

        {/* Exact Content Description Paragraph from reference */}
        <ScrollReveal animation="fade-up" delay={400}>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto font-sans font-normal leading-relaxed mb-9">
            We create scalable data ecosystems that simplify complex operations, improve data
            reliability and support enterprise-wide AI-driven transformation. Our data engineering
            services span architecture design, pipeline development, migration, integration,
            governance and optimization to build high-performance data environments.
          </p>
        </ScrollReveal>

        {/* Exact CTA Button in Blue Theme with rich hover effects */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1 mb-10">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#1f6fb2]/25 hover:shadow-[#2ec4b6]/40 hover:-translate-y-1 hover:scale-103 active:scale-98 active:translate-y-0 transition-all duration-300 cursor-pointer group"
            >
              <span>Consult Our AI Experts</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>

        {/* Trust Highlights */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-sans font-medium">
            <div className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#1f6fb2]" />
              <span>Multi-Cloud: AWS, Azure, GCP</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#2ec4b6]" />
              <span>Sub-Second Streaming SLA</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#1f6fb2]" />
              <span>Zero Data Loss Guarantee</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
