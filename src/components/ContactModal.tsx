"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceNeed: "Real-Time Streaming (Kafka/Flink)",
    dataVolume: "10TB - 100TB",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 overflow-hidden">
        {/* Subtle glow header */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-100/40 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name || "Partner"}!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your data platform consultation request has been received. One of our Principal Data
              Architects will review your requirements and reach out within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 transition-all shadow-md shadow-[#2ec4b6]/20 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-900">
                Talk to Our Data Experts
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Schedule a confidential architecture review tailored to your enterprise data stack.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Health or FinTech Inc."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Estimated Data Scale
                  </label>
                  <select
                    value={formData.dataVolume}
                    onChange={(e) => setFormData({ ...formData, dataVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                  >
                    <option>&lt; 10 TB</option>
                    <option>10 TB - 100 TB</option>
                    <option>100 TB - 1 PB</option>
                    <option>1 PB+ (Petabyte Scale)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Architecture Focus
                </label>
                <select
                  value={formData.serviceNeed}
                  onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                >
                  <option>Real-Time Streaming (Kafka / Flink / Kinesis)</option>
                  <option>Batch & Lakehouse Modernization (Spark / Databricks / Snowflake)</option>
                  <option>ETL / ELT Pipeline Optimization & dbt Modeling</option>
                  <option>Healthcare & HIPAA / FHIR Compliance Lakehouse</option>
                  <option>Financial Fraud & Sub-Second Anomaly Scoring</option>
                  <option>Autonomous Vehicle & Edge Telemetry Platform</option>
                  <option>End-to-End Enterprise Data Migration</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Project Details / Current Bottlenecks
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current stack, database bottlenecks, or upcoming migration goals..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900 placeholder-slate-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Strict NDA Protected</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 transition-all disabled:opacity-50 shadow-md shadow-[#2ec4b6]/20 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
