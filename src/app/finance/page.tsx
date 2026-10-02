"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Clock,
  Code2,
  Lock,
  Award,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinancePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const useCases = [
    {
      category: "Application Development",
      categoryBadge: "bg-blue-50 text-[#1f6fb2] border-blue-200",
      title: "Real-Time Payment Data Services",
      image: "/images/finance-app.jpg",
      challenge:
        "Payment and lending apps showed delayed balances and transaction status because data moved in slow batches.",
      solution:
        "Event-driven transaction streams with low-latency data APIs, plus partitioning and caching to handle peak traffic.",
      batchStreaming: "Real-Time Streaming",
      impact: "Balance updates in under a second, even at peak load.",
      technologies: ["Kafka", "Flink", "Redis", "PostgreSQL"],
    },
    {
      category: "AI / ML",
      categoryBadge: "bg-teal-50 text-[#2ec4b6] border-teal-200",
      title: "Fraud Detection Feature Pipeline",
      image: "/images/finance-aiml.jpg",
      challenge:
        "Fraud models used stale features, and training and live scoring used different definitions, which hurt accuracy.",
      solution:
        "Shared feature store serving identical features for training and live scoring, with data-drift monitoring and automated validation before scoring.",
      batchStreaming: "Streaming Features + Daily Retraining",
      technologies: ["Kafka", "Flink", "Feast", "Redis", "MLflow"],
    },
    {
      category: "Business Intelligence",
      categoryBadge: "bg-sky-50 text-[#144773] border-sky-200",
      title: "Risk & Compliance Reporting Warehouse",
      image: "/images/finance-bi.jpg",
      challenge:
        "Different teams reported different revenue and risk numbers, and regulatory reports were built by hand.",
      solution:
        "Governed warehouse with a semantic layer, one official definition per metric, and automated audit and compliance reports.",
      batchStreaming: "Daily Batch + Intraday Refresh",
      technologies: ["Snowflake", "dbt", "Airflow", "Power BI"],
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
            1. HERO SECTION
           ========================================================= */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#0c1624] text-white overflow-hidden">
          {/* Subtle Background Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f6fb2]/25 via-[#0c1624] to-[#0c1624]" />
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#2ec4b6]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#1f6fb2]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Title (Double Shade Gradient) */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.15] max-w-4xl mx-auto text-white">
                Financial Software{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Development & Data Engineering
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl font-sans text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
                Detect risks, prevent fraud, and accelerate real-time decision-making with trusted,
                low-latency financial data platforms. From sub-millisecond payment rails to governed
                regulatory lakehouses, we build financial infrastructure that scales with high fidelity.
              </p>
            </ScrollReveal>

            {/* Hero CTAs */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#2ec4b6]/25 hover:shadow-[#2ec4b6]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Consult Our Financial Data Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#use-cases"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors backdrop-blur-xs"
                >
                  <span>Explore Use Cases</span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </a>
              </div>
            </ScrollReveal>

            {/* Enterprise Credentials Strip */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-stylized text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
                  350+ Financial IT Experts
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1f6fb2]" />
                  750+ Enterprise Clients
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
                  PCI-DSS & SOC 2 Ready
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1f6fb2]" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
                  Top 1% on TrustPilot
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  ★ 4.8 on Clutch
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================
            2. DOMAIN OVERVIEW / CAPABILITIES SECTION
           ========================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Tailored{" "}
                  <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                    FinTech & Banking Solutions
                  </span>
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed font-normal">
                  High-speed ledger synchronization, AI-powered fraud mitigation, and governed financial intelligence.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {[
                {
                  title: "Real-Time Payment & Ledger Ingestion",
                  icon: Zap,
                  description:
                    "Event-driven transaction pipelines using Apache Kafka and Flink for sub-second account reconciliation and instant ledger balancing.",
                  tag: "Sub-Second Latency",
                },
                {
                  title: "PCI-DSS & SOX Regulatory Lakehouses",
                  icon: Lock,
                  description:
                    "Immutable audit logs, cryptographic transaction hashing, and automated lineage for 100% compliant multi-cloud financial data stores.",
                  tag: "Audit-Ready Security",
                },
                {
                  title: "Real-Time Fraud & Anomaly Scoring",
                  icon: Cpu,
                  description:
                    "Unified feature stores and online inference pipelines scoring millions of transactions per second with sub-15ms response times.",
                  tag: "AI Threat Prevention",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#2ec4b6] shadow-xs hover:shadow-xl hover:shadow-[#2ec4b6]/10 transition-all duration-300 h-full flex-1 flex flex-col justify-between">
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-center mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[#1f6fb2]/10 flex items-center justify-center text-[#1f6fb2]">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex justify-center mb-1">
                          <span className="text-[11px] font-stylized font-bold px-2.5 py-1 rounded-full bg-slate-100 text-[#1f6fb2] border border-slate-200">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-slate-900 mt-4 mb-2.5 min-h-[56px] flex items-start">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed min-h-[75px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. USE CASES SECTION (Matching Healthcare Box Layout)
           ========================================================= */}
        <section id="use-cases" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with Double Shade */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
                  Finance{" "}
                  <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                    Use Cases
                  </span>
                </h2>
                <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed font-normal">
                  Explore how our modern data architectures empower banks, payment processors, and fintech leaders to achieve sub-second execution and uncompromising compliance.
                </p>
              </div>
            </ScrollReveal>

            {/* Horizontal Box Layout */}
            <div className="space-y-8">
              {useCases.map((uc, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={100 * (index + 1)}>
                  <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#1f6fb2]/50 shadow-xs hover:shadow-2xl hover:shadow-[#1f6fb2]/10 transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10">
                    {/* Box Header: Category Badge & Main Title */}
                    <div className="pb-5 border-b border-slate-100">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-stylized font-bold border ${uc.categoryBadge} mb-2`}
                      >
                        {uc.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                        {uc.title}
                      </h3>
                    </div>

                    {/* Box Content Grid (Image on left + Challenge, Solution, Specs on right) */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                      {/* Left: Preview Image */}
                      <div className="lg:col-span-4 relative h-52 sm:h-60 lg:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner">
                        <Image
                          src={uc.image}
                          alt={uc.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Right: Challenge, Solution, Batch/Streaming, Tech, Impact */}
                      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Challenge Column */}
                        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60">
                          <div className="flex items-center gap-2 text-xs font-stylized font-bold text-rose-600 uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            Challenge
                          </div>
                          <p className="text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
                            {uc.challenge}
                          </p>
                        </div>

                        {/* Solution Column */}
                        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60">
                          <div className="flex items-center gap-2 text-xs font-stylized font-bold text-teal-600 uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            Solution
                          </div>
                          <p className="text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
                            {uc.solution}
                          </p>
                        </div>

                        {/* Batch / Streaming Spec */}
                        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60">
                          <div className="flex items-center gap-2 text-xs font-stylized font-bold text-[#1f6fb2] uppercase tracking-wider mb-2">
                            <Clock className="w-3.5 h-3.5 text-[#1f6fb2]" />
                            Batch / Streaming
                          </div>
                          <p className="text-xs sm:text-sm font-sans font-semibold text-slate-900">
                            {uc.batchStreaming}
                          </p>
                          {uc.impact && (
                            <div className="mt-3 pt-3 border-t border-slate-200/80">
                              <div className="text-[11px] font-stylized font-bold text-emerald-700 uppercase">
                                Measurable Impact:
                              </div>
                              <p className="text-xs font-sans font-medium text-slate-700 mt-0.5">
                                {uc.impact}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Technologies Tags */}
                        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60">
                          <div className="flex items-center gap-2 text-xs font-stylized font-bold text-slate-700 uppercase tracking-wider mb-2">
                            <Code2 className="w-3.5 h-3.5 text-slate-600" />
                            Technologies
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {uc.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 text-xs font-stylized font-medium rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. CTA BANNER
           ========================================================= */}
        <section className="py-16 sm:py-20 bg-[#0c1624] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#1f6fb2]/30 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              Ready to Upgrade Your{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Financial Data Ecosystem?
              </span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Speak with our senior financial data architects to design zero-latency transaction pipelines, unified feature stores, and automated risk reporting engines.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenContact}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#2ec4b6]/25 transition-all cursor-pointer"
              >
                <span>Schedule a Financial Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
