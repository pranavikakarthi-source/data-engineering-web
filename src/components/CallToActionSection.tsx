"use client";

import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CallToActionSectionProps {
  onOpenContact: () => void;
}

export default function CallToActionSection({ onOpenContact }: CallToActionSectionProps) {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-cyan-200/30 via-sky-200/25 to-teal-200/30 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-50/70 via-sky-50/40 to-teal-50/70 border border-teal-200/80 p-8 sm:p-14 text-center shadow-xl shadow-teal-500/5 overflow-hidden card-hover-effect">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-stylized font-bold uppercase tracking-widest text-[#1f6fb2] block">
                GET IN TOUCH
              </span>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
                Ready to Build Data Platforms You Can{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Trust?
                </span>
              </h2>

              <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Create enterprise-ready data platforms with real-time streaming, modern lakehouses,
                and automated governance built for production scale.
              </p>

              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-teal-100/90 shadow-sm max-w-xl mx-auto space-y-4 shimmer-card">
                <p className="text-sm sm:text-base font-sans font-semibold text-slate-800">
                  Let's discuss your enterprise data initiative and build the right data foundation for success.
                </p>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#1f6fb2]/25 hover:shadow-[#2ec4b6]/40 hover:-translate-y-1 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer group"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Guarantee badges */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-slate-600 border-t border-teal-200/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ec4b6]" />
                  <span>Enterprise Security & SOC-2 SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#1f6fb2]" />
                  <span>Complimentary 45-Min Architecture Audit</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
