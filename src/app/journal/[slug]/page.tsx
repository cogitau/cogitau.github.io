import { getPostSlugs, getPostBySlug } from "@/lib/content";
import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/prose";

export function generateStaticParams() {
  return getPostSlugs("journal").map((slug) => ({ slug }));
}

export default async function JournalEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug("journal", slug);

  return (
    <article>
      <PostHeader frontmatter={post.frontmatter} />
      <Prose html={post.html} />
    </article>
  );
}
