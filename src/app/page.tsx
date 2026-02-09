import { getPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function Home() {
  const recentBlog = getPosts("blog").slice(0, 3);
  const recentJournal = getPosts("journal").slice(0, 3);

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          cogitau
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Writing, reflection, and open source.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Recent posts
        </h2>
        <PostList posts={recentBlog} basePath="/blog" />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Recent journal entries
        </h2>
        <PostList posts={recentJournal} basePath="/journal" />
      </section>
    </div>
  );
}
