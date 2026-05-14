import React from "react";
import { ArrowButton } from "./primitives/ArrowButton";

export function FinalCta() {
  return (
    <section id="register" className="relative overflow-hidden bg-[#DEFAF4]/50 py-40">
      <div className="absolute inset-0 z-0">
        <img src="/images/cta-bg.png" alt="Abstract background" loading="lazy" className="h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-[#F6FFFB]/80" />
      </div>
      
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center px-6">
        <h2 className="mb-12 font-display text-6xl font-normal leading-none text-slate-900 md:text-8xl">
          Ship something that matters.
        </h2>
        <ArrowButton href="https://hack2skill.com/hack/hack4soc3" variant="primary">
          REGISTER NOW
        </ArrowButton>
      </div>
    </section>
  );
}
