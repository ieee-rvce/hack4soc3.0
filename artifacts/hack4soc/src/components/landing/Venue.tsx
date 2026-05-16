import React from "react";
import { MicroLabel } from "./primitives/MicroLabel";
import { GlassCard } from "./primitives/GlassCard";
import { ArrowButton } from "./primitives/ArrowButton";

export function Venue() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-brand-deep/75 py-32 backdrop-blur-[2px]"
    >
      {/* Background illustration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/images/skyline.png"
          alt="Bengaluru Skyline Background"
          loading="lazy"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <MicroLabel className="mb-6">THE VENUE</MicroLabel>
            <h2 className="font-display text-5xl font-normal leading-none text-white md:text-7xl">
              RV College of <br /> Engineering.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Mysore Road, Bengaluru, Karnataka
            </p>
          </div>
          <ArrowButton
            href="https://maps.app.goo.gl/bzZKm6dCvmCg12B76"
            className="self-start md:self-auto"
            variant="primary"
          >
            GET DIRECTIONS
          </ArrowButton>
        </div>

        <GlassCard className="h-[400px] w-full overflow-hidden p-0 border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509395045353!2d77.49605487570415!3d12.92372278738734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(1) invert(1) contrast(0.8)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </GlassCard>
      </div>
    </section>
  );
}
