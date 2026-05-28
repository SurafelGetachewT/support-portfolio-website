import { Github, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Card from "./Card";
import { iconMap } from "./icons";

function ShowcaseCard({ showcase, compact = false }) {
  const Icon = iconMap[showcase.icon] ?? iconMap.FileText;

  return (
    <Card className="card-hover flex h-full flex-col p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Icon size={22} />
        </div>
        <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-500">
          Showcase
        </span>
      </div>

      <h3 className="text-xl font-black leading-tight text-navy-950">
        {showcase.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {showcase.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {showcase.skills.slice(0, compact ? 3 : 4).map((skill, index) => (
          <Badge key={skill} tone={index % 2 === 0 ? "blue" : "navy"}>
            {skill}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
        <Link
          to={showcase.route}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
        >
          View Showcase
          <ArrowRight size={16} />
        </Link>
        <Link
          to={`${showcase.route}?print=1`}
          className="focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg border border-brand-100 bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:border-brand-200 hover:bg-brand-100"
        >
          Download PDF
          <Download size={16} />
        </Link>
        {showcase.repoHref === "#" ? (
          <span className="no-print inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-400">
            GitHub Repo
            <Github size={16} />
          </span>
        ) : (
          <a
            href={showcase.repoHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
          >
            GitHub Repo
            <Github size={16} />
          </a>
        )}
      </div>
    </Card>
  );
}

export default ShowcaseCard;
