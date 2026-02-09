import { getPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function JournalPage() {
  const posts = getPosts("journal");

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Journal
      </h1>
      <PostList posts={posts} basePath="/journal" />
    </div>
  );
}
