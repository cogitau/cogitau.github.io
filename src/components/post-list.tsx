import Link from "next/link";
import type { Post } from "@/lib/types";

interface PostListProps {
  posts: Post[];
  basePath: string;
}

export function PostList({ posts, basePath }: PostListProps) {
  if (posts.length === 0) {
    return <p className="text-muted">Nothing here yet.</p>;
  }

  return (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`${basePath}/${post.slug}`} className="group block">
            <h3 className="font-display text-lg font-normal text-foreground transition-colors group-hover:text-accent">
              {post.frontmatter.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {post.frontmatter.description}
            </p>
            <time className="mt-1 block text-xs text-muted-foreground">
              {post.frontmatter.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
