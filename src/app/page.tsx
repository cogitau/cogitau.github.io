import { getPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function Home() {
  const recentBlog = getPosts("blog").slice(0, 3);
  const recentJournal = getPosts("journal").slice(0, 3);

  return (
    <div>
      <section className="mb-20">
        <h1 className="font-display text-5xl font-light tracking-tight text-foreground">
          bryan
        </h1>
        <p className="mt-4 text-lg text-muted">
          Writing, reflection, and open source.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Recent posts
        </h2>
        <PostList posts={recentBlog} basePath="/blog" />
      </section>

      <section>
        <h2 className="mb-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Recent journal entries
        </h2>
        <PostList posts={recentJournal} basePath="/journal" />
      </section>
    </div>
  );
}
