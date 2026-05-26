import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { experienceCards } from "../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-y border-slate-200 bg-slate-50"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Experience presented through support outcomes and responsibilities."
          description="Each role highlights the support problems handled, the workflows involved, and the customer-facing skills demonstrated."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {experienceCards.map((experience) => (
            <ExperienceCard key={experience.role} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
