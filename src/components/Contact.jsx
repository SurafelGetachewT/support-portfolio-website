import { Github, Linkedin, Mail, Send } from "lucide-react";
import { contactLinks } from "../data/portfolioData";

const contactButtons = [
  { label: "LinkedIn", href: contactLinks.linkedin, icon: Linkedin },
  { label: "GitHub", href: contactLinks.github, icon: Github },
  { label: "Upwork", href: contactLinks.upwork, icon: Send },
  { label: "Telegram @MarGioM", href: contactLinks.telegram, icon: Send },
  { label: contactLinks.emailAddress, href: contactLinks.email, icon: Mail },
];

function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-navy-950 p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1f8fff,#67e8f9,#1f8fff)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,143,255,0.16),transparent_42%,rgba(14,165,233,0.10))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-100">
                Contact
              </p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Interested in working together?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                I'm currently open to remote customer support, technical
                support, product support, crypto support, fintech support, SaaS
                support, and support operations roles.
              </p>
              <a
                href={contactLinks.email}
                className="focus-ring mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <Mail size={18} className="text-sky-200" />
                {contactLinks.emailAddress}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactButtons.map((button) => {
                const Icon = button.icon;
                const isExternal = button.href.startsWith("http");
                const isEmail = button.href.startsWith("mailto:");

                return (
                  <a
                    key={button.label}
                    href={button.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold transition ${
                      isEmail
                        ? "border-brand-100 bg-brand-50 text-brand-700 hover:bg-brand-100 sm:col-span-2"
                        : "border-white/15 bg-white text-navy-950 hover:bg-brand-50"
                    }`}
                  >
                    <Icon size={17} />
                    {button.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
