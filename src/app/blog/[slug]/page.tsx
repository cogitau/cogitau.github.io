import { getPostSlugs, getPostBySlug } from "@/lib/content";
import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/prose";

export function generateStaticParams() {
  return getPostSlugs("blog").map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  return (
    <article>
      <PostHeader frontmatter={post.frontmatter} />
      <Prose html={post.html} />
    </article>
  );
}
