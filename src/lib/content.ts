import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import type { Post, PostFrontmatter, PostWithHtml } from "./types";

function contentDir(collection: string): string {
  return path.join(process.cwd(), "content", collection);
}

export function getPostSlugs(collection: string): string[] {
  return fs
    .readdirSync(contentDir(collection))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPosts(collection: string): Post[] {
  return getPostSlugs(collection)
    .map((slug) => {
      const raw = fs.readFileSync(
        path.join(contentDir(collection), `${slug}.md`),
        "utf-8",
      );
      const { data } = matter(raw);
      return { slug, frontmatter: data as PostFrontmatter };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export async function getPostBySlug(
  collection: string,
  slug: string,
): Promise<PostWithHtml> {
  const raw = fs.readFileSync(
    path.join(contentDir(collection), `${slug}.md`),
    "utf-8",
  );
  const { data, content } = matter(raw);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, { theme: "github-dark" })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    html: String(result),
  };
}
