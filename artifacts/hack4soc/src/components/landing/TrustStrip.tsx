import React from "react";
import { MicroLabel } from "./primitives/MicroLabel";

export function TrustStrip() {
  return (
    <section className="relative z-20 border-y border-white/5 bg-brand-warm/70 py-8 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-12">
        <div className="flex flex-col items-center gap-4 md:items-start md:flex-row md:gap-8 text-white/60">
          <div className="flex items-center gap-6">
            <MicroLabel className="text-[10px]">PRESENTED BY</MicroLabel>
            <div className="flex items-center gap-4">
              <a href="https://www.computer.org" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <img src="https://ieeecs-media.computer.org/wp-media/2021/12/16190445/IEEE-CS_LogoTM-orange.png" alt="IEEE CompSoc" className="h-6 object-contain" />
              </a>
              <div className="h-4 w-px bg-white/10" />
              <a href="https://rvce.edu.in" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center h-8 w-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/New_RV_College_logo.png" alt="RVCE" className="h-full w-auto object-contain rounded-lg" />
                </div>
              </a>
            </div>
          </div>
        </div>

    <div className="flex flex-col items-center gap-4 md:items-end md:flex-row md:gap-8 text-white/60">
          <div className="flex items-center gap-4">
            <MicroLabel className="text-[10px]">TITLE SPONSOR</MicroLabel>
            <a href="https://qualcomm.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/images/Qualcomm.png" alt="Qualcomm" className="h-6 object-contain brightness-0 invert" />
            </a>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <MicroLabel className="text-[10px]">PLATFORM PARTNER</MicroLabel>
            <a href="https://hack2skill.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/images/hack2skill.png" alt="Hack2Skill" className="h-8 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
