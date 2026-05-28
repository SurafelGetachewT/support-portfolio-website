import { Award, ExternalLink, FolderOpen } from "lucide-react";
import Badge from "./Badge";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { certificates } from "../data/portfolioData";

function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding border-y border-slate-200 bg-slate-50"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Certificates"
          title="Certificate space ready for future uploads."
          description="Upload certificate PDFs or images into public/certificates, then update the certificate links in src/data/portfolioData.js."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => {
            const isReserved = certificate.href === "#";

            return (
              <Card
                key={certificate.title}
                className="card-hover relative overflow-hidden p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm">
                  <Award size={23} />
                </div>
                <h3 className="text-xl font-bold text-navy-950">
                  {certificate.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {certificate.issuer}
                </p>
                <div className="mt-5">
                  <Badge tone={isReserved ? "amber" : "green"}>
                    {certificate.status}
                  </Badge>
                </div>
                {isReserved ? (
                  <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-500">
                    <FolderOpen size={16} />
                    Add Certificate
                  </span>
                ) : (
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
