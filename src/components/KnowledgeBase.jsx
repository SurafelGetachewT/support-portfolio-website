import { ArrowRight, FileText } from "lucide-react";
import Badge from "./Badge";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { knowledgeBaseArticles } from "../data/portfolioData";

function KnowledgeBase() {
  return (
    <section id="knowledge-base-articles" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Knowledge Base Articles"
          title="Help center content designed to reduce confusion and repeat tickets."
          description="Article concepts are written around common account, crypto, P2P, and technical support questions."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeBaseArticles.map((article) => (
            <Card key={article.title} className="card-hover p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <FileText size={21} />
                </div>
                <Badge tone="navy">{article.category}</Badge>
              </div>
              <h3 className="text-xl font-bold text-navy-950">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {article.summary}
              </p>
              <a
                href="#"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
              >
                Read Article
                <ArrowRight size={16} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KnowledgeBase;
