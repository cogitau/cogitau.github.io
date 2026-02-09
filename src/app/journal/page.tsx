import { getPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function JournalPage() {
  const posts = getPosts("journal");

  return (
    <div>
      <h1 className="mb-10 font-display text-3xl font-light tracking-tight text-foreground">
        Journal
      </h1>
      <PostList posts={posts} basePath="/journal" />
    </div>
  );
}
