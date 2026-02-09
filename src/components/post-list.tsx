import Link from "next/link";
import type { Post } from "@/lib/types";

interface PostListProps {
  posts: Post[];
  basePath: string;
}

export function PostList({ posts, basePath }: PostListProps) {
  if (posts.length === 0) {
    return <p className="text-zinc-500">Nothing here yet.</p>;
  }

  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`${basePath}/${post.slug}`} className="group block">
            <h3 className="font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              {post.frontmatter.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {post.frontmatter.description}
            </p>
            <time className="mt-1 block text-xs text-zinc-400 dark:text-zinc-500">
              {post.frontmatter.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
