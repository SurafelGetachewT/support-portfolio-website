import PageHero from "../components/PageHero";
import ShowcaseCard from "../components/ShowcaseCard";
import SectionHeader from "../components/SectionHeader";
import { showcaseSummaries } from "../data/showcaseData";

function Showcases() {
  return (
    <>
      <PageHero
        eyebrow="Showcases"
        title="Support work samples that show how I handle real customer issues."
        description="Browse examples for ticket responses, crypto and P2P cases, knowledge base writing, troubleshooting workflows, support templates, and technical escalation."
      />

      <section className="section-padding bg-white">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Work Samples"
            title="Choose the support area you want to review."
            description="Each page shows the issue context, customer-facing response, internal note, escalation thinking, and the support skills demonstrated."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {showcaseSummaries.map((showcase) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcases;
