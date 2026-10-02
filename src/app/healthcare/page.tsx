"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Cpu,
  Clock,
  Code2,
  Lock,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function HealthcarePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const useCases = [
    {
      category: "Application Development",
      categoryBadge: "bg-blue-50 text-[#1f6fb2] border-blue-200",
      title: "Clinical Data Services for Hospital Apps",
      image: "/images/healthcare.jpg",
      challenge:
        "Doctor and patient apps pulled data from separate EHR, lab, and pharmacy systems, so screens loaded slowly and showed outdated records.",
      solution:
        "Unified patient data store with fast, secure APIs and event streaming that pushes lab results and appointment updates to apps instantly.",
      batchStreaming: "Real-Time Events + Nightly Sync",
      technologies: ["Kafka", "PostgreSQL", "REST APIs", "Airflow"],
    },
    {
      category: "AI / ML",
      categoryBadge: "bg-teal-50 text-[#2ec4b6] border-teal-200",
      title: "Patient Risk Prediction Data Pipeline",
      image: "/images/healthcare-aiml.jpg",
      challenge:
        "Patient data was incomplete and inconsistent, so readmission and no-show models were unreliable.",
      solution:
        "Cleaned and standardized clinical data, built reusable features in a feature store, and created versioned training datasets with automated quality checks.",
      batchStreaming: "Batch Training + Real-Time Scoring",
      technologies: ["Spark", "Feast", "MLflow", "Airflow", "Snowflake"],
    },
    {
      category: "Business Intelligence",
      categoryBadge: "bg-sky-50 text-[#144773] border-sky-200",
      title: "Hospital Operations Analytics Warehouse",
      image: "/images/healthcare-bi.jpg",
      challenge:
        "Bed occupancy, wait time, and treatment reports were prepared manually and took days.",
      solution:
        "Central warehouse with department data marts, automated ETL pipelines, and governed metric definitions for trusted dashboards.",
      batchStreaming: "Hourly Batch + Near Real-Time Dashboards",
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
            1. HERO SECTION (Inspired by Image 3)
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
                Healthcare Software{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Development Company
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl font-sans text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
                Build HIPAA-compliant software that fits your clinical workflows. From EHR systems
                and telehealth platforms to AI-powered diagnostics, we develop healthcare solutions
                that simplify operations and improve patient outcomes.
              </p>
            </ScrollReveal>

            {/* Hero CTAs */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#2ec4b6]/25 hover:shadow-[#2ec4b6]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Consult Our Healthcare Experts</span>
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

            {/* Enterprise Credentials Strip (Matching Image 3) */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-stylized text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
                  350+ IT Experts
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1f6fb2]" />
                  750+ Enterprise Clients
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
                  CMMI Level 3 Certified
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1f6fb2]" />
                  ISO 9001:2015
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
            2. HEALTHCARE OVERVIEW / CAPABILITIES SECTION
           ========================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Comprehensive{" "}
                  <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                    Healthcare Solutions
                  </span>
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed font-normal">
                  End-to-end clinical data pipelines, regulatory compliance, and intelligent healthcare applications.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {[
                {
                  title: "EHR & Clinical Interoperability",
                  icon: Activity,
                  description:
                    "Unified HL7 and FHIR lakehouse pipelines integrating Epic, Cerner, legacy EHRs, lab instruments, and telehealth apps into real-time patient stores.",
                  tag: "FHIR & HL7 Ready",
                },
                {
                  title: "HIPAA & PHI Security Governance",
                  icon: Lock,
                  description:
                    "Automated de-identification, role-based column encryption, and continuous audit trail verification for 100% HIPAA and HITECH compliance.",
                  tag: "Zero-Trust Security",
                },
                {
                  title: "AI-Powered Diagnostics & Insights",
                  icon: Cpu,
                  description:
                    "High-speed feature stores, sub-second vital risk prediction, and clinical decision support engines embedded directly into doctor workflows.",
                  tag: "Predictive Intelligence",
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
            3. USE CASES SECTION (Matching Image 2 Box Layout)
           ========================================================= */}
        <section id="use-cases" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with Double Shade */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
                  Healthcare{" "}
                  <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                    Use Cases
                  </span>
                </h2>
                <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed font-normal">
                  Explore how our data engineering architectures solve mission-critical challenges across hospital systems, clinical applications, and healthcare analytics.
                </p>
              </div>
            </ScrollReveal>

            {/* Horizontal Box Layout (Image 2 style) */}
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

                      {/* Right: Challenge, Solution, Batch/Streaming, Tech */}
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
              Ready to Accelerate Your{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Healthcare Data Architecture?
              </span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect with our specialized clinical data engineers to review schemas, optimize HIPAA compliance, and deploy sub-second patient data pipelines.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenContact}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#2ec4b6]/25 transition-all cursor-pointer"
              >
                <span>Schedule a Healthcare Architecture Call</span>
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
