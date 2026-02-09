import type { PostFrontmatter } from "@/lib/types";

export function PostHeader({ frontmatter }: { frontmatter: PostFrontmatter }) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {frontmatter.title}
      </h1>
      <time className="mt-2 block text-sm text-zinc-400 dark:text-zinc-500">
        {frontmatter.date}
      </time>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="mt-3 flex gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
