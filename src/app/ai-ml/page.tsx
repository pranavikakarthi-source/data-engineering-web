"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Workflow,
  Zap,
  CheckCircle2,
  Check,
  ArrowRight,
  BrainCircuit,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Cpu,
  Gauge,
  Activity,
  XCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function AIMLPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const topics = [
    {
      title: "Data Collection & Ingestion",
      description:
        "ML models learn from data, so the first step is gathering it from every useful source. Data engineers build pipelines that pull data from databases, APIs, files, sensors, and apps into one place, in batch or real time.",
      gradient: "from-[#144773] via-[#1f6fb2] to-[#2ec4b6]",
      icon: Database,
      items: [
        "Multi-source batch & streaming pipelines",
        "Automated schema extraction & validation",
        "Raw data lake & bronze table ingestion",
        "Real-time sensor & clickstream capture",
      ],
    },
    {
      title: "Data Cleaning & Preparation",
      description:
        "Raw data is messy, with duplicates, missing values, wrong formats, and outliers. Data engineers remove duplicates, handle missing values, fix formats, and standardize units. Bad records are filtered out before training begins.",
      gradient: "from-[#0f3556] via-[#185a91] to-[#1f6fb2]",
      icon: Layers,
      items: [
        "Deduplication & outlier anomaly detection",
        "Missing value imputation strategies",
        "Unit standardization & type normalization",
        "Automated data sanitization rules",
      ],
    },
    {
      title: "Feature Engineering & Stores",
      description:
        "Features are the useful inputs a model learns from. Data engineers turn raw data into features and keep them in a shared feature store. This makes sure training and live prediction use exactly the same definitions.",
      gradient: "from-[#1f6fb2] via-[#249299] to-[#2ec4b6]",
      icon: Cpu,
      items: [
        "Shared online & offline feature stores",
        "Real-time sliding window aggregations",
        "Zero train-serve skew guarantee",
        "Low-latency feature lookup APIs",
      ],
    },
    {
      title: "Training Datasets & Versioning",
      description:
        "A training dataset is the organized, labeled data a model learns from, plus separate data to test it. Data engineers build these datasets with proper labels and split them into train, validation, and test sets. They also keep versions so results can be reproduced.",
      gradient: "from-[#114066] via-[#1f6fb2] to-[#26a69a]",
      icon: Sparkles,
      items: [
        "Train, validation, & test data splitting",
        "Strict dataset lineage & reproducibility",
        "Class balancing & stratification",
        "Automated snapshotting with DVC & Git",
      ],
    },
    {
      title: "Model Deployment Pipelines",
      description:
        "After a model is trained, it must run in production and keep receiving fresh data. Data engineers automate this data flow, schedule retraining, and monitor data drift so the model continues performing with high accuracy.",
      gradient: "from-[#0a253d] via-[#165182] to-[#2ec4b6]",
      icon: BrainCircuit,
      items: [
        "High-concurrency low-latency inference",
        "Batch offline scoring pipelines",
        "Real-time payload transformation",
        "Fallback mechanisms & SLA monitoring",
      ],
    },
    {
      title: "Data Quality & Drift Monitoring",
      description:
        "A model can only be as good as the data it learns from. Data engineers add automated checks for missing values, schema changes, and statistical drift. Real-time alerts notify teams before model accuracy drops.",
      gradient: "from-[#185a91] via-[#1f6fb2] to-[#2ec4b6]",
      icon: Gauge,
      items: [
        "Automated circuit breakers & schema tests",
        "Statistical data & concept drift tracking",
        "Real-time alerts on data degradation",
        "Automated retraining pipeline triggers",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-purple-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <span className="hidden sm:inline-block text-slate-300">/</span>

            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 uppercase tracking-wider">
              AI / ML Data Engineering
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-sans font-bold text-white transition-all bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-md shadow-[#2ec4b6]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Consult an AI/ML Engineer
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative pt-16 pb-14 bg-white border-b border-slate-200/80 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-bl from-teal-200/25 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-gradient-to-tr from-teal-200/20 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <ScrollReveal animation="fade-up" delay={50}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
                From Data to{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Intelligent Models
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-base sm:text-lg font-sans text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                Data engineers build the foundation for machine learning by collecting data, preparing it,
                and making sure it stays clean, consistent, and ready for models, at scale.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 AI/ML Cards Section - Equal Sized 3x2 Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {topics.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                  <div
                    className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full flex-1 group justify-between"
                  >
                    {/* Top Gradient Header */}
                    <div
                      className={`p-6 sm:p-7 bg-gradient-to-br ${topic.gradient} relative overflow-hidden rounded-t-3xl min-h-[140px] flex flex-col justify-between shrink-0`}
                    >
                      <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

                      <div className="flex justify-center mb-4">
                        <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-[22px] font-display font-bold text-white tracking-tight leading-snug min-h-[58px] flex items-center justify-center text-center">
                        {topic.title}
                      </h3>
                    </div>

                    {/* Bottom Body Section */}
                    <div className="p-6 sm:p-7 bg-white rounded-b-3xl flex-1 flex flex-col justify-between">
                      <p className="text-sm font-sans text-slate-600 leading-relaxed font-normal min-h-[145px] mb-6 flex items-start">
                        {topic.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 flex flex-col mt-auto min-h-[185px]">
                        {topic.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="py-2.5 flex items-center gap-2.5 border-b border-slate-100 last:border-b-0 text-xs sm:text-[13px] font-sans font-medium text-slate-700 min-h-[42px]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#2ec4b6] shrink-0 stroke-[2.5]" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Section with the User Reference Architecture Image (Pure Image, no overlay buttons) */}
        <section className="py-16 bg-white border-t border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <ScrollReveal animation="fade-up" delay={50}>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight text-center">
                AI / ML{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Architecture
                </span>
              </h2>
            </ScrollReveal>

            {/* Architecture Diagram Image - Normal display without box framing */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="w-full flex justify-center">
                <img
                  src="/images/anu AI image.jpeg"
                  alt="AI/ML Data Engineering Architecture Blueprint - From Data to Intelligent Models"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg border border-slate-200/80"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom Consultation Banner */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal animation="fade-up" delay={50}>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Ready to Accelerate Your{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  AI & Machine Learning Data?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-sm sm:text-base font-sans text-slate-600 max-w-2xl mx-auto leading-relaxed">
                From building high-throughput ingestion pipelines and shared feature stores to orchestrating
                MLOps retraining workflows, our engineers build the bulletproof data foundation your models need.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-xl shadow-[#2ec4b6]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Schedule AI Data Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/application-development"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-sans font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-all"
                >
                  Application Development
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Consultation Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
