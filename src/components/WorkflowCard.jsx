import Card from "./Card";
import { iconMap } from "./icons";

function WorkflowCard({ workflow }) {
  const Icon = iconMap[workflow.icon];

  return (
    <Card className="card-hover p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-white">
          <Icon size={21} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy-950">{workflow.title}</h3>
          <ol className="mt-5 space-y-3">
            {workflow.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-xs font-bold text-brand-700">
                  {index + 1}
                </span>
                <span className="leading-6">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Card>
  );
}

export default WorkflowCard;
