"use client";

import {
  Award,
  Users,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Award,
      title: "Proven Expertise",
      sub: "10+ years specializing exclusively in high-throughput modern data engineering, distributed computing, and multi-cloud architectures.",
      points: [
        "350+ Enterprise Big Data Deployments",
        "Certified Snowflake & Databricks Architects",
        "Deep mastery across AWS, Azure, and GCP",
      ],
    },
    {
      icon: Users,
      title: "Flexible Engagement Models",
      sub: "Tailored partnership structures designed around your roadmap, team capacity, and budgetary priorities.",
      points: [
        "Staff Augmentation with Senior Engineers",
        "Dedicated Data Pods & Turnkey Delivery",
        "24/7 Fully Managed Platform Support",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      sub: "Zero-trust architectures with automated PII masking, tokenization, fine-grained RBAC, and full regulatory governance.",
      points: [
        "SOC 2 Type II & ISO 27001 Certified",
        "HIPAA & HITECH Healthcare Compliance",
        "GDPR & CCPA Data Privacy by Design",
      ],
    },
    {
      icon: Headphones,
      title: "Dedicated Team of Architects",
      sub: "Direct access to top-tier principal data engineers and solutions architects committed to your continuous platform health.",
      points: [
        "99.99% Production Pipeline SLA",
        "Continuous Performance Optimization",
        "Zero-Lock-in Open Standard Formats",
      ],
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
              Your Trusted{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Data Engineering Partner
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed">
              We combine deep technical expertise with a business-first approach to deliver
              data solutions that scale seamlessly with your goals.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid with Scroll Reveal and Card Hover FX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                <div
                  className="bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-[#2ec4b6] rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ec4b6]/15 shadow-xs card-hover-effect shimmer-card h-full flex-1"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-center mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-[#2ec4b6]/30 flex items-center justify-center text-[#1f6fb2] group-hover:scale-110 group-hover:bg-[#1f6fb2] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-[#1f6fb2] transition-colors min-h-[52px] flex items-start">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors min-h-[64px]">
                      {pillar.sub}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2 mt-auto">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-sans text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2ec4b6] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
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

