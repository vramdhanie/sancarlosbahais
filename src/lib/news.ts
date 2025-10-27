import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const newsDirectory = path.join(process.cwd(), "content/news");

export function getAllNewsPosts(): NewsPost[] {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(newsDirectory)) {
    fs.mkdirSync(newsDirectory, { recursive: true });
    return [];
  }

  // Read all MDX files from the news directory
  const fileNames = fs.readdirSync(newsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        content,
      } as NewsPost;
    });

  // Sort posts by date in reverse order (latest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getNewsPost(slug: string): NewsPost | null {
  const fullPath = path.join(newsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || "",
    content,
  } as NewsPost;
}

export function getRecentNewsPosts(count: number = 3): NewsPost[] {
  const allPosts = getAllNewsPosts();
  return allPosts.slice(0, count);
}
