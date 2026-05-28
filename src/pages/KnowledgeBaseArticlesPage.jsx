import ShowcasePageShell from "../components/ShowcasePageShell";
import { BulletList, DetailCard } from "../components/DetailCard";
import Badge from "../components/Badge";
import { knowledgeBaseShowcase, showcaseSummaries } from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "knowledge-base-articles",
);

function KnowledgeBaseArticlesPage() {
  return (
    <ShowcasePageShell
      title={knowledgeBaseShowcase.title}
      intro={knowledgeBaseShowcase.intro}
      skills={knowledgeBaseShowcase.skills}
      repoHref={summary.repoHref}
    >
      <div className="grid gap-6">
        {knowledgeBaseShowcase.articles.map((article, index) => (
          <DetailCard
            key={article.title}
            eyebrow={`Article ${index + 1}`}
            title={article.title}
            className="break-inside-avoid"
          >
            <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
              <Badge tone="blue">Who this is for</Badge>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {article.audience}
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {article.sections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <h4 className="text-base font-black text-navy-950">
                    {section.heading}
                  </h4>
                  {section.items ? (
                    <div className="mt-3">
                      <BulletList items={section.items} ordered={section.heading === "Steps"} />
                    </div>
                  ) : null}
                  {section.body ? (
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {section.body}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default KnowledgeBaseArticlesPage;
