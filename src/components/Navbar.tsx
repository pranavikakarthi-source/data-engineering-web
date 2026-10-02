"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#capabilities" },
    { label: "Technologies", href: "#technologies" },
    { label: "Industries", href: "#industries" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-white/70 backdrop-blur-xs py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/pibi-logo.png"
              alt="Pi bi Logo"
              width={34}
              height={34}
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-display font-extrabold tracking-tight text-slate-900 group-hover:text-[#1f6fb2] transition-colors">
              Pibi Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/#solutions" },
              { label: "Industries", href: "/#industries" },
              { label: "Company", href: "/company" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-[#1f6fb2] rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Button - Talk to Our Team */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-md shadow-[#1f6fb2]/25 hover:shadow-[#2ec4b6]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[#1f6fb2] hover:bg-slate-50 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:brightness-110 rounded-full shadow-lg shadow-[#1f6fb2]/25"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
