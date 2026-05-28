import ShowcasePageShell from "../components/ShowcasePageShell";
import {
  BulletList,
  DetailCard,
  PreformattedText,
} from "../components/DetailCard";
import Badge from "../components/Badge";
import { cryptoP2PShowcase, showcaseSummaries } from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "crypto-p2p-support-case-studies",
);

function CryptoP2PCaseStudiesPage() {
  return (
    <ShowcasePageShell
      title={cryptoP2PShowcase.title}
      intro={cryptoP2PShowcase.intro}
      skills={cryptoP2PShowcase.skills}
      repoHref={summary.repoHref}
      pdfHref={summary.pdfHref}
    >
      <div className="grid gap-6">
        {cryptoP2PShowcase.cases.map((caseStudy, index) => (
          <DetailCard
            key={caseStudy.title}
            eyebrow={`Case Study ${index + 1}`}
            title={caseStudy.title}
            className="break-inside-avoid"
          >
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <Badge tone="navy">Scenario</Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {caseStudy.scenario}
                  </p>
                </div>
                {caseStudy.risk ? (
                  <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                    <Badge tone="amber">Risk</Badge>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {caseStudy.risk}
                    </p>
                  </div>
                ) : null}
                <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                  <Badge tone="blue">Escalation</Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {caseStudy.escalation}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  Support process
                </p>
                <BulletList items={caseStudy.process} ordered />
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  Customer response
                </p>
                <PreformattedText>{caseStudy.customerResponse}</PreformattedText>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <Badge tone="navy">Internal note</Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {caseStudy.internalNote}
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <Badge tone="green">Learning</Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {caseStudy.learning}
                  </p>
                </div>
              </div>
            </div>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default CryptoP2PCaseStudiesPage;
