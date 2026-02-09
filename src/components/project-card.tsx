import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-3 flex gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
