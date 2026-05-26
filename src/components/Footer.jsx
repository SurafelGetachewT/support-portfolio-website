import { Github, Linkedin, Mail, Send } from "lucide-react";
import { contactLinks, navLinks } from "../data/portfolioData";

const socialLinks = [
  { label: "GitHub", href: contactLinks.github, icon: Github },
  { label: "LinkedIn", href: contactLinks.linkedin, icon: Linkedin },
  { label: "Upwork", href: contactLinks.upwork, icon: Send },
  { label: "Telegram", href: contactLinks.telegram, icon: Send },
  { label: "Email", href: contactLinks.email, icon: Mail },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_0.8fr]">
          <div>
            <p className="text-lg font-bold text-navy-950">Surafel Getachew</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Technical Customer Support Specialist | Crypto, SaaS, Fintech &
              P2P Support
            </p>
            <a
              href={contactLinks.email}
              className="focus-ring mt-3 inline-flex rounded-md text-sm font-bold text-brand-700 hover:text-brand-600"
            >
              {contactLinks.emailAddress}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-1 text-sm font-semibold text-slate-600 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          &copy; 2026 Surafel Getachew. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
