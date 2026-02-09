export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

export interface PostWithHtml extends Post {
  html: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}
