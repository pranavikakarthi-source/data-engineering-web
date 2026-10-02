"use client";

import { useState, useEffect, useRef } from "react";
import {
  Database,
  HardDrive,
  Cpu,
  Zap,
  Network,
  Server,
  FolderArchive,
  Workflow,
  Clock,
  Box,
  GitBranch,
  Code2,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TechnologiesSectionProps {
  onOpenContact?: () => void;
}

export default function TechnologiesSection({ onOpenContact }: TechnologiesSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("relational");
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);
  const listContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    {
      id: "relational",
      number: "01",
      name: "Relational Database",
      tag: "Transactional & ACID Compliance",
      icon: Database,
      description:
        "We know relational databases, how to design normalized schemas, how to write optimized SQL, and how to tune queries for performance and reliability. We build and maintain transactional and analytical relational systems that guarantee data integrity with foreign constraints, indexing, and ACID compliance so your structured data is consistent, fast, and trustworthy at scale.",
      tools: [
        { name: "PostgreSQL", type: "Enterprise RDBMS" },
        { name: "MySQL", type: "Clustered OLTP" },
        { name: "Amazon Aurora", type: "Cloud-Native HA" },
        { name: "Google Cloud SQL", type: "Managed DB" },
        { name: "Microsoft SQL Server", type: "Enterprise" },
        { name: "Oracle Database", type: "Mission-Critical" },
      ],
      deliverables: [
        "3NF Normalized Schema & Constraint Integrity",
        "Multi-AZ High Availability & Automated Failover",
        "PgBouncer Connection Pooling & Read Scalability",
        "Continuous Automated Backups & PITR Recovery",
      ],
    },
    {
      id: "nosql",
      number: "02",
      name: "NoSQL Database",
      tag: "High-Throughput & Flexible Schemas",
      icon: HardDrive,
      description:
        "We engineer high-throughput NoSQL backbones designed for semi-structured data, dynamic schemas, and horizontal scaling. Whether powering low-latency document stores, wide-column time series, or in-memory key-value caches, we design partitioning keys, replication factors, and secondary indexes that eliminate bottlenecks under extreme concurrency.",
      tools: [
        { name: "MongoDB", type: "Document Store" },
        { name: "Apache Cassandra", type: "Wide-Column Scale" },
        { name: "Amazon DynamoDB", type: "Serverless NoSQL" },
        { name: "Redis", type: "In-Memory Cache" },
        { name: "Couchbase", type: "Distributed Cache" },
        { name: "ScyllaDB", type: "C++ Low-Latency" },
      ],
      deliverables: [
        "Sub-Millisecond Document & Key-Value Retrieval",
        "Masterless Multi-Region Clustering & Sharding",
        "In-Memory Microsecond Caching with Redis Cluster",
        "Tunable Eventual & Strong Consistency Trade-offs",
      ],
    },
    {
      id: "batch",
      number: "03",
      name: "Batch Processing Engines",
      tag: "Distributed Petabyte Transformations",
      icon: Cpu,
      description:
        "We architect distributed batch processing engines capable of computing terabytes and petabytes of structured and unstructured information. We tune Spark memory allocation, DAG execution graphs, shuffle partitions, and vectorization engines so your scheduled nightly and hourly data transformations run with maximum speed and cost efficiency.",
      tools: [
        { name: "Apache Spark", type: "Distributed Compute" },
        { name: "Databricks", type: "Managed Lakehouse" },
        { name: "Apache Hadoop", type: "HDFS & MapReduce" },
        { name: "AWS EMR", type: "Elastic Clusters" },
        { name: "Google Cloud Dataproc", type: "Serverless Spark" },
        { name: "Trino / Presto", type: "Distributed SQL" },
      ],
      deliverables: [
        "Petabyte-Scale Vectorized Spark Computations",
        "Catalyst Optimizer & Adaptive Query Execution (AQE)",
        "Dynamic Spot Instance Auto-scaling & Cost Controls",
        "Stage-Level Fault Isolation & Automatic Rerun",
      ],
    },
    {
      id: "streaming",
      number: "04",
      name: "Stream Processing Engines",
      tag: "Sub-Second Event Backbones",
      icon: Zap,
      description:
        "We build sub-second real-time event streaming architectures that capture, process, and analyze high-velocity event streams as they occur. Using distributed stateful stream processors, we implement event-time windowing, exactly-once semantics, and watermarking to turn telemetry, transactions, and user clicks into actionable live intelligence.",
      tools: [
        { name: "Apache Kafka", type: "Event Streaming" },
        { name: "Apache Flink", type: "Stateful Streaming" },
        { name: "Amazon Kinesis", type: "Managed Real-Time" },
        { name: "Google Cloud Pub/Sub", type: "Global Messaging" },
        { name: "Spark Structured Streaming", type: "Continuous Engine" },
        { name: "Azure Event Hubs", type: "Enterprise Ingestion" },
      ],
      deliverables: [
        "Stateful Event-Time Sliding & Tumbling Windows",
        "Strict Exactly-Once Processing Semantics (EOS)",
        "Distributed Partition Balancing & Consumer Groups",
        "End-to-End Sub-Second Latency at Scale",
      ],
    },
    {
      id: "distributed",
      number: "05",
      name: "Distributed Computing Frameworks",
      tag: "Elastic Clusters & Arrow Memory",
      icon: Network,
      description:
        "We design and deploy elastic distributed computing clusters that scale horizontally across hundreds of compute nodes. We optimize cluster schedulers, node topologies, and memory hierarchies to run complex matrix multiplications, large-scale graph computations, and distributed data transformations with resilient fault isolation.",
      tools: [
        { name: "Ray Framework", type: "Distributed AI/ML" },
        { name: "Dask Distributed", type: "Python Compute" },
        { name: "Apache Arrow", type: "Columnar In-Memory" },
        { name: "Kubernetes Compute", type: "Cluster Fabric" },
        { name: "Apache Mesos", type: "Resource Isolation" },
        { name: "Celery Distributed", type: "Asynchronous Tasks" },
      ],
      deliverables: [
        "Zero-Copy Arrow Columnar Memory Serialization",
        "Distributed Python/C++ Task Scheduling & Shuffling",
        "Fault-Tolerant Actor Models with Auto-Healing Nodes",
        "Dynamic GPU / TPU Acceleration for AI Workloads",
      ],
    },
    {
      id: "warehouses",
      number: "06",
      name: "Data Warehouses & Lakehouses",
      tag: "Cloud-Native Analytical Repositories",
      icon: Server,
      description:
        "We architect enterprise-grade cloud analytical warehouses and modern open lakehouses that bridge raw unstructured storage with governed SQL business intelligence. Utilizing open table formats, column-pruning, and elastic concurrency scaling, we enable instant business querying across petabytes without data lock-in.",
      tools: [
        { name: "Snowflake", type: "Data Cloud" },
        { name: "Google BigQuery", type: "Serverless OLAP" },
        { name: "Amazon Redshift", type: "Cluster Warehouse" },
        { name: "Databricks Delta Lake", type: "ACID Lakehouse" },
        { name: "Apache Iceberg", type: "Open Table Format" },
        { name: "ClickHouse", type: "Ultra-Fast OLAP" },
      ],
      deliverables: [
        "Decoupled Compute & Storage with Zero Idle Costs",
        "Open Table Formats (Delta Lake & Apache Iceberg)",
        "ACID Compliance & Time-Travel Historical Queries",
        "Materialized Views & Partition Clustering Optimization",
      ],
    },
    {
      id: "storage",
      number: "07",
      name: "Object / File Storage Systems",
      tag: "Durable Data Lakes & Cold Storage",
      icon: FolderArchive,
      description:
        "We are experts in object and file storage systems where we design scalable, cost-effective foundations for storing raw and processed data. We design storage layouts, partitioning schemes, and lifecycle policies that balance performance and cost to deliver durable, virtually limitless storage for modern data lakes, pipelines, and audit logs.",
      tools: [
        { name: "Amazon S3", type: "Cloud Object Storage" },
        { name: "Google Cloud Storage", type: "Global Multi-Region" },
        { name: "Azure Data Lake Gen2", type: "Hierarchical ADLS" },
        { name: "MinIO", type: "High-Perf S3 Compatible" },
        { name: "Ceph Storage", type: "Unified Object & Block" },
        { name: "Apache Ozone", type: "Scalable Hadoop Store" },
      ],
      deliverables: [
        "99.999999999% (11 Nines) Durability & Geo-Replication",
        "Automated Hot, Warm, Cold & Glacier Lifecycle Tiering",
        "Hive-Partitioned Lake Layouts (Year/Month/Day/Source)",
        "Granular IAM Access Policies & KMS Encryption",
      ],
    },
    {
      id: "etl",
      number: "08",
      name: "ETL / ELT & Pipelines",
      tag: "Declarative SQL & CDC Sync",
      icon: Workflow,
      description:
        "We engineer production-grade extract, transform, and load workflows that reliably synchronize disparate enterprise silos. Leveraging modern ELT philosophies with in-warehouse transformations, modular SQL models, and automated schema drift handling, we ensure clean, test-verified datasets reach decision-makers automatically.",
      tools: [
        { name: "dbt (Data Build Tool)", type: "SQL Transformation" },
        { name: "Apache Airbyte", type: "Open Ingestion" },
        { name: "Fivetran", type: "Automated ELT" },
        { name: "Debezium", type: "Log-Based CDC" },
        { name: "Meltano", type: "Singer Pipelines" },
        { name: "AWS Glue", type: "Serverless ETL" },
      ],
      deliverables: [
        "Modular Version-Controlled SQL Transformations",
        "Log-Based Change Data Capture (CDC) Replication",
        "Automated Schema Drift Detection & Null Validation",
        "Pull Request Sandbox Environments via dbt-slim",
      ],
    },
    {
      id: "orchestration",
      number: "09",
      name: "Workflow Engines / Schedulers",
      tag: "Resilient DAG Orchestration",
      icon: Clock,
      description:
        "We orchestrate mission-critical data pipelines through programmatic Directed Acyclic Graph (DAG) workflow engines. We build resilient scheduling frameworks with automated retry logic, task-level dependencies, dynamic backfilling, and SLA monitoring that keep data pipelines flowing smoothly 24/7.",
      tools: [
        { name: "Apache Airflow", type: "Enterprise DAG Engine" },
        { name: "Dagster", type: "Data-Aware Orchestrator" },
        { name: "Prefect 2.0", type: "Modern Pythonic Flows" },
        { name: "Temporal", type: "Durable State Machine" },
        { name: "AWS Step Functions", type: "Serverless State" },
        { name: "Mage AI", type: "Hybrid Data Engine" },
      ],
      deliverables: [
        "Code-As-Configuration Pythonic DAG Orchestration",
        "Dynamic Backfilling with Idempotent Re-runs",
        "Real-Time Webhook Alerting on SLA Breaches",
        "Kubernetes & Celery Executor Worker Scaling",
      ],
    },
    {
      id: "containers",
      number: "10",
      name: "Containerization and Orchestration",
      tag: "Multi-Cloud Parity & Kubernetes",
      icon: Box,
      description:
        "We containerize data engineering applications and pipelines to guarantee absolute parity across development, staging, and multi-cloud production environments. We leverage enterprise Kubernetes clusters with automated pod autoscaling, health checks, and isolated namespace execution.",
      tools: [
        { name: "Docker", type: "Containerization" },
        { name: "Kubernetes (K8s)", type: "Cluster Orchestration" },
        { name: "Helm Charts", type: "Package Management" },
        { name: "Amazon EKS", type: "Managed K8s" },
        { name: "Google GKE", type: "Autopilot K8s" },
        { name: "Red Hat OpenShift", type: "Enterprise Container" },
      ],
      deliverables: [
        "Immutable Minimalistic Production Container Images",
        "Horizontal Pod Autoscaling (HPA) Based on Queue Depth",
        "Ephemeral Task Pods with Dedicated Resource Caps",
        "Declarative GitOps Cluster Delivery via ArgoCD",
      ],
    },
    {
      id: "cicd",
      number: "11",
      name: "Version Control & CI/CD Tools",
      tag: "Auditable GitOps & Reproducibility",
      icon: GitBranch,
      description:
        "We are masters of version control and CI/CD. We handle all code, configurations and pipeline definitions with full history and automated delivery. We follow disciplined branching, code review, and automated testing, so that data engineering work is reproducible, auditable, and safe to change, with reliable deployment and the ability to roll back confidently.",
      tools: [
        { name: "GitHub Actions", type: "Automated Workflows" },
        { name: "GitLab CI/CD", type: "DevOps Pipelines" },
        { name: "Terraform", type: "Infrastructure as Code" },
        { name: "ArgoCD", type: "GitOps Continuous Delivery" },
        { name: "SonarQube", type: "Static Code Analysis" },
        { name: "Pre-commit", type: "Quality & Lint Hooks" },
      ],
      deliverables: [
        "Automated End-to-End Pipeline Testing & Pytest Suites",
        "Declarative Infrastructure as Code (IaC) via Terraform",
        "Automated Semantic Versioning & Package Registry",
        "Zero-Downtime Blue/Green Pipeline Deployments",
      ],
    },
    {
      id: "languages",
      number: "12",
      name: "Programming & Query Languages",
      tag: "Vectorized SIMD & Typed Systems",
      icon: Code2,
      description:
        "We build high-performance data systems using modern programming and query languages optimized for analytical throughput and memory safety. From low-latency system-level algorithms to declarative analytical transformations, our code is strictly typed, profiled, and benchmarked for enterprise production.",
      tools: [
        { name: "Python (PySpark / Polars)", type: "Data Engineering" },
        { name: "SQL (ANSI / BigQuery / Snowflake)", type: "Relational Modeling" },
        { name: "Scala", type: "Spark Core & Akka" },
        { name: "Go (Golang)", type: "Low-Latency Microservices" },
        { name: "Rust", type: "Memory-Safe Systems" },
        { name: "Java Enterprise", type: "JVM Distributed Systems" },
      ],
      deliverables: [
        "Vectorized SIMD In-Memory Processing with Polars",
        "Strict Type Checking with Pydantic & Protocol Buffers",
        "Memory-Safe Concurrent I/O Pipelines",
        "Advanced Analytic Window Functions & Query Profiling",
      ],
    },
  ];


  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle sidebar categories every 2 seconds without affecting the main page scroll
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveCategoryId((prev) => {
        const currentIndex = categories.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, categories]);

  // Scroll ONLY the sidebar list container internally (never the browser window)
  useEffect(() => {
    if (listContainerRef.current && activeBtnRef.current) {
      const container = listContainerRef.current;
      const btn = activeBtnRef.current;

      const btnTop = btn.offsetTop;
      const btnBottom = btnTop + btn.offsetHeight;
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;

      if (btnTop < containerTop) {
        container.scrollTo({ top: btnTop, behavior: "smooth" });
      } else if (btnBottom > containerBottom) {
        container.scrollTo({ top: btnBottom - container.clientHeight, behavior: "smooth" });
      }
    }
  }, [activeCategoryId]);

  const activeCategory =
    categories.find((c) => c.id === activeCategoryId) || categories[0];

  return (
    <section id="technologies" className="py-20 lg:py-28 bg-[#fdfdfd] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Building Scalable &{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Reliable Data Foundations
              </span>
            </h2>

            <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              Our data engineering ecosystem combines modern processing frameworks, scalable cloud
              infrastructure, orchestration technologies, and governance-driven architectures to build
              reliable, analytics-ready, high-performance enterprise data environments.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Sidebar Layout (Light & Modern) */}
        <ScrollReveal animation="fade-up" delay={250}>
          <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[640px] card-hover-effect">
            {/* Left Column: Light Slate/Ice Sidebar (12 numbered items) */}
            <div className="lg:col-span-5 xl:col-span-5 bg-[#f3f7fb] text-slate-800 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Sidebar Top Title */}
              <div className="px-6 py-4 bg-[#e9f1f8] border-b border-slate-200/90 flex items-center justify-between">
                <span className="text-xs font-stylized font-bold tracking-widest text-[#1f6fb2] uppercase">
                  Architecture Domains
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#1f6fb2]/10 text-[#1f6fb2] border border-[#1f6fb2]/20">
                  12 Categories
                </span>
              </div>

              {/* Scrollable list of 12 categories with auto-cycle */}
              <div
                ref={listContainerRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative flex-1 max-h-[480px] lg:max-h-[620px] overflow-y-auto divide-y divide-slate-200/60 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
              >
                {categories.map((cat) => {
                  const isActive = cat.id === activeCategoryId;
                  return (
                    <button
                      key={cat.id}
                      ref={isActive ? activeBtnRef : null}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`w-full text-left px-5 sm:px-6 py-3.5 flex items-center justify-between transition-all duration-200 cursor-pointer group ${isActive
                        ? "bg-white text-slate-900 font-bold shadow-xs border-l-4 border-[#2ec4b6]"
                        : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                        }`}
                    >
                      <div className="flex items-center gap-3.5 pr-2 min-w-0">
                        <span
                          className={`font-mono text-xs sm:text-sm font-bold tracking-wider shrink-0 transition-colors ${isActive
                            ? "text-[#1f6fb2]"
                            : "text-slate-400 group-hover:text-[#1f6fb2]"
                            }`}
                        >
                          {cat.number}.
                        </span>
                        <span
                          className={`text-sm sm:text-[15px] truncate font-sans tracking-tight ${isActive ? "font-bold text-slate-900" : "font-normal text-slate-700"
                            }`}
                        >
                          {cat.name}
                        </span>
                      </div>

                      {/* Active Arrow Pill */}
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 ${isActive
                          ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-sm shadow-[#2ec4b6]/25 opacity-100 scale-100"
                          : "opacity-0 scale-90 group-hover:opacity-40 group-hover:scale-95 bg-slate-200 text-slate-600"
                          }`}
                      >
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Domain Detail Pane (Top badge & icon removed) */}
            <div className="lg:col-span-7 xl:col-span-7 bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  {activeCategory.name}
                </h3>

                {/* Enterprise Architecture Description */}
                <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed mt-4 font-normal">
                  {activeCategory.description}
                </p>

                {/* Production Technologies & Engines */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-stylized font-bold tracking-wider text-slate-400 uppercase mb-3.5">
                    Production Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {activeCategory.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-2xs hover:border-[#2ec4b6] hover:bg-white hover:text-[#1f6fb2] hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ec4b6] shrink-0" />
                        <span className="font-bold">{tool.name}</span>
                        <span className="text-[11px] text-slate-400 font-normal font-sans">
                          • {tool.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Enterprise CTA Banner (Light gradient) */}
              <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-[#f0f6fb] via-[#f4faf9] to-[#eef8f7] border border-[#2ec4b6]/35 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs shimmer-card">
                <div className="space-y-0.5 text-center sm:text-left">
                  <p className="text-sm font-display font-bold text-slate-900">
                    Need custom architecture for {activeCategory.name}?
                  </p>
                  <p className="text-xs font-sans text-slate-600">
                    Our certified data architects design, benchmark, and deploy enterprise clusters.
                  </p>
                </div>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-md shadow-[#2ec4b6]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
