import { ExternalLink, Github } from "lucide-react";
import Badge from "./Badge";
import Card from "./Card";

function ProjectCard({ project }) {
  return (
    <Card id={project.id} className="card-hover flex flex-col p-6">
      <h3 className="text-xl font-bold text-navy-950">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {project.description}
      </p>
      <div className="mt-5">
        <Badge tone="navy">{project.skills}</Badge>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={project.liveHref}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
        <a
          href={project.repoHref}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
        >
          GitHub Repo
          <Github size={16} />
        </a>
      </div>
    </Card>
  );
}

export default ProjectCard;
