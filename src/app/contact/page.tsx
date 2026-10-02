"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Building,
} from "lucide-react";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GlobalOfficesSection from "@/components/GlobalOfficesSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    industry: "",
    country: "India",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

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

          <div className="hidden sm:block">
            <a
              href="mailto:business@pibitech.com"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-md shadow-[#1f6fb2]/20 transition-all cursor-pointer"
            >
              <span>Email Us</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* =========================================================
            1. CONTACT FORM & INFO SECTION (Image 3 Style)
           ========================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading, Description & Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                <ScrollReveal animation="fade-up" delay={50}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.15] text-slate-900">
                    Let&apos;s Build Intelligent Systems for{" "}
                    <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                      Your Business
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                  <p className="text-base sm:text-lg font-sans text-slate-600 leading-relaxed font-normal">
                    Share your challenges with us. Our team will help you design, deploy, and scale AI
                    and Agentic AI solutions that fit your enterprise goals.
                  </p>
                </ScrollReveal>

                {/* Direct Contact Cards */}
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="space-y-4 pt-2">
                    <a
                      href="tel:+919597867340"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1f6fb2] shadow-xs hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1f6fb2] flex items-center justify-center group-hover:bg-[#1f6fb2] group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-stylized font-semibold text-slate-400 uppercase">
                          Call Us
                        </div>
                        <div className="text-base font-sans font-bold text-slate-900 group-hover:text-[#1f6fb2] transition-colors">
                          (+91) 9597867340
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:business@pibitech.com"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#2ec4b6] shadow-xs hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#2ec4b6] flex items-center justify-center group-hover:bg-[#2ec4b6] group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-stylized font-semibold text-slate-400 uppercase">
                          Direct Email
                        </div>
                        <div className="text-base font-sans font-bold text-slate-900 group-hover:text-[#2ec4b6] transition-colors">
                          business@pibitech.com
                        </div>
                      </div>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-up" delay={100}>
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
                    {submitted ? (
                      <div className="py-12 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold text-slate-900">
                          Thank You for Reaching Out!
                        </h3>
                        <p className="text-sm font-sans text-slate-600 max-w-md mx-auto">
                          We have received your submission. Our senior solutions architect will review
                          your requirements and contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              firstName: "",
                              lastName: "",
                              phone: "",
                              email: "",
                              industry: "",
                              country: "India",
                              message: "",
                            });
                          }}
                          className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-[#1f6fb2] bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                              First Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Enter first name"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Enter last name"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="00000 00000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                          />
                        </div>

                        {/* Email ID */}
                        <div>
                          <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                            Email ID <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="gmail, outlook..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                          />
                        </div>

                        {/* Industry */}
                        <div>
                          <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                            Industry <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            placeholder="Type your industry (e.g. Healthcare, Finance, Retail)"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                          />
                        </div>

                        {/* Country */}
                        <div>
                          <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                            Country <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 bg-white focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all"
                          >
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Germany">Germany</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* How can we help you */}
                        <div>
                          <label className="block text-xs font-sans font-semibold text-slate-700 mb-1.5">
                            How can we help you <span className="text-rose-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Description of your data engineering, AI, or cloud architecture requirements..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1f6fb2] focus:ring-2 focus:ring-[#1f6fb2]/20 transition-all resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl text-sm font-display font-bold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 shadow-lg shadow-[#1f6fb2]/25 hover:shadow-[#2ec4b6]/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            {loading ? (
                              <span>Submitting...</span>
                            ) : (
                              <>
                                <span>Submit</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. GLOBAL & INDIA OFFICES (Image 2 Style)
           ========================================================= */}
        <GlobalOfficesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
