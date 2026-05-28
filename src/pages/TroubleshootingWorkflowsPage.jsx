import ShowcasePageShell from "../components/ShowcasePageShell";
import { BulletList, DetailCard } from "../components/DetailCard";
import Badge from "../components/Badge";
import {
  showcaseSummaries,
  troubleshootingShowcase,
} from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "technical-troubleshooting-workflows",
);

function TroubleshootingWorkflowsPage() {
  return (
    <ShowcasePageShell
      title={troubleshootingShowcase.title}
      intro={troubleshootingShowcase.intro}
      skills={troubleshootingShowcase.skills}
      repoHref={summary.repoHref}
    >
      <div className="grid gap-6">
        {troubleshootingShowcase.workflows.map((workflow, index) => (
          <DetailCard
            key={workflow.title}
            eyebrow={`Workflow ${index + 1}`}
            title={workflow.title}
            className="break-inside-avoid"
          >
            <div className="grid gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-base font-black text-navy-950">
                  First checks
                </h4>
                <div className="mt-3">
                  <BulletList items={workflow.firstChecks} />
                </div>
              </div>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                <h4 className="text-base font-black text-navy-950">
                  Questions to ask
                </h4>
                <div className="mt-3">
                  <BulletList items={workflow.questions} />
                </div>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                <h4 className="text-base font-black text-navy-950">
                  Possible causes
                </h4>
                <div className="mt-3">
                  <BulletList items={workflow.possibleCauses} />
                </div>
              </div>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                <h4 className="text-base font-black text-navy-950">Tools</h4>
                <div className="mt-3">
                  <BulletList items={workflow.tools} />
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-navy-950/10 bg-navy-950 p-4 text-white">
              <Badge tone="blue" className="border-white/10 bg-white/10 text-white">
                Escalation rule
              </Badge>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                {workflow.escalationRule}
              </p>
            </div>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default TroubleshootingWorkflowsPage;
