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
  BarChart3,
  Layers,
  Server,
  ShieldCheck,
  Clock,
  Clock3,
  Network,
  PieChart,
  Table,
  FolderGit2,
  Lock,
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function BusinessIntelligencePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const topics = [
    {
      title: "ETL / ELT Pipelines",
      description:
        "ETL means Extract, Transform, Load, while ELT loads data first and transforms it inside the warehouse. Data engineers build and schedule these pipelines to pull data from CRM, ERP, and finance systems. The data is cleaned, combined, and loaded into reporting layers automatically.",
      gradient: "from-[#144773] via-[#1f6fb2] to-[#2ec4b6]",
      icon: Workflow,
      items: [
        "Automated CRM, ERP & finance ingestion",
        "In-warehouse dbt transformations",
        "Robust error retries & SLA scheduling",
        "Dependency graph DAG management",
      ],
    },
    {
      title: "Data Warehouse & Lakehouse",
      description:
        "A data warehouse stores structured, organized data for reporting, while a data lake stores large amounts of raw data in any format. Data engineers set up and maintain these platforms, deciding how data is organized while managing cost, security, and performance.",
      gradient: "from-[#0f3556] via-[#185a91] to-[#1f6fb2]",
      icon: Database,
      items: [
        "Snowflake, BigQuery & Databricks lakes",
        "Columnar storage & partition pruning",
        "Cost optimization & auto-suspend warehouses",
        "Separation of compute and storage",
      ],
    },
    {
      title: "Data Modeling & Schemas",
      description:
        "Data modeling organizes data into tables that make analysis simple. Star and snowflake schemas use a central fact table, like sales, linked to dimension tables like product, customer, and date, so dashboards can slice data without complex queries.",
      gradient: "from-[#1f6fb2] via-[#249299] to-[#2ec4b6]",
      icon: BarChart3,
      items: [
        "Star & snowflake dimensional modeling",
        "Centralized fact & dimension tables",
        "Slowly Changing Dimensions (SCD Type 2)",
        "BI tool semantic layer optimization",
      ],
    },
    {
      title: "Data Quality & Governance",
      description:
        "Quality means the numbers are correct, and governance means clear rules on who owns the data, who can access it, and how it is defined. Automated tests catch null values, unexpected spikes, or schema changes, ensuring trustworthy metrics.",
      gradient: "from-[#114066] via-[#1f6fb2] to-[#26a69a]",
      icon: ShieldCheck,
      items: [
        "Automated data validation tests",
        "Anomaly detection & null threshold alerts",
        "Role-based column & row-level security",
        "End-to-end data catalog & lineage tracking",
      ],
    },
    {
      title: "Data Freshness & Streaming",
      description:
        "Freshness is how up to date the data in a report is. Batch updates run at set times, such as daily or hourly, while real-time updates run continuously. Data engineers choose the right method for each need and monitor delays so dashboards never show stale data.",
      gradient: "from-[#0a253d] via-[#165182] to-[#2ec4b6]",
      icon: Clock3,
      items: [
        "Sub-minute real-time streaming feeds",
        "Automated hourly & daily batch DAGs",
        "SLA monitoring & freshness telemetry",
        "Instant cache invalidation upon ingestion",
      ],
    },
    {
      title: "Semantic Layer & Data Marts",
      description:
        "A semantic layer gives business-friendly names and definitions to data, and a data mart is a smaller dataset built for one department. Data engineers prepare ready-to-use datasets for Sales, Finance, HR, or Marketing with unified metrics.",
      gradient: "from-[#185a91] via-[#1f6fb2] to-[#2ec4b6]",
      icon: Layers,
      items: [
        "Self-service department data marts",
        "Single source of truth metric definitions",
        "Accelerated pre-aggregated rollups",
        "Seamless Power BI & Tableau connectivity",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col selection:bg-teal-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <span className="hidden sm:inline-block text-slate-300">/</span>

            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Business Intelligence Data Engineering
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-sans font-bold text-white transition-all bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-md shadow-[#2ec4b6]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Consult a BI Data Engineer
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative pt-16 pb-14 bg-white border-b border-slate-200/80 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-bl from-teal-200/25 via-emerald-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-gradient-to-tr from-sky-200/20 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <ScrollReveal animation="fade-up" delay={50}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
                Turning Data into{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Meaningful Insights
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-base sm:text-lg font-sans text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                Data engineers build the foundation for business intelligence by collecting, organizing, and managing data,
                so teams can make faster, smarter, and data-driven decisions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 BI Cards Section - Equal Sized 3x2 Grid */}
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
                Business Intelligence{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Architecture
                </span>
              </h2>
            </ScrollReveal>

            {/* Architecture Diagram Image - Normal display without box framing */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="w-full flex justify-center">
                <img
                  src="/images/anu BI image.jpeg"
                  alt="Business Intelligence Data Engineering Architecture Blueprint - Turning Data into Meaningful Insights"
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
                Ready to Upgrade Your{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Business Intelligence Foundation?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-sm sm:text-base font-sans text-slate-600 max-w-2xl mx-auto leading-relaxed">
                From building high-speed analytical lakehouses and Kimball star schemas to automating metric reconciliation
                and sub-second executive reporting, our data engineers unlock the true value of your enterprise data.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-xl shadow-[#2ec4b6]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Schedule BI Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/ai-ml"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-sans font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-all"
                >
                  Explore AI / ML
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
