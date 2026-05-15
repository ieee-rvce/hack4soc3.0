import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowButton } from "./primitives/ArrowButton";
import { MicroLabel } from "./primitives/MicroLabel";

// ASCII Art component for background accent - positioned right
const AsciiBackground = () => (
  <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden flex items-start justify-end pt-12 md:pt-16 pr-4 md:pr-8 lg:pr-16">
    <pre className="text-[#3b752b]/40 text-[0.5rem] md:text-[0.65rem] lg:text-[0.8rem] leading-tight font-mono whitespace-pre text-right drop-shadow-md">
      {`
██╗  ██╗ █████╗  ██████╗██╗  ██╗██╗  ██╗ ███████╗ ██████╗  ██████╗
██║  ██║██╔══██╗██╔════╝██║ ██╔╝██║  ██║ ██╔════╝██╔═══██╗██╔════╝
███████║███████║██║     █████╔╝ ███████║ ███████╗██║   ██║██║     
██╔══██║██╔══██║██║     ██╔═██╗ ╚════██║ ╚════██║██║   ██║██║     
██║  ██║██║  ██║╚██████╗██║  ██╗     ██║ ███████║╚██████╔╝╚██████╗
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝     ╚═╝ ╚══════╝ ╚═════╝  ╚═════╝

╔════════════════════════════════════╗
║                                    ║
║   STATUS: INITIALIZED              ║
║   MODE: INNOVATION_ACTIVE          ║
║   AUDIT: ENABLED                   ║
║                                    ║
║   ██████████████████████ 100%      ║
║                                    ║
║   PHASE_1: IDEATION                ║
║   PHASE_2: BUILD_TOGETHER          ║
║   PHASE_3: IMPACT                  ║
║                                    ║
║   POWERED BY :                     ║
║                                    ║
║  ╔═╗ ╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔╦╗         ║
║  ║═╬╗║ ║╠═╣║  ║  ║ ║║║║║║║         ║
║  ╚═╝╚╚═╝╩ ╩╩═╝╚═╝╚═╝╩ ╩╩ ╩         ║
╚════════════════════════════════════╝
`}
    </pre>
  </div>
);

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-12 flex flex-col justify-between min-h-screen">
      {/* Gradient overlays for depth - Diffused Pastels */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ y }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F6FFFB]/50 to-[#F6FFFB]/90" />
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#D0F0C0] opacity-15 blur-[100px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[#AAE5EF] opacity-15 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 flex flex-col justify-between h-full flex-1 pointer-events-none">
        <AsciiBackground />
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl pt-8 md:pt-12 pointer-events-auto"
        >
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.85] tracking-tight text-slate-900">
            Innovate.
            <br />
            Impact.
            <br />
            Inspire.
          </h1>
          <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-slate-700 leading-relaxed font-light">
            The flagship hackathon of IEEE Computer Society, RV College of
            Engineering — building real tech for real societal problems.
          </p>
        </motion.div>

        {/* Event Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 w-full pointer-events-auto"
        >
          <div className="border-l-2 border-[#81C76B]/80 pl-3 py-1">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
              Format
            </p>
            <p className="text-sm md:text-base text-slate-900 font-semibold">
              Hybrid
            </p>
            <p className="text-xs text-slate-600 mt-0.5">Online + Offline</p>
          </div>
          <div className="border-l-2 border-[#81C76B]/80 pl-3 py-1">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
              Location
            </p>
            <p className="text-sm md:text-base text-slate-900 font-semibold">
              RVCE
            </p>
            <p className="text-xs text-slate-600 mt-0.5">Bengaluru</p>
          </div>
          <div className="border-l-2 border-[#81C76B]/80 pl-3 py-1">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
              Team
            </p>
            <p className="text-sm md:text-base text-slate-900 font-semibold">
              3-4
            </p>
            <p className="text-xs text-slate-600 mt-0.5">Members</p>
          </div>
        </motion.div>

        {/* CTA Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 w-full border-t border-slate-900/10 pt-6 pointer-events-auto"
        >
          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5 flex-wrap">
            <ArrowButton
              href="https://hack2skill.com/hack/hack4soc3"
              variant="primary"
            >
              Register Now
            </ArrowButton>

            <a
              href="https://www.instagram.com/ieee.compsoc.rvce/"
              className="group px-6 md:px-8 py-3 md:py-4 border border-slate-900/20 rounded-full text-slate-900 font-semibold text-sm md:text-base transition-all duration-300 hover:border-[#3b752b] hover:bg-[#3b752b]/30"
            >
              Join Community
            </a>

            <a
              href="https://hack2pointo.ieee-rvce.org/#about"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 md:px-8 py-3 md:py-4 border border-slate-900/20 rounded-full text-slate-900 font-semibold text-sm md:text-base transition-all duration-300 hover:border-slate-900/60 hover:bg-slate-900/10"
            >
              Previous Edition
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating accent elements - subtle */}
      <motion.div
        className="absolute right-5 md:right-10 top-1/3 w-20 md:w-32 h-20 md:h-32 border border-[#81C76B]/20 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="absolute left-5 md:left-10 bottom-10 md:bottom-32 w-16 md:w-24 h-16 md:h-24 border border-slate-900/10 rounded-full pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
    </section>
  );
}
