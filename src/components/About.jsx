import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const bringItems = [
  "Clear customer communication",
  "Structured troubleshooting",
  "Crypto and P2P support knowledge",
  "Strong documentation habits",
  "Technical background",
  "Remote support readiness",
  "Calm and professional handling of difficult issues",
];

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="About"
            title="A support professional with technical depth and customer-first judgment."
            description="I combine user-facing communication with technical troubleshooting, documentation, and escalation habits."
          />
        </div>

        <div className="grid gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                I am a Customer Support and Technical Support professional with
                a background in Information Technology and Software Engineering.
              </p>
              <p>
                I have experience supporting users across crypto exchanges,
                digital work platforms, telecom systems, and online communities.
                My work has involved handling customer inquiries,
                troubleshooting technical issues, documenting bugs, escalating
                complex cases, and helping users understand platform features.
              </p>
              <p>
                My crypto support background includes deposits, withdrawals, P2P
                trading, payment verification, dispute handling, KYC/AML
                workflows, account security, and user education.
              </p>
              <p>
                I am currently focused on remote customer support, technical
                support, product support, crypto support, fintech support, SaaS
                support, and support operations roles.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-navy-950">What I bring</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {bringItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
