"use client";

import Link from "next/link";
import { Code2, BrainCircuit, BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface DataEngineerForSectionProps {
  onOpenContact?: () => void;
}

export default function DataEngineerForSection({
  onOpenContact,
}: DataEngineerForSectionProps) {
  const pillars = [
    {
      id: 1,
      title: "Application Development",
      icon: Code2,
      iconBox: "bg-sky-50 text-sky-600 border border-sky-100/80 group-hover:bg-sky-500 group-hover:text-white",
      cornerGlow: "from-sky-200/40 via-sky-100/20",
      summary:
        "Architecting low-latency data backends that power responsive web and mobile applications. From microservices event streaming to real-time database synchronization, we ensure your apps never wait on data.",
      href: "/application-development",
    },
    {
      id: 2,
      title: "AI / ML",
      icon: BrainCircuit,
      iconBox: "bg-purple-50 text-purple-600 border border-purple-100/80 group-hover:bg-purple-500 group-hover:text-white",
      cornerGlow: "from-purple-200/40 via-purple-100/20",
      summary:
        "AI and Machine Learning models are only as effective as the data fueling them. We engineer robust, reproducible training pipelines, real-time feature stores, and vector data infrastructure for predictive ML and LLM agents.",
      href: "/ai-ml",
    },
    {
      id: 3,
      title: "Business Intelligence",
      icon: BarChart3,
      iconBox: "bg-teal-50 text-teal-600 border border-teal-100/80 group-hover:bg-teal-500 group-hover:text-white",
      cornerGlow: "from-teal-200/40 via-teal-100/20",
      summary:
        "Transforming fragmented, raw enterprise transactions into reliable, single-source-of-truth dimensional models. Delivering fast analytical query engines and intuitive executive dashboards for leadership.",
      href: "/business-intelligence",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden">
      {/* Ambient background blur elements */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Pibi Tech Double Shade */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
              Our{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              Core pillars of enterprise data engineering, each with its dedicated architecture and technical blueprints.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Clean Professional Cards with Interactive Hover & Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id} animation="fade-up" delay={150 * (idx + 1)} className="h-full flex flex-col">
                <Link
                  href={pillar.href}
                  className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 hover:border-[#2ec4b6] shadow-sm hover:shadow-2xl hover:shadow-[#2ec4b6]/20 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full min-h-[370px] card-hover-effect shimmer-card"
                >
                  {/* Subtle soft ambient corner glow inspired by Image 1 */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.cornerGlow} to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 opacity-60`}
                  />

                  {/* Border glow highlight on top */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#2ec4b6]/0 group-hover:via-[#2ec4b6] to-transparent transition-all duration-500" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Soft light rounded icon box with rotation on hover - Centered */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xs ${pillar.iconBox}`}
                      >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Clean Title */}
                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-[#1f6fb2] transition-colors mb-3.5 tracking-tight min-h-[36px]">
                      {pillar.title}
                    </h3>

                    {/* Clean Description */}
                    <p className="text-sm font-sans text-slate-500 leading-relaxed font-normal mb-8 min-h-[85px] group-hover:text-slate-700 transition-colors">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Clean Bottom Link with hover push */}
                  <div className="relative z-10 mt-auto flex items-center gap-2 text-sm font-sans font-semibold text-[#1f6fb2] group-hover:text-[#2ec4b6] transition-colors pt-2">
                    <span className="group-hover:underline decoration-2 underline-offset-4">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

