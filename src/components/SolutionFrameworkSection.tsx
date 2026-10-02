"use client";

import { useState } from "react";
import {
  Database,
  ArrowRight,
  Cpu,
  Layers,
  Server,
  BarChart3,
  Lightbulb,
  Zap,
  Radio,
  FileCode,
  ShieldCheck,
  Activity,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

export default function SolutionFrameworkSection() {
  const [activeMode, setActiveMode] = useState<"batch" | "streaming" | "hybrid">("hybrid");
  const [selectedNode, setSelectedNode] = useState<number>(2); // Default to processing split

  const steps = [
    {
      id: 0,
      title: "Data Sources",
      sub: "Apps, DBs, APIs, Files, IoT Sensors",
      icon: Database,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Capturing enterprise transactions, log streams, SaaS cloud APIs, and raw telemetry.",
        components: ["PostgreSQL / MySQL / Oracle CDC", "Mobile & Web App Events", "Third-party SaaS (Salesforce, Stripe)", "Industrial IoT & CAN-bus Sensors"],
        throughput: "Up to 500,000 events/sec ingest capability",
      },
    },
    {
      id: 1,
      title: "Data Ingestion",
      sub: "Connectors & Streaming Gateways",
      icon: RefreshCw,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Zero-data-loss ingestion using distributed message queues and change data capture (CDC).",
        components: ["Debezium Change Data Capture", "Apache Kafka Ingress Topics", "AWS Kinesis / GCP Pub/Sub", "Airbyte & Fivetran Connectors"],
        throughput: "Guaranteed exactly-once semantics & partitioned sharding",
      },
    },
    {
      id: 2,
      title: "Processing Split",
      sub: activeMode === "batch" ? "Batch Engine" : activeMode === "streaming" ? "Streaming Engine" : "Batch + Real-Time Engine",
      icon: activeMode === "batch" ? Layers : activeMode === "streaming" ? Zap : Cpu,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description:
          activeMode === "batch"
            ? "High-throughput distributed compute for large-scale historical aggregations and financial reconciliations."
            : activeMode === "streaming"
            ? "Sub-15ms low-latency stateful stream processing for real-time anomaly detection and reactive events."
            : "Lambda & Kappa hybrid architecture orchestrating synchronized batch views with real-time stream feeds.",
        components:
          activeMode === "batch"
            ? ["Apache Spark 3.5 Clusters", "Databricks Photon Engine", "Scheduled Airflow DAGs"]
            : activeMode === "streaming"
            ? ["Apache Flink Stateful Stream", "Kafka Streams Topology", "Redis In-Memory Feature Cache"]
            : ["Apache Spark (Batch SLA)", "Apache Flink (Streaming SLA)", "Databricks Delta Live Tables"],
        throughput: activeMode === "batch" ? "100TB+ daily batch workloads" : "< 15ms sub-second processing latency",
      },
    },
    {
      id: 3,
      title: "Transformation",
      sub: "Cleanse, Enrich, dbt Modeling",
      icon: FileCode,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Transforming raw Bronze data into Silver validated datasets and Gold curated analytics marts.",
        components: ["dbt Core / dbt Cloud", "Data Vault 2.0 & Dimensional Star Schemas", "Great Expectations Auto Testing", "PySpark UDF & Vectorized Transforms"],
        throughput: "Automated schema enforcement & testing CI/CD",
      },
    },
    {
      id: 4,
      title: "Storage",
      sub: "Data Lake / Lakehouse / Warehouse",
      icon: Server,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Open table formats (Delta Lake, Apache Iceberg) unified on scalable cloud object storage.",
        components: ["Snowflake Multi-Cluster Warehouses", "Google BigQuery Storage API", "Databricks Unity Lakehouse", "AWS S3 / Azure ADLS Gen2 with Iceberg"],
        throughput: "ACID transactions with zero data lock-in",
      },
    },
    {
      id: 5,
      title: "Analytics & AI",
      sub: "Reports, Dashboards, ML Models",
      icon: BarChart3,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Feeding business intelligence tools, executive dashboards, predictive AI models, and vector search.",
        components: ["Power BI & Tableau Semantic Layers", "MLflow Machine Learning Pipelines", "Milvus / Pinecone Vector Store", "Operational Reverse ETL (Census/Hightouch)"],
        throughput: "Sub-second query responses for 10,000+ concurrent BI users",
      },
    },
    {
      id: 6,
      title: "Business Insights",
      sub: "Better Decisions, Real-Time ROI",
      icon: Lightbulb,
      highlightModes: ["batch", "streaming", "hybrid"],
      details: {
        description: "Delivering tangible business outcomes, proactive fraud blocking, and automated customer personalization.",
        components: ["Sub-second Fraud Prevention", "Dynamic Pricing & Inventory Optimization", "Executive Financial Cockpits", "Customer 360 Activation"],
        throughput: "Measurable revenue uplift & operational cost reduction",
      },
    },
  ];

  return (
    <section id="framework" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-200/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900">
              From Data Sources to{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Business Insights
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed">
              A unified data engineering framework that supports both batch and real-time processing
              for complete visibility, high performance, and absolute control.
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 border border-slate-300/70 rounded-2xl shrink-0 self-start lg:self-end">
            <button
              onClick={() => setActiveMode("batch")}
              className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all flex items-center gap-1.5 ${
                activeMode === "batch"
                  ? "bg-[#1f6fb2] text-white shadow-md shadow-[#1f6fb2]/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Batch Processing
            </button>
            <button
              onClick={() => setActiveMode("streaming")}
              className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all flex items-center gap-1.5 ${
                activeMode === "streaming"
                  ? "bg-[#2ec4b6] text-white shadow-md shadow-[#2ec4b6]/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Streaming Processing
            </button>
            <button
              onClick={() => setActiveMode("hybrid")}
              className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center gap-1.5 ${
                activeMode === "hybrid"
                  ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-md shadow-[#2ec4b6]/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Hybrid (Both)
            </button>
          </div>
        </div>

        {/* Pipeline Stage Flow - Horizontal Chain on Desktop */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] -translate-y-1/2 z-0 opacity-50 rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = selectedNode === step.id;
              const isSpecial = step.id === 2;

              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedNode(step.id)}
                  className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 flex flex-col items-center text-center border relative ${
                    isSelected
                      ? "bg-white border-2 border-[#2ec4b6] shadow-xl shadow-[#2ec4b6]/20 scale-105 z-20"
                      : isSpecial
                      ? "bg-white/95 border-[#2ec4b6]/40 hover:border-[#2ec4b6] shadow-xs"
                      : "bg-white/95 border-slate-200 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {/* Step Number Tag */}
                  <span className="text-[10px] font-stylized text-slate-400 uppercase tracking-wider mb-2">
                    Phase 0{idx + 1}
                  </span>

                  {/* Icon Node */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                      isSelected
                        ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-md shadow-[#2ec4b6]/30"
                        : isSpecial
                        ? "bg-teal-50 text-[#1f6fb2] border border-[#2ec4b6]/30"
                        : "bg-slate-100 text-slate-600 border border-slate-200/80"
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  <h3
                    className={`text-xs font-display font-bold transition-colors ${
                      isSelected ? "text-[#1f6fb2]" : "text-slate-900 group-hover:text-[#1f6fb2]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-sans text-slate-500 mt-1 line-clamp-2 leading-tight">
                    {step.sub}
                  </p>

                  {/* Click to inspect label */}
                  <span className="mt-3 text-[10px] font-sans text-[#1f6fb2] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {isSelected ? "Active" : "Inspect →"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Deep-Dive Card */}
        {selectedNode !== null && (
          <div className="bg-white border border-teal-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-teal-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-teal-700 text-xs font-mono font-semibold uppercase">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                  Active Stage Deep-Dive
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  {steps[selectedNode].title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {steps[selectedNode].details.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>{steps[selectedNode].details.throughput}</span>
                </div>
              </div>

              <div className="lg:col-span-8 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Production Technologies & Implementations:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[selectedNode].details.components.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 hover:border-teal-400 hover:text-blue-700 transition-colors shadow-xs"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Foundation & Governance Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-200/80">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-1">
              Data Dimensions
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">The 4 V's Engine</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engineered to handle extreme <strong className="text-slate-900">Velocity</strong> (sub-second streaming), diverse <strong className="text-slate-900">Variety</strong> (structured, JSON, Avro, Protobuf, LiDAR), uncompromising <strong className="text-slate-900">Veracity</strong> (data testing), and maximum business <strong className="text-slate-900">Value</strong>.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div className="text-xs font-mono text-teal-600 font-bold uppercase mb-1">
              Infrastructure
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Cloud-Agnostic Topologies</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deployable across AWS, Microsoft Azure, Google Cloud (GCP), or hybrid on-prem. Built with Terraform, Kubernetes operators, and serverless compute primitives for auto-scaling efficiency.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <div className="text-xs font-mono text-sky-600 font-bold uppercase mb-1">
              Observability
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Built-in Intelligence</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              24/7 telemetry monitoring via Prometheus, Grafana, OpenTelemetry, and Slack incident routing with automated pipeline rollbacks, audit logs, and lineage tracing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
