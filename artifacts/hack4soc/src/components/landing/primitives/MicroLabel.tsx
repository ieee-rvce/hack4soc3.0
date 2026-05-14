import React from "react";
import { cn } from "@/lib/utils";

interface MicroLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MicroLabel({ children, className }: MicroLabelProps) {
  return (
    <div className={cn("flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-[#3b752b] uppercase", className)}>
      <div className="h-2 w-2 bg-[#3b752b] rounded-[2px]" />
      {children}
    </div>
  );
}
