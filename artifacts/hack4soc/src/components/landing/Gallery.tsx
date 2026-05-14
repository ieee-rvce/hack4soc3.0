import React from "react";
import { motion } from "framer-motion";
import { MicroLabel } from "./primitives/MicroLabel";
import { GlassCard } from "./primitives/GlassCard";

const IMAGES = [
  "/images/h4s2.png",
  "/images/h4s2cs.png",
  "/images/h4s2time.png"
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-transparent py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <MicroLabel className="mb-8">ARCHIVE</MicroLabel>
        <h2 className="mb-16 font-display text-5xl font-normal leading-none text-slate-900 md:text-7xl">
          Moments from <br /> Hack4Soc 2.0
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard className="h-64 md:h-80 w-full overflow-hidden p-0 relative group">
                <img
                  src={src}
                  alt={`Hack4Soc past event ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-opacity group-hover:bg-transparent" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
