import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding border-y border-slate-200 bg-slate-50"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Support projects ready to publish and connect to GitHub."
          description="Project cards are driven by one data file so live links and repository links can be updated quickly later."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
