import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-[#F6FFFB] px-6 py-24 text-slate-800 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm font-medium text-brand-forest hover:text-brand-green mb-12 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Code of Conduct - Hack4Soc 3.0
        </h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <p className="lead text-lg text-slate-600">
            All participants, mentors, judges, sponsors, and volunteers are
            expected to maintain a respectful, inclusive, and professional
            environment throughout the hackathon.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Participants must:
          </h2>
          <ul>
            <li>Treat everyone with respect and professionalism.</li>
            <li>Collaborate fairly and ethically.</li>
            <li>Follow instructions from organizers and volunteers.</li>
            <li>Respect the venue, equipment, and fellow participants.</li>
            <li>Ensure all submitted work is original or properly credited.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The following will not be tolerated:
          </h2>
          <ul>
            <li>Harassment, discrimination, or offensive behaviour.</li>
            <li>Plagiarism, cheating, or sabotage.</li>
            <li>Use of inappropriate language or disruptive conduct.</li>
            <li>Unauthorized access to systems or data.</li>
            <li>Any activity violating legal or ethical standards.</li>
          </ul>

          <p>
            Teams found violating the rules may face warnings, disqualification,
            or removal from the event.
          </p>
          <p>
            By participating in Hack4Soc 3.0, all attendees agree to follow this
            Code of Conduct and help create a positive hackathon experience for
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
