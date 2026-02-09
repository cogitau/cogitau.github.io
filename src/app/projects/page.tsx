import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Projects
      </h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
