import React from "react";
import { Link } from "wouter";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-[#F6FFFB]/80 pt-20 pb-8 text-slate-700 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8 mb-20">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-6">
            <div className="font-display text-2xl font-bold text-slate-900">
              IEEE RVCE
            </div>
            <p className="max-w-sm text-sm">
              Empowering students to innovate, impact, and inspire through technology.
            </p>
            <a href="mailto:ieee_csstudent@rvce.edu.in" className="text-slate-900 hover:text-[#81C76B] transition-colors">
              ieee_csstudent@rvce.edu.in
            </a>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-semibold text-slate-900 tracking-widest uppercase mb-2">Quick Links</h4>
            <a href="https://hack.ieee-rvce.org/#about" target="_blank" rel="noopener noreferrer" className="hover:text-[#81C76B] transition-colors">Hack4Soc 2.0</a>
            <Link href="/code-of-conduct">
              <a className="hover:text-slate-900 transition-colors">Code of Conduct</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            </Link>
            <a href="https://hack2skill.com/hack/hack4soc3" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Hack2Skill Registration</a>
            <a href="https://qualcomm.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Qualcomm</a>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-semibold text-slate-900 tracking-widest uppercase mb-2">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ieee.compsoc.rvce/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-slate-900/10 flex items-center justify-center hover:bg-slate-900/5 hover:text-slate-900 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/ieee-comp-soc-rvce/posts/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-slate-900/10 flex items-center justify-center hover:bg-slate-900/5 hover:text-slate-900 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-900/10 pt-8 text-xs">
          <p>© 2026 IEEE Computer Society, RV College of Engineering.</p>
          <p>No bugs were found. Only undocumented features shipped at 3 AM.</p>
        </div>
      </div>
    </footer>
  );
}
