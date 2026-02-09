import type { PostFrontmatter } from "@/lib/types";

export function PostHeader({ frontmatter }: { frontmatter: PostFrontmatter }) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-3xl font-light tracking-tight text-foreground">
        {frontmatter.title}
      </h1>
      <time className="mt-3 block text-sm text-muted">
        {frontmatter.date}
      </time>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="mt-4 flex gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="bg-tag-bg px-2 py-0.5 text-xs text-tag-text"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
