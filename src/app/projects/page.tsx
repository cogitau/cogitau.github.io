import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-10 font-display text-3xl font-light tracking-tight text-foreground">
        Projects
      </h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
