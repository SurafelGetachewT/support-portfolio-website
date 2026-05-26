import SectionHeader from "./SectionHeader";
import WorkflowCard from "./WorkflowCard";
import { troubleshootingWorkflows } from "../data/portfolioData";

function TroubleshootingWorkflows() {
  return (
    <section
      id="technical-support-workflows"
      className="section-padding border-y border-slate-200 bg-slate-50"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Troubleshooting Workflows"
          title="Structured workflows for diagnosing, documenting, and escalating issues."
          description="The goal is to collect the right details early, keep customers informed, and give internal teams clean escalation context."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {troubleshootingWorkflows.map((workflow) => (
            <WorkflowCard key={workflow.title} workflow={workflow} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TroubleshootingWorkflows;
