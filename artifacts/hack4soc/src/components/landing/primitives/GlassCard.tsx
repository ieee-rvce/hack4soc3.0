import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden",
        glow && "before:absolute before:inset-0 before:bg-brand-lime/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
