import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border p-5 transition-colors hover:border-accent"
    >
      <h3 className="font-display text-lg font-normal text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {project.description}
      </p>
      <div className="mt-3 flex gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-tag-bg px-2 py-0.5 text-xs text-tag-text"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
