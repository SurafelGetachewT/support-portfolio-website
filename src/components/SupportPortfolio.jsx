import { Github, ArrowRight } from "lucide-react";
import Badge from "./Badge";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { iconMap } from "./icons";
import { supportPortfolioCards } from "../data/portfolioData";

function SupportPortfolio() {
  return (
    <section id="support-portfolio" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Support Portfolio"
          title="Practical support artifacts for real customer-facing work."
          description="This portfolio includes realistic examples of support communication, troubleshooting workflows, help center writing, crypto/P2P case studies, and support operations templates."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {supportPortfolioCards.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Card key={item.title} className="card-hover flex flex-col p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-5">
                  <Badge tone="blue">{item.skills}</Badge>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={item.detailHref}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={item.repoHref}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
                  >
                    GitHub Repo
                    <Github size={16} />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupportPortfolio;
