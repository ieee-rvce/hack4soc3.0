import React from "react";
import { MicroLabel } from "./primitives/MicroLabel";
import { GlassCard } from "./primitives/GlassCard";

export function Sponsors() {
  return (
    <section className="relative bg-transparent py-32 border-t border-slate-900/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <MicroLabel className="mb-16 text-center justify-center">
          PARTNERS & SPONSORS
        </MicroLabel>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://qualcomm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 lg:col-span-3"
          >
            <GlassCard className="relative flex h-32 md:h-56 flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md border border-slate-900/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:shadow-lg transition-all duration-300">
              <span className="absolute top-3 left-4 md:top-6 md:left-8 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                Title Sponsor
              </span>
              <div className="flex h-full w-full items-center justify-center pt-4">
                <img
                  src="/images/Qualcomm.png"
                  alt="Qualcomm"
                  loading="lazy"
                  className="max-h-14 md:max-h-24 w-1/3 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>
            </GlassCard>
          </a>
          {/* Main Partners */}
          <a
            href="https://hack2skill.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard className="relative flex h-32 md:h-56 flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md border border-slate-900/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:shadow-lg transition-all duration-300">
              <span className="absolute top-3 left-4 md:top-6 md:left-8 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                Platform Partner
              </span>
              <div className="flex h-full w-full items-center justify-center pt-4">
                <img
                  src="/images/hack2skill.png"
                  alt="Hack2Skill"
                  loading="lazy"
                  className="max-h-14 md:max-h-24 w-4/5 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded-xl"
                />
              </div>
            </GlassCard>
          </a>

          <a
            href="https://www.computer.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard className="relative flex h-32 md:h-56 flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md border border-slate-900/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:shadow-lg transition-all duration-300">
              <span className="absolute top-3 left-4 md:top-6 md:left-8 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                supported by
              </span>
              <div className="flex h-full w-full flex-col items-center justify-center pt-8">
                <img
                  src="/images/IEEE CS.png"
                  alt="IEEE Computer Society"
                  loading="lazy"
                  className="max-h-12 md:max-h-20 w-4/5 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded-xl"
                />
                <span className="mt-4 font-semibold text-slate-900 text-sm text-center tracking-wide">
                  IEEE Computer Society
                </span>
              </div>
            </GlassCard>
          </a>

          <a
            href="https://rvce.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard className="relative flex h-32 md:h-56 flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md border border-slate-900/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:shadow-lg transition-all duration-300">
              <span className="absolute top-3 left-4 md:top-6 md:left-8 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                HOST
              </span>
              <div className="flex h-full w-full flex-col items-center justify-center pt-8">
                <img
                  src="/images/IEEE RVCE.png"
                  alt="IEEE RVCE Chapter"
                  loading="lazy"
                  className="max-h-12 md:max-h-20 w-4/5 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded-xl"
                />
                <span className="mt-4 font-semibold text-slate-900 text-sm text-center tracking-wide">
                  RV College of Engineering
                </span>
              </div>
            </GlassCard>
          </a>
        </div>

        {/* Seamless CSS marquee row */}
        <div className="mt-16 overflow-hidden">
          <div className="animate-marquee gap-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2 md:gap-4 px-4 md:px-8 text-slate-600 font-display text-lg sm:text-2xl md:text-3xl border border-slate-900/10 rounded-full py-1.5 md:py-4 bg-white/40 backdrop-blur-sm shrink-0"
              >
                <span className="h-2 w-2 rounded-full bg-brand-forest" />
                {i % 2 === 0
                  ? "Innovate. Impact. Inspire."
                  : "Powered by Qualcomm"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
