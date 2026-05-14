import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MicroLabel } from "./primitives/MicroLabel";
import { GlassCard } from "./primitives/GlassCard";

const TIMELINE = [
  { date: "May 14", title: "Registration & Ideation Opens", desc: "Phase 1 begins on Hack2Skill." },
  { date: "May 24", title: "Idea Submission Deadline", desc: "Final day to submit your online proposals." },
  { date: "May 28", title: "Shortlist Announcement", desc: "Top teams selected for Phase 2." },
  { date: "TBA", title: "Offline Check-in at RVCE", desc: "Welcome to Bengaluru. Let's build." },
  { date: "Mar 5–6", title: "The Main Event", desc: "24 hours of non-stop hacking." },
  { date: "Mar 6", title: "Pitching & Demo Day", desc: "Showcase your impact to the judges." },
];
export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end bottom"],
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-transparent py-24" id="timeline">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <h2 className="mb-16 font-display text-5xl font-normal leading-none text-slate-900 md:text-7xl">
          The Roadmap.
        </h2>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute bottom-0 left-[23px] top-0 w-1 bg-slate-900/5 md:left-1/2" />
          
          {/* Vertical Line Foreground (Animated Scroll) */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[23px] w-1 bg-gradient-to-b from-[#3b752b] to-[#81C76B] origin-top md:left-1/2"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-10 md:gap-0">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 60, damping: 15 }}
                  className={`relative flex items-center md:justify-between py-2 md:py-0 ${
                    i !== 0 ? "mt-0 md:-mt-12" : ""
                  } ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, margin: "-15%" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute left-[15px] h-[20px] w-[20px] rounded-full border-4 border-[#F6FFFB] bg-[#3b752b] md:left-1/2 md:-ml-[10px] shadow-sm" 
                  />

                  {/* Spacer for alternating layout */}
                  <div className="hidden w-[45%] md:block" />

                  {/* Content Card */}
                  <div className="ml-16 w-full md:ml-0 md:w-[45%]">
                    <GlassCard className="p-6 md:p-8 bg-slate-100/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mb-3 inline-flex items-center rounded-full border border-[#3b752b]/30 bg-[#3b752b]/10 px-3 py-1 text-xs font-bold text-[#3b752b]">
                        {item.date}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-slate-600 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
