import { getPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <div>
      <h1 className="mb-10 font-display text-3xl font-light tracking-tight text-foreground">
        Blog
      </h1>
      <PostList posts={posts} basePath="/blog" />
    </div>
  );
}
