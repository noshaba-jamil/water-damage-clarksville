import fs from "fs";
import path from "path";

export interface BlogPost {
  id: string; slug: string; title: string; category: string;
  date: string; readTime: string; excerpt: string;
  metaTitle: string; metaDesc: string; focusKeyword: string;
  content: { heading: string; body: string }[];
  featuredImage?: string;
  published: boolean; createdAt: string; updatedAt: string; author: string;
}

// On Vercel, use /tmp for writable storage (ephemeral but works per-instance)
// For production, replace with a DB (Vercel KV, PlanetScale, Supabase, etc.)
function getBlogDir(): string {
  const isVercel = process.env.VERCEL === "1";
  if (isVercel) {
    const dir = "/tmp/blog";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    return dir;
  }
  const dir = path.join(process.cwd(), "data", "blog");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const dir = getBlogDir();
    return fs.readdirSync(dir)
      .filter(f => f.endsWith(".json"))
      .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as BlogPost)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch { return []; }
}

export function getPublishedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter(p => p.published);
}

export function getBlogPostById(id: string): BlogPost | null {
  try {
    const fp = path.join(getBlogDir(), `${id}.json`);
    if (!fs.existsSync(fp)) return null;
    return JSON.parse(fs.readFileSync(fp, "utf-8")) as BlogPost;
  } catch { return null; }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getAllBlogPosts().find(p => p.slug === slug) || null;
}

export function saveBlogPost(post: BlogPost): void {
  fs.writeFileSync(path.join(getBlogDir(), `${post.id}.json`), JSON.stringify(post, null, 2));
}

export function deleteBlogPost(id: string): void {
  const fp = path.join(getBlogDir(), `${id}.json`);
  if (fs.existsSync(fp)) fs.unlinkSync(fp);
}

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export function calculateReadTime(content: { heading: string; body: string }[]): string {
  const words = content.reduce((a, s) => a + s.body.split(" ").length + s.heading.split(" ").length, 0);
  return `${Math.ceil(words / 200)} min read`;
}
