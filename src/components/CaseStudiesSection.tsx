"use client";

import Image from "next/image";
import {
  HeartPulse,
  TrendingUp,
  Car,
  ShoppingCart,
  CheckCircle,
  ExternalLink,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CaseStudiesSectionProps {
  onOpenContact: () => void;
}

export default function CaseStudiesSection({ onOpenContact }: CaseStudiesSectionProps) {
  const caseStudies = [
    {
      id: "cs-healthcare",
      industry: "Healthcare",
      title: "Real-Time Patient & Clinical Data Processing",
      image: "/images/healthcare.jpg",
      icon: HeartPulse,
      challenge: "High-latency patient data ingest across hospital wards and fragmented legacy EHR silos.",
      solution: "Unified FHIR lakehouse with sub-second Kafka streaming and automated HIPAA masking.",
      processingType: "Hybrid (Real-Time Streams + Nightly Batch)",
      technologies: "Kafka, Spark, Snowflake, dbt, Airflow",
      impact: "85% faster emergency notifications and 99.98% EHR reconciliation accuracy.",
      color: "border-cyan-500/40 text-cyan-400",
    },
    {
      id: "cs-finance",
      industry: "Finance",
      title: "Real-Time Transaction & Fraud Data Pipeline",
      image: "/images/finance.jpg",
      icon: TrendingUp,
      challenge: "Detect fraud and score transactions in sub-second real-time across 250M daily events.",
      solution: "Streaming pipeline with Apache Flink stateful scoring and Redis ML feature store.",
      processingType: "Streaming + Micro-Batching",
      technologies: "Kafka, Flink, BigQuery, Airflow, dbt, Redis",
      impact: "Sub-12ms detection latency and $9.8M in annual fraud exposure eliminated.",
      color: "border-emerald-500/40 text-emerald-400",
    },
    {
      id: "cs-vehicles",
      industry: "Autonomous Vehicles",
      title: "Vehicle Telemetry & Sensor Data Platform",
      image: "/images/autonomous-vehicles.jpg",
      icon: Car,
      challenge: "Ingesting 40TB/day of high-velocity LiDAR, camera, and CAN-bus telemetry data without packet drop.",
      solution: "Scalable streaming + batch architecture with edge compression and Databricks Delta Lake.",
      processingType: "Streaming Edge-to-Cloud + Batch Analytics",
      technologies: "Kafka, Spark, Databricks, AWS S3, Terraform",
      impact: "10x ingest throughput, zero dropped frames, and 60% compute infrastructure cost savings.",
      color: "border-sky-500/40 text-sky-400",
    },
    {
      id: "cs-retail",
      industry: "E-Commerce & Retail",
      title: "Customer, Inventory & Transaction Platform",
      image: "/images/ecommerce.jpg",
      icon: ShoppingCart,
      challenge: "Fragmented stock levels across 500+ brick-and-mortar stores and multi-region e-commerce carts.",
      solution: "Modern lakehouse with real-time CDC (Debezium) and reverse ETL into operational stores.",
      processingType: "Real-Time CDC + Hourly Batch Consolidation",
      technologies: "Snowflake, Kafka, dbt, Airflow, Azure Synapse",
      impact: "24% reduction in stockouts and +18% lift in customer personalization conversion.",
      color: "border-violet-500/40 text-violet-400",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
              Real-World Solutions.{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Tangible Impact.
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed">
              Explore how we solve complex data challenges across industries with scalable,
              secure, and intelligent data platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Case Study Cards with Scroll Reveal and Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <ScrollReveal key={cs.id} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                <div
                  className="bg-white border border-slate-200/90 hover:border-[#2ec4b6] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ec4b6]/15 shadow-xs card-hover-effect shimmer-card h-full flex-1"
                >
                  {/* Image & Icon Header */}
                  <div className="relative h-44 w-full bg-slate-950 shrink-0">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover object-center filter brightness-95 contrast-105 group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    {/* Category icon */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/95 border border-slate-200 flex items-center justify-center text-[#1f6fb2] backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-display font-bold text-white tracking-wide drop-shadow-sm">
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-base font-display font-bold text-slate-900 leading-snug group-hover:text-[#1f6fb2] transition-colors min-h-[48px] flex items-start">
                        {cs.title}
                      </h3>

                      {/* Breakdown Rows */}
                      <div className="mt-4 space-y-2.5 text-xs">
                        <div>
                          <span className="text-slate-400 font-stylized font-semibold uppercase text-[10px] tracking-wider block">
                            Challenge
                          </span>
                          <p className="text-slate-600 mt-0.5 font-sans min-h-[42px]">{cs.challenge}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[#1f6fb2] font-stylized font-semibold uppercase text-[10px] tracking-wider block">
                            Solution
                          </span>
                          <p className="text-slate-700 mt-0.5 font-sans font-medium min-h-[42px]">{cs.solution}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-slate-400 font-stylized font-semibold uppercase text-[10px] tracking-wider block">
                            Batch / Streaming
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-700 mt-0.5 font-sans">
                            <Zap className="w-3.5 h-3.5 text-[#2ec4b6] shrink-0" />
                            <span>{cs.processingType}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-slate-400 font-stylized font-semibold uppercase text-[10px] tracking-wider block">
                            Technologies
                          </span>
                          <p className="text-[#1f6fb2] font-stylized text-[11px] mt-0.5 font-medium min-h-[34px]">{cs.technologies}</p>
                        </div>
                      </div>
                    </div>

                    {/* Impact Tag - pinned to bottom */}
                    <div className="pt-3 border-t border-teal-100 bg-teal-50/70 -mx-5 -mb-5 p-4 rounded-b-3xl mt-auto min-h-[64px] flex flex-col justify-center">
                      <span className="text-[#1f6fb2] font-stylized font-semibold uppercase text-[10px] tracking-wider block flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2ec4b6]" />
                        Measurable Impact
                      </span>
                      <p className="text-xs font-sans font-semibold text-slate-800 mt-1">
                        {cs.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-14 text-center">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#2ec4b6] hover:text-[#1f6fb2] hover:shadow-md transition-all shadow-xs cursor-pointer"
            >
              <span>Need a custom architecture for your organization?</span>
              <span className="text-[#1f6fb2] font-bold underline">Talk to our Architects →</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
