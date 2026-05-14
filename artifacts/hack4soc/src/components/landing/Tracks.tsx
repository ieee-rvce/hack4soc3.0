import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MicroLabel } from "./primitives/MicroLabel";
import { GlassCard } from "./primitives/GlassCard";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const TRACKS = [
  {
    num: "01.",
    title: "Governance & Citizen Empowerment",
    desc: "Building AI tools that make government services accessible to every citizen.",
    icon: "/images/icon-agritech.png",
    problems: [
      {
        title: "Problem Statement 1: Multi-Office Government Workflow Executor",
        body: "Design an AI agent that can complete a task requiring interaction with multiple government offices (e.g., certificate correction, license renewal). The agent should plan dependencies, track progress across steps, and handle delays or rejections. It must dynamically adjust its strategy when requirements or outcomes change.",
      },
      {
        title: "Problem Statement 2: AI Legal Aid Chatbot for Tier-2/3 India",
        body: "A chatbot that answers common legal questions in Kannada, Hindi, or English, citing relevant IPC/CrPC sections. Designed for users in Tier-2 and Tier-3 cities who lack access to affordable legal counsel.",
      },
    ],
  },
  {
    num: "02.",
    title: "HealthTech & Wellness",
    desc: "Data-driven systems that improve athlete recovery and personal wellbeing.",
    icon: "/images/icon-medtech.png",
    problems: [
      {
        title: "Problem Statement 1: Athlete Recovery System",
        body: "Develop an integrated, data-driven athlete recovery system that monitors physiological indicators and provides personalized recovery recommendations. The system should support multiple stakeholders and enable efficient recovery planning to reduce injury risk and improve performance.",
      },
    ],
  },
  {
    num: "03.",
    title: "Education",
    desc: "Adaptive learning infrastructure for neurodivergent and underserved students.",
    icon: "/images/icon-edtech.png",
    problems: [
      {
        title: "Problem Statement 1: Adaptive Learning Infrastructure for Neurodivergent Students",
        body: "Develop a foundational curriculum platform that enables educators to upload standard course materials (such as textbooks or syllabi), which are then transformed into sensory-specific learning formats. The system should autonomously reconstruct content into interactive narratives, low-stimulation visual environments, or gamified conceptual models tailored to individual cognitive profiles—including ADHD, Dyslexia, and Autism Spectrum. The objective is to create an adaptive infrastructure that empowers entire school districts to convert traditional, rigid educational resources into a dynamic ecosystem of neuro-inclusive learning experiences.",
      },
    ],
  },
  {
    num: "04.",
    title: "Data Privacy",
    desc: "Local-first tools that protect personal data without compromising privacy.",
    icon: "/images/icon-greentech.png",
    problems: [
      {
        title: "Problem Statement 1: Local-First Personal Privacy Auditor",
        body: "Build a high-performance, zero-connectivity utility that identifies and maps \"Privacy Debt\"—sensitive personal data and tracking artifacts—stored inadvertently across a user's local filesystem and application databases. The tool must operate without any external API calls or cloud-based processing, ensuring that the audit itself does not become a privacy leak.",
      },
    ],
  },
  {
    num: "05.",
    title: "Qualcomm Edge AI Track",
    desc: "Real-time on-device deepfake detection and authenticity watermarking using Snapdragon NPU.",
    icon: "/images/Qualcomm.png",
    problems: [
      {
        title: "Problem Statement 1: Real-Time On-Device Deepfake Detection and Authenticity Watermarking",
        body: "Current deepfake detection methods are primarily cloud-based, post-hoc tools that identify synthetic media only after it has been distributed, which is often too late to prevent harm. To bridge this gap, participants must develop a camera or gallery plugin that utilizes the Snapdragon ISP and NPU pipeline to intercept and analyze frames pre-display. The solution must leverage the QNN SDK to run lightweight, INT4/INT8 quantized detection models at 30 fps directly on the device, ensuring a high-performance, privacy-first architecture that eliminates cloud-based data leaks. Beyond mere detection, the system must embed a cryptographic authenticity watermark into genuine content at the moment of capture to provide a verified trail of media integrity. Selected teams will receive mobile devices with Snapdragon chips on the day of the event for implementation.",
      },
    ],
  },
];

export function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedTrack !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTrack]);

  return (
    <section className="relative overflow-hidden bg-transparent py-32" id="tracks">
      {/* Soft Background Glows */}
      <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-[#B2E69F] opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[60vw] h-[60vw] rounded-full bg-[#91D9E7] opacity-20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <MicroLabel className="mb-8">THE TRACKS</MicroLabel>
        <h2 className="mb-20 max-w-3xl font-display text-5xl font-normal leading-none text-slate-900 md:text-7xl">
          Five areas of impact. Infinite possibilities.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRACKS.map((track, i) => {
            const isQualcomm = i === 4;
            return (
              <motion.div
                key={track.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.05, type: "spring", stiffness: 80 }}
                className={cn(
                  "group relative",
                  isQualcomm ? "md:col-span-2" : ""
                )}
              >
                <GlassCard
                  className={cn(
                    "flex flex-col h-full p-8 transition-all duration-300 pointer-events-auto cursor-pointer",
                    "bg-slate-300/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.1)]",
                    "hover:bg-slate-400/50 hover:shadow-[0_15px_40px_rgba(198,243,110,0.4)]"
                  )}
                  onClick={() => setSelectedTrack(i)}
                >
                  <div className="flex items-start justify-between gap-6 h-full">
                    {/* Left side: icon + title + desc */}
                    <div className="flex items-start gap-6 flex-1">
                      <div className="h-12 w-12 flex items-center justify-center shrink-0">
                        <img
                          src={track.icon}
                          alt={track.title}
                          loading="lazy"
                          className="h-full w-full object-contain rounded-xl filter drop-shadow-[0_0_6px_rgba(129,199,107,0.5)]"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="font-display text-2xl md:text-3xl font-medium text-slate-900">
                          {track.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-slate-600">
                          {track.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right side: expand arrow */}
                    <div className="h-8 w-8 text-[#3b752b] shrink-0 pt-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      <ArrowUpRight />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Sub-Window */}
      <AnimatePresence>
        {selectedTrack !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12 md:p-12 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTrack(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#F6FFFB] border border-white/60 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col"
            >
              <button 
                onClick={() => setSelectedTrack(null)}
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-slate-200/50 hover:bg-slate-200 transition-colors text-slate-600"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 md:gap-6 mb-8 pr-12">
                <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shrink-0">
                  <img
                    src={TRACKS[selectedTrack].icon}
                    alt={TRACKS[selectedTrack].title}
                    className="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 leading-tight">
                    {TRACKS[selectedTrack].title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                {TRACKS[selectedTrack].problems.map((p, j) => (
                  <div key={j} className="bg-white/60 rounded-2xl p-6 md:p-8 border border-slate-200/50">
                    <h4 className="font-display text-xl font-semibold text-[#3b752b] mb-3">
                      {p.title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-wrap text-justify">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}