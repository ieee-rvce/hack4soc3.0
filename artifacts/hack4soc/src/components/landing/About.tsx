import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const STATEMENTS = [
  {
    num: "01",
    text: "Hack4Soc isn't just a hackathon. It's a commitment to building tech that matters for society.",
    image: "/images/h4s2.png",
  },
  {
    num: "02",
    text: "Two phases. One mission. Online ideation filters the strongest ideas. Offline at RVCE, the best teams ship them.",
    image: "/images/h4s2time.png",
  },
  {
    num: "03",
    text: "Backed by IEEE Computer Society RVCE and powered by Hack2Skill and sponsored by Qualcomm — built for undergrads who'd rather build than spectate.",
    image: "/images/h4s2cs.png",
  },
];

interface LayerProps {
  statement: (typeof STATEMENTS)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function ImageLayer({ statement, index, total, scrollYProgress }: LayerProps) {
  const opacity = useTransform(scrollYProgress, (v) => {
    const position = v * (total - 1);
    const distance = Math.abs(position - index);
    return Math.max(0, 0.45 - distance * 0.45);
  });
  const scale = useTransform(scrollYProgress, (v) => {
    const position = v * (total - 1);
    const distance = Math.abs(position - index);
    return 1.2 - Math.min(distance, 1) * 0.1;
  });

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 bg-cover bg-center mix-blend-screen will-change-transform"
      aria-hidden
    >
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(" + statement.image + ")",
          maskImage:
            "radial-gradient(circle at 35% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 35% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 75%)",
        }}
      />
    </motion.div>
  );
}

function NumeralLayer({
  statement,
  index,
  total,
  scrollYProgress,
}: LayerProps) {
  const opacity = useTransform(scrollYProgress, (v) => {
    const position = v * (total - 1);
    const distance = Math.abs(position - index);
    return Math.max(0, 1 - distance * 1.5);
  });
  const y = useTransform(scrollYProgress, (v) => {
    const position = v * (total - 1);
    const delta = position - index;
    return `${delta * -20}%`;
  });

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <span className="font-display text-[35vh] font-bold leading-none text-slate-900/[0.18] md:text-white/[0.25] md:text-[55vh]">
        {statement.num}
      </span>
    </motion.div>
  );
}

function TextStatement({
  statement,
  index,
  total,
  scrollYProgress,
}: LayerProps) {
  const opacity = useTransform(scrollYProgress, (v) => {
    const position = v * (total - 1);
    const distance = Math.abs(position - index);
    return Math.max(0, 1 - distance * 1.6);
  });

  return (
    <motion.p
      style={{ opacity }}
      className="col-start-1 row-start-1 font-display text-3xl sm:text-4xl font-normal leading-tight text-slate-900 md:text-5xl lg:text-5xl"
    >
      {statement.text}
    </motion.p>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Match scroll progress to the sticky segment's visible duration.
    offset: ["start start", "end end"],
  });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrollSections = STATEMENTS.length;

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent h-[180vh] md:h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col md:flex-row">
        {/* Visual visuals - Background on mobile, Left panel on desktop */}
        <div className="absolute inset-0 md:relative md:w-1/2 overflow-hidden bg-slate-950/10 md:bg-slate-950 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(129,199,107,0.1)_0%,transparent_60%)]" />
          {STATEMENTS.map((statement, index) => (
            <ImageLayer
              key={statement.num}
              statement={statement}
              index={index}
              total={STATEMENTS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
          <motion.svg
            style={{ rotate: ringRotate }}
            viewBox="0 0 400 400"
            className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 opacity-30"
            aria-hidden
          >
            <circle
              cx="200"
              cy="200"
              r="195"
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="0.5"
              className="opacity-50"
            />
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="0.5"
              className="opacity-60"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="0.5"
              className="opacity-70"
            />
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="0.5"
              className="opacity-80"
            />
            <circle
              cx="200"
              cy="200"
              r="40"
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="1"
              className="opacity-90"
            />
            <circle cx="200" cy="200" r="3" fill="var(--brand-green)" />
          </motion.svg>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative h-[55vh] w-full">
              {STATEMENTS.map((statement, index) => (
                <NumeralLayer
                  key={statement.num}
                  statement={statement}
                  index={index}
                  total={STATEMENTS.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text content - Layered on top of visuals on mobile */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-16 md:w-1/2 md:px-12 lg:px-24 md:-mt-24 pointer-events-none">
          <div className="relative mt-8 grid pointer-events-auto">
            {STATEMENTS.map((statement, index) => (
              <TextStatement
                key={statement.num}
                statement={statement}
                index={index}
                total={STATEMENTS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
