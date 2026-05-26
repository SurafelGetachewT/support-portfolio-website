import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { tools } from "../data/portfolioData";

function ToolsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Tools"
          title="Support tools, communication channels, and documentation systems."
          description="A practical toolset for ticket handling, remote collaboration, help center writing, crypto support research, and support operations."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {tools.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-bold text-navy-950">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 size={15} className="text-brand-600" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
