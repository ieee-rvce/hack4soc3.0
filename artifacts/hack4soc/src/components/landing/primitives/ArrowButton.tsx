import React from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function ArrowButton({ href, variant = "secondary", children, className, ...props }: ArrowButtonProps) {
  const isPrimary = variant === "primary";

  const baseClasses = cn(
    "group relative inline-flex items-center gap-4 rounded-full border p-1.5 pr-8 transition-all duration-300 ease-out md:pr-10 outline-none",
    isPrimary 
      ? "bg-[#81C76B]/90 backdrop-blur-md border-transparent text-slate-900 shadow-sm hover:bg-[#81C76B] hover:shadow-md" 
      : "bg-white/50 backdrop-blur-md border-slate-900/20 text-slate-900 hover:bg-slate-900/5 hover:border-slate-900/40",
    className
  );

  const innerContent = (
    <>
      <div className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45 md:h-12 md:w-12",
        isPrimary ? "bg-white/40 text-slate-900" : "bg-[#81C76B] text-slate-900"
      )}>
        <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <span className="font-display text-sm font-bold uppercase tracking-[0.15em] md:text-base">
        {children}
      </span>
    </>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {innerContent}
        </a>
      );
    }
    return (
      <Link href={href}>
        <a className={baseClasses}>{innerContent}</a>
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {innerContent}
    </button>
  );
}
