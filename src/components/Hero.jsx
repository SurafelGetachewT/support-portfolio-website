import { ArrowRight, FileText, Linkedin, Mail, Send } from "lucide-react";
import Badge from "./Badge";
import { contactLinks, heroHighlights } from "../data/portfolioData";
import profileImage from "../assets/surafel-profile.png";

const ctas = [
  { label: "View Support Portfolio", href: "#support-portfolio", primary: true },
  { label: "Resume", href: "#resume", icon: FileText },
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
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(120deg,rgba(31,143,255,0.18),transparent_34%,rgba(14,165,233,0.14)),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:auto,36px_36px,36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1f8fff,#67e8f9,#1f8fff)]" />
      <div className="section-shell relative z-10 grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
        <div className="motion-safe:animate-fade-up">
          <Badge tone="blue" className="mb-6 border-white/10 bg-white/10 text-sky-100 shadow-sm shadow-sky-950/20">
            Available for Remote Customer Support, Technical Support, Crypto
            Support & SaaS Support Roles
          </Badge>

          <p className="mb-4 text-lg font-semibold text-sky-200">
            Hi, I'm Surafel Getachew.
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Technical Customer Support Specialist for SaaS, Crypto, Fintech &
            Digital Platforms
          </h1>

          <p className="mt-6 max-w-3xl border-l-2 border-brand-500 pl-4 text-lg leading-8 text-slate-100">
            I help users resolve account, payment, transaction, technical,
            onboarding, and platform-related issues through clear
            communication, structured troubleshooting, and reliable support
            documentation.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            I'm a Technical Customer Support Specialist with experience across
            crypto exchanges, SaaS platforms, digital services, telecom support,
            and online work platforms. I specialize in customer communication,
            technical troubleshooting, ticket handling, crypto/P2P support,
            knowledge base writing, and escalation workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {ctas.map((cta) => {
              const Icon = cta.icon ?? ArrowRight;
              const isExternal = cta.href.startsWith("http");

              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${
                    cta.primary
                      ? "bg-white text-navy-950 shadow-lg shadow-sky-900/30 hover:bg-brand-50"
                      : "border border-white/15 bg-white/10 text-white shadow-sm hover:bg-white/15"
                  }`}
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
            <div className="absolute -inset-4 rounded-lg bg-[linear-gradient(135deg,rgba(31,143,255,0.22),rgba(103,232,249,0.12))] blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl shadow-sky-950/30 backdrop-blur">
              <div className="absolute inset-x-3 top-3 z-10 h-1 rounded-full bg-[linear-gradient(90deg,#1f8fff,#67e8f9)]" />
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
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
