import PageHero from "../components/PageHero";
import ShowcaseCard from "../components/ShowcaseCard";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { showcaseSummaries, sitePositioning } from "../data/showcaseData";

const workflow = [
  "Write showcase content",
  "Add it to the portfolio website",
  "Take screenshots for Upwork",
  "Export pages as PDF",
  "Upload PDFs to Upwork and LinkedIn",
  "Link GitHub repositories",
];

function Showcases() {
  return (
    <>
      <PageHero
        eyebrow="Showcases"
        title="One polished portfolio. Six professional support showcases."
        description={sitePositioning.subheadline}
      />

      <section className="section-padding bg-white">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Portfolio System"
            title="Built for recruiters, clients, LinkedIn, Upwork, and GitHub."
            description="Each showcase page includes a clear introduction, skills demonstrated, realistic examples, PDF export action, and a GitHub repository placeholder."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {showcaseSummaries.map((showcase) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} />
            ))}
          </div>

          <Card className="mt-8 p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <Badge tone="green">Recommended workflow</Badge>
                <h2 className="mt-4 text-2xl font-black text-navy-950">
                  Website first, PDFs second.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The website is the source of truth. Screenshots and PDFs can
                  be created from these pages for Upwork, LinkedIn, and job
                  applications.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-black text-brand-700">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-navy-950">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Showcases;
