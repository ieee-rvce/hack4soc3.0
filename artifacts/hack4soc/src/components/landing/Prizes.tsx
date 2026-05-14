import React from "react";
import { motion } from "framer-motion";
import { MicroLabel } from "./primitives/MicroLabel";

export function Prizes() {
  return (
    <section className="relative bg-[#DEFAF4]/40 py-32" id="prizes">
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-5xl font-normal leading-none text-slate-900 md:text-7xl">
          Build for impact. <br/> Get recognized.
        </h2>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 md:col-span-3"
          >
            <div className="text-xl font-medium text-slate-500 uppercase tracking-widest">Total Prize Pool</div>
            <div className="font-display text-7xl text-[#81C76B] md:text-9xl">₹40K</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
