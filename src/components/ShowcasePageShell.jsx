import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Github } from "lucide-react";
import Badge from "./Badge";
import DownloadButton from "./DownloadButton";
import PageHero from "./PageHero";

function ShowcasePageShell({ title, intro, skills, children, repoHref = "#" }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") === "1") {
      const timer = window.setTimeout(() => window.print(), 500);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [searchParams]);

  return (
    <>
      <PageHero
        eyebrow="Showcase"
        title={title}
        description={intro}
        badges={skills}
        backTo="/showcases"
        backLabel="All showcases"
      />

      <section className="section-padding bg-white print:py-6">
        <div className="section-shell">
          <div className="no-print mb-8 flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-navy-950">
                Export this showcase
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Use Download PDF, then choose Save as PDF in your browser.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DownloadButton />
              {repoHref === "#" ? (
                <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-400">
                  <Github size={16} />
                  GitHub Repo
                </span>
              ) : (
                <a
                  href={repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
                >
                  <Github size={16} />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 print:hidden">
            {skills.map((skill, index) => (
              <Badge key={skill} tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "green" : "navy"}>
                {skill}
              </Badge>
            ))}
          </div>

          {children}
        </div>
      </section>
    </>
  );
}

export default ShowcasePageShell;
