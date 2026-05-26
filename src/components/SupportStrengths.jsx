import Badge from "./Badge";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { iconMap } from "./icons";
import { supportStrengths } from "../data/portfolioData";

function SupportStrengths() {
  return (
    <section className="section-padding border-y border-slate-200 bg-slate-50">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Support Strengths"
          title="Customer support skills built around clarity, speed, and care."
          description="The portfolio focuses on practical support work: user communication, technical diagnosis, escalation notes, support documentation, and crypto/P2P case handling."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {supportStrengths.map((strength, index) => {
            const Icon = iconMap[strength.icon];
            const tones = ["blue", "navy", "green", "blue", "amber"];

            return (
              <Card
                key={strength.title}
                className="card-hover relative overflow-hidden p-5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-950">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {strength.description}
                </p>
                <Badge tone={tones[index]} className="mt-5">
                  Support-ready
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupportStrengths;
