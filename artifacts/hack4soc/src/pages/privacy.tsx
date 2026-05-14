import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F6FFFB] px-6 py-24 text-slate-800 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm font-medium text-brand-forest hover:text-brand-green mb-12 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="lead text-lg text-slate-600">
            At Hack4Soc, accessible from hack4soc.com, one of our main priorities is the privacy of our visitors and participants. This Privacy Policy document contains types of information that is collected and recorded by Hack4Soc and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p>
            When you register for Hack4Soc, we may ask for your contact information, including items such as name, institution/university name, email address, and telephone number. This information is required by our registration partner, Hack2Skill, to facilitate your participation.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain our event</li>
            <li>Improve, personalize, and expand our hackathon experience</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new tracks, challenges, and features</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the event.</li>
            <li>Send you emails regarding your registration status</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Log Files</h2>
          <p>
            Hack4Soc follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Third-Party Privacy Policies</h2>
          <p>
            Hack4Soc's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p>
            Specifically, please refer to the Hack2Skill privacy policy for information regarding data collection during the registration phase.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Consent</h2>
          <p>
            By using our website and participating in our event, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}
