import { Download, ExternalLink, FileText, Send } from "lucide-react";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";
import { contactLinks, resumeSnapshot } from "../data/portfolioData";

function Resume() {
  return (
    <section id="resume" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_48%,#eef7ff_100%)] p-6 shadow-soft sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <SectionHeader
              eyebrow="Resume"
              title={resumeSnapshot.title}
              description={resumeSnapshot.summary}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={contactLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
              >
                <FileText size={17} />
                Google Drive Resume
              </a>
              <a
                href={contactLinks.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-brand-100 bg-brand-50 px-5 py-3 text-sm font-bold text-brand-700 transition hover:border-brand-200 hover:bg-brand-100"
              >
                <Download size={17} />
                PDF Resume
              </a>
              <a
                href={contactLinks.upwork}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-brand-200 hover:text-brand-700"
              >
                <ExternalLink size={17} />
                Upwork Profile
              </a>
              <a
                href={contactLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-brand-200 hover:text-brand-700"
              >
                <Send size={17} />
                @MarGioM
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
                Role
              </p>
              <h3 className="mt-2 text-2xl font-bold text-navy-950">
                {resumeSnapshot.headline}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {resumeSnapshot.focus.map((item) => (
                  <Badge key={item} tone="blue">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm font-bold text-navy-950">Experience</p>
                <ul className="mt-4 space-y-3">
                  {resumeSnapshot.experience.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm font-bold text-navy-950">Tools</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resumeSnapshot.tools.map((tool) => (
                    <Badge key={tool} tone="navy">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
