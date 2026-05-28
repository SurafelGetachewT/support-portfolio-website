import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { feedbackProof, proofHighlights } from "../data/showcaseData";

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials / Feedback"
        title="Verified feedback and proof assets."
        description="This page is prepared for real client, manager, Upwork, or LinkedIn feedback. It does not use fake testimonials."
        primaryAction={{ label: "View Showcases", to: "/showcases" }}
      />
      <section className="section-padding bg-white">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Proof"
            title="Evidence-based support portfolio."
            description="Until verified testimonials are available, this section focuses on concrete proof assets: live showcase pages, PDF export, screenshots, resume, and public contact links."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {proofHighlights.map((item) => (
              <Card key={item.label} className="p-5">
                <Badge tone={item.tone}>{item.value}</Badge>
                <p className="mt-4 text-sm font-bold leading-6 text-navy-950">
                  {item.label}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {feedbackProof.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-xl font-black text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
