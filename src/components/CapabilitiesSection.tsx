"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Database,
  Zap,
  GitBranch,
  Repeat,
  Share2,
  Workflow,
  ShieldCheck,
  Server,
  Eye,
  Check,
  Layers,
  BarChart3,
  Cpu,
  ArrowRight,
} from "lucide-react";
import ContactModal from "@/components/ContactModal";

import ScrollReveal from "./ScrollReveal";

export default function CapabilitiesSection() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("processing");

  const categories = [
    { id: "processing", label: "Processing & Engines" },
    { id: "pipelines", label: "Pipelines & Integration" },
    { id: "architecture", label: "Lakehouse Architecture" },
    { id: "governance", label: "Governance & Quality" },
  ];

  const capabilities = [
    {
      number: "01",
      id: "batch",
      title: "Batch Data Processing",
      category: "processing",
      categoryLabel: "Processing & Engines",
      icon: Database,
      desc: "Architecting resilient distributed batch jobs using Apache Spark, Databricks, and AWS EMR for multi-terabyte aggregations, financial closes, and historical data warehousing.",
      deliverables: [
        "Distributed Spark jobs & cluster optimization",
        "Delta Lake & Apache Iceberg ACID tables",
        "Automated retry SLAs & error handling",
      ],
      tech: ["Apache Spark", "Databricks", "Delta Lake"],
      link: "/application-development",
    },
    {
      number: "02",
      id: "streaming",
      title: "Stream Processing & Kafka",
      category: "processing",
      categoryLabel: "Processing & Engines",
      icon: Zap,
      desc: "Sub-second event-driven pipelines utilizing Apache Kafka, Apache Flink, and AWS Kinesis to process millions of transactions, IoT telemetry, and user clickstreams in real-time.",
      deliverables: [
        "Sub-15ms event routing & ingestion",
        "Stateful windowing & temporal joins",
        "Zero-loss multi-region replication",
      ],
      tech: ["Apache Kafka", "Apache Flink", "AWS Kinesis"],
      link: "/application-development",
    },
    {
      number: "03",
      id: "pipelines",
      title: "Data Pipeline Engineering",
      category: "pipelines",
      categoryLabel: "Pipelines & Integration",
      icon: GitBranch,
      desc: "Robust, fault-tolerant orchestration workflows designed with Apache Airflow, Dagster, and Prefect with programmatic CI/CD testing and dependency management.",
      deliverables: [
        "Modular DAG workflows & scheduling",
        "Dynamic backfilling & state recovery",
        "GitOps deployment with automated tests",
      ],
      tech: ["Apache Airflow", "Dagster", "Prefect"],
      link: "/business-intelligence",
    },
    {
      number: "04",
      id: "etl-elt",
      title: "ETL & ELT Implementation",
      category: "pipelines",
      categoryLabel: "Pipelines & Integration",
      icon: Repeat,
      desc: "Transitioning cumbersome legacy ETL to modern scalable ELT architectures using dbt, Snowflake, and BigQuery, pushing computation to elastic cloud data warehouses.",
      deliverables: [
        "Modular SQL transformations with dbt",
        "Incremental models & partition pruning",
        "Automated documentation & tests",
      ],
      tech: ["dbt Core", "Snowflake", "BigQuery"],
      link: "/business-intelligence",
    },
    {
      number: "05",
      id: "integration",
      title: "Data Integration & CDC",
      category: "pipelines",
      categoryLabel: "Pipelines & Integration",
      icon: Share2,
      desc: "Seamless synchronization between operational databases (PostgreSQL, Oracle, SQL Server), SaaS applications, and analytical lakes via Debezium and Change Data Capture.",
      deliverables: [
        "Zero-downtime Change Data Capture (CDC)",
        "REST & GraphQL API connectors",
        "Schema drift resilience & alerts",
      ],
      tech: ["Debezium", "Kafka Connect", "Airbyte"],
      link: "/application-development",
    },
    {
      number: "06",
      id: "transformation",
      title: "Data Modeling & Transformation",
      category: "architecture",
      categoryLabel: "Lakehouse Architecture",
      icon: Workflow,
      desc: "Transforming raw, messy logs into curated, dimensionally modeled business data marts using Kimball star schemas and Data Vault 2.0 for simple, fast analytics.",
      deliverables: [
        "Kimball star & snowflake dimensional schemas",
        "Data Vault 2.0 hub, link & satellite models",
        "Slowly Changing Dimensions (SCD Type 2)",
      ],
      tech: ["Kimball Dimensional", "Data Vault", "dbt"],
      link: "/business-intelligence",
    },
    {
      number: "07",
      id: "quality",
      title: "Data Quality & Validation",
      category: "governance",
      categoryLabel: "Governance & Quality",
      icon: ShieldCheck,
      desc: "Continuous data testing, statistical profiling, and anomaly alert circuit breakers using Great Expectations, Soda, and automated testing frameworks.",
      deliverables: [
        "Automated schema tests & boundary checks",
        "Null and distribution anomaly alerts",
        "Pre-ingestion circuit breakers",
      ],
      tech: ["Great Expectations", "Soda Core", "Monte Carlo"],
      link: "/ai-ml",
    },
    {
      number: "08",
      id: "warehousing",
      title: "Data Warehousing & Lakehouse",
      category: "architecture",
      categoryLabel: "Lakehouse Architecture",
      icon: Server,
      desc: "End-to-end lakehouse implementation combining the flexibility and cost-efficiency of object storage with the ACID transactional speed of cloud data warehouses.",
      deliverables: [
        "Medallion architecture (Bronze, Silver, Gold)",
        "Multi-cluster warehouse auto-scaling",
        "Partition optimization & micro-partitioning",
      ],
      tech: ["Snowflake", "Databricks", "Amazon S3"],
      link: "/business-intelligence",
    },
    {
      number: "09",
      id: "governance",
      title: "Data Governance & Observability",
      category: "governance",
      categoryLabel: "Governance & Quality",
      icon: Eye,
      desc: "Complete enterprise cataloging, sensitive data masking (PII, HIPAA, GDPR), automated column-level lineage tracking, and enterprise role-based access control.",
      deliverables: [
        "End-to-end column-level data lineage",
        "Role-based access control (RBAC)",
        "Automated PII detection & masking",
      ],
      tech: ["Collibra", "Apache Atlas", "OpenLineage"],
      link: "/business-intelligence",
    },
    {
      number: "10",
      id: "distributed",
      title: "Distributed Computing Frameworks",
      category: "processing",
      categoryLabel: "Processing & Engines",
      icon: Cpu,
      desc: "Deploying high-performance distributed computing clusters that scale horizontally across worker nodes with tuned memory allocation and shuffle optimization.",
      deliverables: [
        "Horizontal autoscaling cluster configuration",
        "Shuffle stage & partition skew optimization",
        "Fault-tolerant worker node orchestration",
      ],
      tech: ["Apache Spark", "Ray", "Kubernetes"],
      link: "/ai-ml",
    },
    {
      number: "11",
      id: "storage",
      title: "Cloud Storage & Object Systems",
      category: "architecture",
      categoryLabel: "Lakehouse Architecture",
      icon: Layers,
      desc: "Building scalable cloud object storage foundations for storing raw, semi-structured, and processed data with intelligent lifecycle policies and encryption.",
      deliverables: [
        "Intelligent cloud storage tiering & archival",
        "Multi-region data replication & redundancy",
        "Parquet & Avro compression strategies",
      ],
      tech: ["Amazon S3", "Google Cloud Storage", "Azure Blob"],
      link: "/application-development",
    },
    {
      number: "12",
      id: "analytics",
      title: "Analytics & BI Semantic Layers",
      category: "governance",
      categoryLabel: "Governance & Quality",
      icon: BarChart3,
      desc: "Bridging the gap between raw data warehouses and business stakeholders with unified semantic layers, standardized KPIs, and accelerated pre-aggregations.",
      deliverables: [
        "Single-source-of-truth KPI definitions",
        "Pre-aggregated summary tables & views",
        "Sub-2-second dashboard query performance",
      ],
      tech: ["Cube.js", "dbt Semantic Layer", "Power BI"],
      link: "/business-intelligence",
    },
  ];

  // Infilabs / Pibi Tech enterprise practice bench
  const practiceScope = [
    {
      title: "Platform & Architecture",
      icon: Layers,
      items: [
        "Data warehouse design & modernization",
        "Data lake & lakehouse implementation (Medallion)",
        "Dimensional & Data Vault modeling",
        "Data mesh & domain ownership models",
        "Master data management (MDM)",
        "Cloud data platform migration (AWS/Azure/GCP)",
      ],
    },
    {
      title: "Pipelines & Integration",
      icon: GitBranch,
      items: [
        "ETL & ELT pipeline engineering",
        "Change data capture (CDC via Debezium)",
        "Real-time & streaming ingestion",
        "Batch orchestration & scheduling (Airflow/Dagster)",
        "API & SaaS connector development",
        "Reverse ETL & operational activation",
      ],
    },
    {
      title: "Big Data & Processing",
      icon: Cpu,
      items: [
        "Apache Spark engineering & tuning",
        "Databricks platform delivery & Unity Catalog",
        "Snowflake implementation & performance tuning",
        "Apache Kafka & event streaming",
        "dbt transformation frameworks",
        "Delta Lake & Apache Iceberg storage",
      ],
    },
    {
      title: "Analytics & Visualisation",
      icon: BarChart3,
      items: [
        "Power BI development & governance",
        "Tableau dashboards & server administration",
        "Real-time analytics & operational dashboards",
        "Self-service analytics enablement",
        "Embedded analytics for SaaS products",
        "Semantic & metrics layer design (Cube/dbt)",
      ],
    },
  ];

  const filteredCapabilities = capabilities.filter(
    (cap) => cap.category === activeCategory
  );

  return (
    <section id="capabilities" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              End-to-End{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Data Engineering
              </span>{" "}
              for the Modern Enterprise
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              We design and build robust data platforms that are secure, scalable, and tailored to your exact business needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Buttons (Only category buttons, NO All Capabilities) */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer shadow-xs ${
                    isActive
                      ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-md shadow-[#2ec4b6]/25 scale-102"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Expansive Clean 3-Column Enterprise Cards Grid with hover & scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} animation="fade-up" delay={80 * (idx + 1)} className="h-full flex flex-col flex-1">
                <div
                  className="group bg-white rounded-3xl border border-slate-200/90 hover:border-[#2ec4b6] p-7 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ec4b6]/15 flex flex-col justify-between shadow-xs relative overflow-hidden h-full flex-1 card-hover-effect shimmer-card"
                >
                  {/* Soft ambient corner glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-teal-100/40 via-sky-50/25 to-transparent rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />

                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#2ec4b6]/0 group-hover:via-[#2ec4b6] to-transparent transition-all duration-500" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Top Bar with Centered Pastel Icon */}
                    <div className="flex items-center justify-center mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-[#2ec4b6]/30 flex items-center justify-center text-[#1f6fb2] group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-2xs group-hover:bg-[#1f6fb2] group-hover:text-white">
                        <Icon className="w-6 h-6 transition-colors" />
                      </div>
                    </div>

                    {/* Title with uniform min-height */}
                    <h3 className="text-xl sm:text-[22px] font-display font-bold text-slate-900 group-hover:text-[#1f6fb2] transition-colors tracking-tight mb-2.5 min-h-[58px] flex items-start">
                      {item.title}
                    </h3>

                    {/* Description with uniform min-height */}
                    <p className="text-sm font-sans text-slate-600 leading-relaxed font-normal mb-5 min-h-[80px] group-hover:text-slate-700 transition-colors">
                      {item.desc}
                    </p>

                    {/* Deliverables Checklist with uniform min-height */}
                    <div className="pt-4 border-t border-slate-100 space-y-2 mb-4 min-h-[96px] flex flex-col justify-start">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs font-sans text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#2ec4b6] shrink-0 stroke-[2.5]" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Tech Stack Badges - pinned to bottom with uniform height */}
                  <div className="relative z-10 mt-auto pt-3 border-t border-slate-100/60 min-h-[58px] flex flex-wrap items-start content-start gap-1.5">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-blue-50/70 border border-[#1f6fb2]/20 text-[#1f6fb2] group-hover:border-[#2ec4b6]/40 group-hover:bg-teal-50/60 rounded-md text-[11px] font-stylized font-semibold transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Practice Scope Bench Showcase */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                The Full Scope of Our{" "}
                <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                  Data Practice
                </span>
              </h3>
              <p className="text-sm font-sans text-slate-600 mt-2.5 font-normal">
                Engagements typically draw on a focused subset, providing you direct access to our complete enterprise bench.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {practiceScope.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={100 * (idx + 1)} className="h-full flex flex-col flex-1">
                  <div
                    className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 hover:border-[#2ec4b6] hover:bg-white hover:shadow-xl hover:shadow-[#2ec4b6]/10 transition-all duration-300 card-hover-effect h-full flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-110 transition-transform">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">{pillar.title}</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {pillar.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
