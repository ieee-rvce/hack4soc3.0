import React, { Suspense, lazy } from "react";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { GrainOverlay } from "@/components/landing/primitives/GrainOverlay";
import { WebGLErrorBoundary } from "@/components/landing/effects/WebGLErrorBoundary";

// Lazy load non-critical sections
const TrustStrip = lazy(() =>
  import("@/components/landing/TrustStrip").then((m) => ({
    default: m.TrustStrip,
  })),
);
const About = lazy(() =>
  import("@/components/landing/About").then((m) => ({ default: m.About })),
);
const Gallery = lazy(() =>
  import("@/components/landing/Gallery").then((m) => ({ default: m.Gallery })),
);
const Tracks = lazy(() =>
  import("@/components/landing/Tracks").then((m) => ({ default: m.Tracks })),
);
const Timeline = lazy(() =>
  import("@/components/landing/Timeline").then((m) => ({
    default: m.Timeline,
  })),
);
const Prizes = lazy(() =>
  import("@/components/landing/Prizes").then((m) => ({ default: m.Prizes })),
);
const Venue = lazy(() =>
  import("@/components/landing/Venue").then((m) => ({ default: m.Venue })),
);
const Sponsors = lazy(() =>
  import("@/components/landing/Sponsors").then((m) => ({
    default: m.Sponsors,
  })),
);
const Faq = lazy(() =>
  import("@/components/landing/Faq").then((m) => ({ default: m.Faq })),
);
const FinalCta = lazy(() =>
  import("@/components/landing/FinalCta").then((m) => ({
    default: m.FinalCta,
  })),
);
const Footer = lazy(() =>
  import("@/components/landing/Footer").then((m) => ({ default: m.Footer })),
);
const LiquidEther = lazy(
  () => import("@/components/landing/effects/LiquidEther"),
);

export default function LandingPage() {
  return (
    <>
      {/* Global liquid-ether background — fixed behind everything,
          visible through every section's translucent overlay. */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#E8F8F0]">
        <WebGLErrorBoundary
          fallback={
            <img
              src="/images/hero-bg.png"
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-center opacity-60"
            />
          }
        >
          <Suspense
            fallback={<div className="absolute inset-0 bg-[#E8F8F0]" />}
          >
            <LiquidEther
              colors={["#B2E69F", "#82CBE2", "#81C76B", "#A4E4E6", "#C7F2EA"]}
              mouseForce={15}
              cursorSize={80}
              isViscous={true}
              viscous={60}
              resolution={0.5}
              autoDemo
              autoSpeed={0.4}
              autoIntensity={1.2}
              takeoverDuration={0.3}
              autoResumeDelay={1500}
              autoRampDuration={0.6}
              style={{ width: "100%", height: "100%", opacity: 0.7 }}
            />
          </Suspense>
        </WebGLErrorBoundary>
      </div>

      <main
        id="top"
        className="relative z-10 min-h-screen text-foreground font-sans"
      >
        <GrainOverlay />
        <Nav />
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <TrustStrip />
          <About />
          {/* <Gallery /> */}
          <Tracks />
          <Timeline />
          <Prizes />
          <Venue />
          <Sponsors />
          <Faq />
          <FinalCta />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
