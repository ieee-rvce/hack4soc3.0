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
        
        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">Code of Conduct</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="lead text-lg text-slate-600">
            All participants, mentors, sponsors, and volunteers at Hack4Soc are required to agree with the following code of conduct. Organizers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Quick Version</h2>
          <p>
            Hack4Soc is dedicated to providing a harassment-free hackathon experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. 
          </p>
          <p>
            We do not tolerate harassment of hackathon participants in any form. Sexual language and imagery is not appropriate for any hackathon venue, including hacks, talks, workshops, parties, Twitter, and other online media. Hackathon participants violating these rules may be sanctioned or expelled from the hackathon at the discretion of the hackathon organizers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Less Quick Version</h2>
          <p>
            Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p>
            Participants asked to stop any harassing behavior are expected to comply immediately.
          </p>
          <p>
            Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
          </p>
          <p>
            If a participant engages in harassing behavior, the hackathon organizers may take any action they deem appropriate, including warning the offender or expulsion from the hackathon with no refund.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Need Help?</h2>
          <p>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of hackathon staff immediately.
          </p>
          <p>
            Hackathon staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the hackathon. We value your attendance.
          </p>
        </div>
      </div>
    </div>
  );
}
