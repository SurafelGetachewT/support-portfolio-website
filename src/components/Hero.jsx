import { ArrowRight, FileText, Linkedin, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { contactLinks } from "../data/portfolioData";
import { proofHighlights, sitePositioning } from "../data/showcaseData";
import profileImage from "../assets/surafel-profile.webp";

const ctas = [
  { label: "View Showcases", href: "/showcases", primary: true, internal: true },
  { label: "Resume", href: "/resume", icon: FileText, internal: true },
  { label: "Email Me", href: contactLinks.email, icon: Mail },
  { label: "View LinkedIn", href: contactLinks.linkedin, icon: Linkedin },
  { label: "Telegram", href: contactLinks.telegram, icon: Send },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_76%_24%,rgba(20,184,166,0.22),transparent_30%),linear-gradient(120deg,rgba(6,182,212,0.18),transparent_36%,rgba(245,158,11,0.12)),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:auto,auto,36px_36px,36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#06b6d4,#10b981,#f59e0b,#06b6d4)]" />
      <div className="section-shell relative z-10 grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
        <div className="motion-safe:animate-fade-up">
          <Badge tone="blue" className="mb-6 border-white/10 bg-white/10 text-sky-100 shadow-sm shadow-sky-950/20">
            Available for Remote Customer Support, Technical Support, Crypto
            Support & SaaS Support Roles
          </Badge>

          <p className="mb-4 text-lg font-semibold text-sky-200">
            {sitePositioning.name}
          </p>

          <h1 className="max-w-4xl text-[2.15rem] font-black leading-[1.04] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            {sitePositioning.headline}
          </h1>

          <p className="mt-6 max-w-3xl border-l-2 border-brand-500 pl-4 text-lg leading-8 text-slate-100">
            {sitePositioning.subheadline}
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            I help SaaS, fintech, crypto, and digital platform users resolve
            account, payment, transaction, onboarding, and technical issues
            through clear communication, structured troubleshooting, accurate
            documentation, and professional escalation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {ctas.map((cta) => {
              const Icon = cta.icon ?? ArrowRight;
              const isExternal = cta.href.startsWith("http");

              const className = `focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${
                cta.primary
                  ? "bg-white text-navy-950 shadow-lg shadow-sky-900/30 hover:bg-brand-50"
                  : "border border-white/15 bg-white/10 text-white shadow-sm hover:bg-white/15"
              }`;

              if (cta.internal) {
                return (
                  <Link key={cta.label} to={cta.href} className={className}>
                    {cta.label}
                    <Icon size={17} />
                  </Link>
                );
              }

              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={className}
                >
                  {cta.label}
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="motion-safe:animate-fade-up lg:pl-4">
          <div className="relative mx-auto max-w-xs sm:max-w-sm">
            <div className="absolute -inset-4 rounded-lg bg-[linear-gradient(135deg,rgba(6,182,212,0.22),rgba(16,185,129,0.16),rgba(245,158,11,0.10))] blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl shadow-sky-950/30 backdrop-blur">
              <div className="absolute inset-x-3 top-3 z-10 h-1 rounded-full bg-[linear-gradient(90deg,#06b6d4,#10b981,#f59e0b)]" />
              <img
                src={profileImage}
                alt="Professional portrait of Surafel Getachew"
                className="aspect-[4/4.7] w-full rounded-lg object-cover object-top"
              />
            </div>
            <div className="absolute -left-3 bottom-8 hidden rounded-lg border border-white/15 bg-white/95 px-4 py-3 text-navy-950 shadow-card sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                Email
              </p>
              <p className="mt-1 text-sm font-bold">{contactLinks.emailAddress}</p>
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-lg border border-white/15 bg-white/95 px-4 py-3 text-navy-950 shadow-card sm:block">
              <p className="text-sm font-bold">Support-ready</p>
              <p className="text-xs font-semibold text-slate-500">
                Crypto, SaaS, Fintech
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {proofHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
