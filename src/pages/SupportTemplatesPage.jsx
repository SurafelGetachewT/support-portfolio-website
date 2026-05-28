import ShowcasePageShell from "../components/ShowcasePageShell";
import { DetailCard, PreformattedText } from "../components/DetailCard";
import { showcaseSummaries, supportTemplatesShowcase } from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "support-operations-templates",
);

function SupportTemplatesPage() {
  return (
    <ShowcasePageShell
      title={supportTemplatesShowcase.title}
      intro={supportTemplatesShowcase.intro}
      skills={supportTemplatesShowcase.skills}
      repoHref={summary.repoHref}
      pdfHref={summary.pdfHref}
    >
      <div className="grid gap-6">
        {supportTemplatesShowcase.templates.map((template, index) => (
          <DetailCard
            key={template.title}
            eyebrow={`Template ${index + 1}`}
            title={template.title}
            className="break-inside-avoid"
          >
            <p className="mb-4 text-sm leading-7 text-slate-600">
              {template.description}
            </p>
            <PreformattedText>{template.body}</PreformattedText>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default SupportTemplatesPage;
