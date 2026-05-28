import { Link } from "react-router-dom";
import { ArrowRight, Bitcoin, CheckCircle2 } from "lucide-react";
import Hero from "../components/Hero";
import SupportStrengths from "../components/SupportStrengths";
import ToolsSection from "../components/ToolsSection";
import ContactSection from "../components/Contact";
import SectionHeader from "../components/SectionHeader";
import ShowcaseCard from "../components/ShowcaseCard";
import Card from "../components/Card";
import Badge from "../components/Badge";
import {
  cryptoP2PShowcase,
  proofHighlights,
  showcaseSummaries,
} from "../data/showcaseData";

const workingStyle = [
  {
    title: "Clear first response",
    description:
      "Acknowledge the issue, reduce confusion, and ask only for the details needed to move the case forward.",
  },
  {
    title: "Evidence-based escalation",
    description:
      "Document the customer impact, checks completed, screenshots, IDs, and the exact handoff needed by the next team.",
  },
  {
    title: "Crypto risk awareness",
    description:
      "Handle deposits, withdrawals, P2P orders, payment proof, and account security without exposing sensitive risk rules.",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <SupportStrengths />
      <ToolsSection />

      <section className="section-padding bg-slate-50">
        <div className="section-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Showcases"
              title="Support work samples for the issues users actually bring."
              description="Review how I respond to account access, billing, KYC, crypto deposits, P2P disputes, bugs, technical handoffs, and help center content."
            />
            <Link
              to="/showcases"
              className="focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
            >
              View All Showcases
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {showcaseSummaries.map((showcase) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-shell">
          <div className="grid gap-8 rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#06111f_0%,#0b1728_56%,#0f766e_135%)] p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p className="mb-4 inline-flex rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
                Featured Strength
              </p>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-sky-100">
                <Bitcoin size={28} />
              </div>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Crypto & P2P support is where my experience stands out.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                The case studies show transaction investigation, payment
                verification, wrong-network deposit handling, P2P dispute
                evidence review, and careful escalation for risk-sensitive
                cases.
              </p>
              <Link
                to="/showcases/crypto-p2p-support-case-studies"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-brand-50"
              >
                Open Crypto Showcase
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cryptoP2PShowcase.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <CheckCircle2 className="text-emerald-200" size={20} />
                  <p className="mt-3 text-sm font-bold text-white">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Snapshot"
            title="A quick view of the support work I can handle."
            description="The numbers and tools below summarize the support volume, crypto/P2P exposure, and remote support stack behind the work samples."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {proofHighlights.map((item) => (
              <Card key={item.label} className="p-5">
                <Badge tone={item.tone}>{item.value}</Badge>
                <p className="mt-4 text-sm font-bold leading-6 text-navy-950">
                  {item.label}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {workingStyle.map((item) => (
              <Card key={item.title} className="p-5">
                <h3 className="text-lg font-black text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;
