import ShowcasePageShell from "../components/ShowcasePageShell";
import {
  BulletList,
  DetailCard,
  PreformattedText,
} from "../components/DetailCard";
import Badge from "../components/Badge";
import {
  showcaseSummaries,
  technicalSupportShowcase,
} from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "technical-support-engineer-examples",
);

function TechnicalSupportExamplesPage() {
  return (
    <ShowcasePageShell
      title={technicalSupportShowcase.title}
      intro={technicalSupportShowcase.intro}
      skills={technicalSupportShowcase.skills}
      repoHref={summary.repoHref}
    >
      <div className="grid gap-6">
        {technicalSupportShowcase.examples.map((example, index) => (
          <DetailCard
            key={example.title}
            eyebrow={`Example ${index + 1}`}
            title={example.title}
            className="break-inside-avoid"
          >
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <Badge tone="navy">Issue</Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {example.issue}
                  </p>
                </div>
                {example.impact ? (
                  <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                    <Badge tone="amber">User impact</Badge>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {example.impact}
                    </p>
                  </div>
                ) : null}
                {example.escalation ? (
                  <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                    <Badge tone="blue">Escalation</Badge>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {example.escalation}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {example.initialQuestions ? (
                  <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                    <h4 className="text-base font-black text-navy-950">
                      Initial questions
                    </h4>
                    <div className="mt-3">
                      <BulletList items={example.initialQuestions} />
                    </div>
                  </div>
                ) : null}
                {example.possibleRootCauses ? (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="text-base font-black text-navy-950">
                      Possible root causes
                    </h4>
                    <div className="mt-3">
                      <BulletList items={example.possibleRootCauses} />
                    </div>
                  </div>
                ) : null}
                {example.process ? (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 md:col-span-2">
                    <h4 className="text-base font-black text-navy-950">
                      Support process
                    </h4>
                    <div className="mt-3">
                      <BulletList items={example.process} ordered />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  Customer response
                </p>
                <PreformattedText>{example.customerResponse}</PreformattedText>
              </div>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                <Badge tone="green">Engineering note</Badge>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {example.engineeringNote}
                </p>
              </div>
            </div>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default TechnicalSupportExamplesPage;
