"use client";

import ScrollReveal from "./ScrollReveal";

export default function GlobalOfficesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[linear-gradient(180deg,#0a192f_0%,#0c2340_50%,#0d2f59_100%)] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#1f6fb2]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            GLOBAL OFFICES
           ========================================================= */}
        <ScrollReveal animation="fade-up" delay={50}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Global{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Offices
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          {/* USA */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 drop-shadow-[0_0_8px_rgba(46,196,182,0.4)]"
                >
                  {/* Statue of Liberty Line Art */}
                  <path d="M32 6 L33 16 M26 9 L31 16 M38 9 L33 16 M21 14 L29 18 M43 14 L35 18" />
                  <path d="M28 18 C28 18 30 16 32 16 C34 16 36 18 36 18 L35 24 L29 24 Z" />
                  <circle cx="32" cy="21" r="2.5" />
                  <path d="M26 24 L38 24 L37 36 L27 36 Z" />
                  <path d="M22 28 L14 18 L16 16 L24 26" />
                  <path d="M12 15 L16 13 L17 17 Z" fill="currentColor" opacity="0.3" />
                  <path d="M14 12 L14 8 M12 10 L16 10" />
                  <path d="M40 26 L46 32 L44 38 L38 34" />
                  <rect x="42" y="32" width="6" height="8" rx="1" transform="rotate(15 45 36)" />
                  <path d="M27 36 L24 54 L40 54 L37 36" />
                  <path d="M29 36 L28 54 M32 36 L32 54 M35 36 L36 54" strokeDasharray="1 3" />
                  <path d="M18 54 L46 54 L44 60 L20 60 Z" />
                  <path d="M14 60 L50 60" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                USA
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
                Pflugerville, Travis, Texas 78660
              </p>
            </div>
          </ScrollReveal>

          {/* Germany */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 drop-shadow-[0_0_8px_rgba(46,196,182,0.4)]"
                >
                  {/* Brandenburg Gate Line Art */}
                  <path d="M27 8 L32 4 L37 8 Z" />
                  <circle cx="32" cy="7" r="1.5" />
                  <path d="M25 12 L39 12 L38 8 L26 8 Z" />
                  <path d="M10 16 L54 16 L52 13 L12 13 Z" />
                  <path d="M8 20 L56 20 L54 16 L10 16 Z" />
                  {/* Columns */}
                  <path d="M12 20 L12 52 M18 20 L18 52 M24 20 L24 52 M30 20 L30 52 M34 20 L34 52 M40 20 L40 52 M46 20 L46 52 M52 20 L52 52" />
                  {/* Base */}
                  <path d="M8 52 L56 52 L58 56 L6 56 Z" />
                  <path d="M4 56 L60 56 L62 60 L2 60 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                Germany
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
                Erkelenz, Königsbergerstr. 19, 41812
              </p>
            </div>
          </ScrollReveal>

          {/* UAE */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 drop-shadow-[0_0_8px_rgba(46,196,182,0.4)]"
                >
                  {/* Burj Al Arab Line Art */}
                  <path d="M26 6 L26 58" />
                  <path d="M26 6 C38 18 46 36 46 58" />
                  <path d="M26 22 L41 22" />
                  <path d="M26 34 L45 34" />
                  <path d="M26 46 L46 46" />
                  <path d="M26 6 C20 22 18 42 18 58" />
                  <path d="M26 14 C32 14 36 17 38 17" />
                  <path d="M14 58 L52 58 L54 62 L12 62 Z" />
                  <path d="M26 4 L26 6" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                United Arab Emirates
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
                Abu Dhabi, Khalifa City, St. 00971
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* =========================================================
            INDIA OFFICES
           ========================================================= */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              India{" "}
              <span className="bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent">
                Offices
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-3xl mx-auto">
          {/* Chennai */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 drop-shadow-[0_0_8px_rgba(46,196,182,0.4)]"
                >
                  {/* South Indian Temple / Chennai Monument Line Art */}
                  <path d="M32 6 L32 10 M30 8 L34 8" />
                  <path d="M28 10 L36 10 L35 16 L29 16 Z" />
                  <path d="M24 16 L40 16 L38 24 L26 24 Z" />
                  <path d="M20 24 L44 24 L42 34 L22 34 Z" />
                  <path d="M16 34 L48 34 L46 46 L18 46 Z" />
                  <path d="M12 46 L52 46 L50 56 L14 56 Z" />
                  {/* Gate Arch */}
                  <path d="M28 56 L28 48 C28 45 36 45 36 48 L36 56" />
                  {/* Base */}
                  <path d="M8 56 L56 56 L58 60 L6 60 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                Chennai
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
                Tharamani, Chennai, 600113
              </p>
            </div>
          </ScrollReveal>

          {/* Madurai */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 drop-shadow-[0_0_8px_rgba(46,196,182,0.4)]"
                >
                  {/* Madurai Meenakshi Temple Gopuram Line Art */}
                  <path d="M28 4 L36 4 M32 2 L32 6" />
                  <path d="M26 6 L38 6 L37 12 L27 12 Z" />
                  <path d="M23 12 L41 12 L39 20 L25 20 Z" />
                  <path d="M20 20 L44 20 L42 30 L22 30 Z" />
                  <path d="M17 30 L47 30 L45 42 L19 42 Z" />
                  <path d="M14 42 L50 42 L48 54 L16 54 Z" />
                  {/* Intricate tiers details */}
                  <path d="M26 16 L38 16 M24 25 L40 25 M21 36 L43 36 M18 48 L46 48" strokeDasharray="2 2" />
                  {/* Center Entrance */}
                  <path d="M27 54 L27 46 C27 43 37 43 37 46 L37 54" />
                  <path d="M8 54 L56 54 L58 60 L6 60 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                Madurai
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
                Thiruppalai, Madurai, 625014
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
