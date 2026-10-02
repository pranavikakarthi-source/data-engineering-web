"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c1624] text-slate-400 border-t border-slate-800/80 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="p-1 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/pibi-logo.png"
                  alt="Pi bi Logo"
                  width={34}
                  height={34}
                  className="h-7 w-auto object-contain drop-shadow-[0_0_8px_rgba(46,196,182,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-[#2ec4b6] transition-colors">
                Pibi Tech
              </span>
            </Link>

            <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-sm font-normal">
              Empowering enterprise data architecture with precision data engineering, multimodal
              streaming pipelines, and high-fidelity analytics platforms.
            </p>

          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-display font-bold text-white tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Application Development", href: "/application-development" },
                { label: "AI / ML Data Engineering", href: "/ai-ml" },
                { label: "Business Intelligence", href: "/business-intelligence" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {[
                "Healthcare",
                "Financial Services",
                "Autonomous Vehicles",
                "Retail & E-Commerce",
              ].map((item) => (
                <li key={item}>
                  <a href="#industries" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/company" },
                { label: "Careers", href: "/company" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© 2026 Pi bi Technologies. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
