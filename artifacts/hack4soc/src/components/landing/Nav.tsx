import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MENU_LINKS = [
  {
    label: "registration",
    href: "https://hack2skill.com/event/hack4soc3?utm_source=hack2skill&utm_medium=homepage",
  },
  { label: "tracks", href: "#tracks" },
  { label: "timeline", href: "#timeline" },
  { label: "prizes", href: "#prizes" },
  { label: "venue", href: "#venue" },
  { label: "faq", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [showTrigger, setShowTrigger] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show the menu button once we scroll past 200px (past the main hero content)
    setShowTrigger(latest > 200);
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <>
      {/* Top brand wordmark */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex items-start justify-between px-6 py-6 md:px-10 md:py-8"
      >
        <div className="flex items-center gap-4">
          <div className="pointer-events-auto rounded-full bg-white/20 px-2 py-1 backdrop-blur-md border border-white/30 shadow-sm">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
            >
              <img
                src="/images/Hack4Soc.png"
                alt=""
                className="h-10 md:h-14 w-auto object-contain"
              />
              <div className="flex items-baseline gap-1">
                <span>hack4soc</span>
                <span className="text-[#81C76B]">3.0</span>
              </div>
            </a>
          </div>
          <div className="pointer-events-auto rounded-full bg-white/60 px-3 py-2 backdrop-blur-md border border-white/30 shadow-sm hidden md:block">
            <img
              src="/images/Qualcomm.png"
              alt="Qualcomm"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Bullseye trigger — fixed bottom-right on mobile, bottom-center on desktop */}
      <AnimatePresence>
        {(showTrigger || open) && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="group fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 flex-col items-center gap-1.5 outline-none md:bottom-8"
          >
            <motion.div
              animate={{
                rotate: open ? 90 : 0,
                opacity: open ? 0 : 1,
                scale: open ? 0.8 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center"
            >
              {/* Glass background */}
              <div className="absolute inset-0 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-md" />

              {/* concentric circles icon */}
              <div className="relative h-full w-full p-2 text-white opacity-90">
                <BullseyeIcon active={open} />
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-screen bullseye menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            {/* dimmed backdrop with brand image visible behind */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-brand-deep/85 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <BullseyeBackdrop />

            <BullseyeMenu
              links={MENU_LINKS}
              hoverIdx={hoverIdx}
              setHoverIdx={setHoverIdx}
              onSelect={handleNav}
              onClose={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BullseyeIcon({ active }: { active: boolean }) {
  const stroke = active ? "#81C76B" : "#ffffff";
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.95"
      />
      <circle
        cx="24"
        cy="24"
        r="16"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.85"
      />
      <circle
        cx="24"
        cy="24"
        r="10"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.75"
      />
      <circle cx="24" cy="24" r="4" fill={stroke} />
    </svg>
  );
}

/**
 * Subtle radial glow behind the menu, evokes the dark/light layered feel
 * from the Thonik reference without being literal.
 */
function BullseyeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[56px] flex justify-center md:bottom-[72px]">
      <div className="absolute h-[160vmin] w-[160vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,199,107,0.15)_0%,_rgba(129,199,107,0)_60%)]" />
    </div>
  );
}

interface BullseyeMenuProps {
  links: { label: string; href: string }[];
  hoverIdx: number | null;
  setHoverIdx: (i: number | null) => void;
  onSelect: (href: string) => void;
  onClose: () => void;
}

function BullseyeMenu({
  links,
  hoverIdx,
  setHoverIdx,
  onSelect,
  onClose,
}: BullseyeMenuProps) {
  // Anchored at the bottom, so rings appear as semi-circles rising up.
  // Sized in vmin to stay contained within the viewport.
  const baseSize = 135; // vmin
  const ringStep = 18; // vmin

  return (
    <div className="absolute inset-x-0 bottom-[56px] flex justify-center md:bottom-[72px]">
      <div className="relative flex items-center justify-center">
        {/* Concentric ring "lanes" */}
        {links.map((link, i) => {
          const size = baseSize - i * ringStep;
          const isHovered = hoverIdx === i;
          return (
            <motion.button
              key={link.label}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.05 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              onClick={() => onSelect(link.href)}
              className="group absolute flex items-start justify-center rounded-full border-2 outline-none"
              style={{
                width: `${size}vmin`,
                height: `${size}vmin`,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                borderColor:
                  isHovered || hoverIdx === null
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.35)",
                backgroundColor: "rgba(10,13,11,0.45)",
                transition:
                  "border-color 250ms ease, background-color 250ms ease",
              }}
            >
              {/* Label sits at the top of each ring */}
              <span
                className={cn(
                  "pointer-events-none mt-[2vmin] select-none font-display text-[clamp(1.3rem,3vmin,3rem)] font-normal leading-none tracking-tight transition-colors duration-200",
                  isHovered ? "text-brand-lime" : "text-white",
                )}
                style={{
                  textShadow: isHovered
                    ? "0 0 24px rgba(198,243,110,0.4)"
                    : "0 1px 12px rgba(0,0,0,0.6)",
                }}
              >
                {link.label}
              </span>
            </motion.button>
          );
        })}

        {/* Center close pill — aligns with the trigger icon */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.05 + links.length * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={onClose}
          aria-label="Close menu"
          className="relative z-[2] flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-deep transition-all hover:scale-105 hover:bg-brand-lime md:h-20 md:w-20"
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
