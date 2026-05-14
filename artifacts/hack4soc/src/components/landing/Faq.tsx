import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MicroLabel } from "./primitives/MicroLabel";

const FAQS = [
  { q: "Who can participate?", a: "1st, 2nd & 3rd year undergraduate engineering students from any recognized college across India are eligible to participate in Hack4Soc 3.0." },
  { q: "Is there a registration fee?", a: "Registration for the online ideation phase is completely free. Selected teams who come offline will have to pay a fee of ₹800 + GST for Non IEEE members and ₹600 + GST for IEEE members" },
  { q: "What is the team size?", a: "Teams can have 3 to 4 members. All members must be from the same college." },
  { q: "How does the hybrid format work?", a: "Phase 1 is an online idea submission. The top shortlisted teams will be invited to RVCE Bengaluru for the Overnight offline hackathon (Phase 2)." },
  { q: "How can a team qualify for the discounted registration fee for IEEE members?", a: "To avail the discount, the team needs to provide a valid IEEE membership number of atleast 1 member in the team." },
  { q: "Can we build on an existing project?", a: "No, all code must be written during the hackathon. However, you can use open-source libraries and APIs." },
  { q: "How will the projects be judged?", a: "Projects will be judged on innovation, technical complexity, societal impact, and presentation quality." },
  { q: "When is the deadline for idea submission?", a: "The last date to submit your ideas for Phase 1 is May 24, 2026." },
];

export function Faq() {
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, midPoint);
  const rightFaqs = FAQS.slice(midPoint);

  return (
    <section className="relative bg-transparent py-32" id="faq">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <MicroLabel className="mb-8 text-center justify-center">FAQ</MicroLabel>
        <h2 className="mb-16 text-center font-display text-5xl font-normal leading-none text-slate-900 md:text-7xl">
          Got questions?
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <Accordion type="multiple" className="w-full space-y-4">
              {leftFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-left-${i}`} className="border border-slate-900/10 bg-[#F6FFFB]/80 px-6 rounded-2xl shadow-sm">
                  <AccordionTrigger className="text-left font-display text-xl text-slate-900 hover:no-underline hover:text-[#81C76B] py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-700 pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="space-y-4">
            <Accordion type="multiple" className="w-full space-y-4">
              {rightFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-right-${i}`} className="border border-slate-900/10 bg-[#F6FFFB]/80 px-6 rounded-2xl shadow-sm">
                  <AccordionTrigger className="text-left font-display text-xl text-slate-900 hover:no-underline hover:text-[#81C76B] py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-700 pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
