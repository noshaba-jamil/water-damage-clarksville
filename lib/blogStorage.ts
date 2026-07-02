  export interface BlogPost {
  id: string; slug: string; title: string; category: string;
  date: string; readTime: string; excerpt: string;
  metaTitle: string; metaDesc: string; focusKeyword: string;
  content: { heading: string; body: string }[];
  featuredImage?: string;
  published: boolean; createdAt: string; updatedAt: string; author: string;
}

const BASE_URL = process.env.KV_REST_API_URL!;
const TOKEN = process.env.KV_REST_API_TOKEN!;

async function kv(method: string, ...args: unknown[]): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/${method}/${args.map(a => encodeURIComponent(String(a))).join("/")}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const data = await res.json();
  return data.result;
}

async function kvSet(key: string, value: string): Promise<void> {
  await fetch(`${BASE_URL}/set/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ value }),
  });
}

async function kvGet(key: string): Promise<string | null> {
  const res = await fetch(`${BASE_URL}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const data = await res.json();
  return data.result;
}

async function kvDel(key: string): Promise<void> {
  await fetch(`${BASE_URL}/del/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
}

async function kvSmembers(key: string): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/smembers/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const data = await res.json();
  return data.result || [];
}

async function kvSadd(key: string, member: string): Promise<void> {
  await fetch(`${BASE_URL}/sadd/${encodeURIComponent(key)}/${encodeURIComponent(member)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
}

async function kvSrem(key: string, member: string): Promise<void> {
  await fetch(`${BASE_URL}/srem/${encodeURIComponent(key)}/${encodeURIComponent(member)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
}

// Fallback to local files if no KV env vars (localhost dev)
import fs from "fs";
import path from "path";

function isKvAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function getLocalDir(): string {
  const dir = path.join(process.cwd(), "data", "blog");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export async function getAllBlogPostsAsync(): Promise<BlogPost[]> {
  if (!isKvAvailable()) return getAllBlogPostsLocal();
  try {
    const ids = await kvSmembers("blog:ids");
    if (!ids.length) return [];
    const posts = await Promise.all(ids.map(async id => {
      const raw = await kvGet(`blog:post:${id}`);
      return raw ? JSON.parse(raw) as BlogPost : null;
    }));
    return posts.filter(Boolean).sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[];
  } catch { return []; }
}

export async function savePostAsync(post: BlogPost): Promise<void> {
  if (!isKvAvailable()) { savePostLocal(post); return; }
  await kvSet(`blog:post:${post.id}`, JSON.stringify(post));
  await kvSadd("blog:ids", post.id);
}

export async function deletePostAsync(id: string): Promise<void> {
  if (!isKvAvailable()) { deletePostLocal(id); return; }
  await kvDel(`blog:post:${id}`);
  await kvSrem("blog:ids", id);
}

export async function getPostByIdAsync(id: string): Promise<BlogPost | null> {
  if (!isKvAvailable()) return getPostByIdLocal(id);
  try {
    const raw = await kvGet(`blog:post:${id}`);
    return raw ? JSON.parse(raw) as BlogPost : null;
  } catch { return null; }
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPostsAsync();
  return posts.find(p => p.slug === slug) || null;
}

export async function getPublishedPostsAsync(): Promise<BlogPost[]> {
  const posts = await getAllBlogPostsAsync();
  return posts.filter(p => p.published);
}

// Local file fallbacks for development
function getAllBlogPostsLocal(): BlogPost[] {
  try {
    const dir = getLocalDir();
    return fs.readdirSync(dir).filter(f => f.endsWith(".json"))
      .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as BlogPost)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch { return []; }
}

function savePostLocal(post: BlogPost): void {
  fs.writeFileSync(path.join(getLocalDir(), `${post.id}.json`), JSON.stringify(post, null, 2));
}

function deletePostLocal(id: string): void {
  const fp = path.join(getLocalDir(), `${id}.json`);
  if (fs.existsSync(fp)) fs.unlinkSync(fp);
}

function getPostByIdLocal(id: string): BlogPost | null {
  try {
    const fp = path.join(getLocalDir(), `${id}.json`);
    if (!fs.existsSync(fp)) return null;
    return JSON.parse(fs.readFileSync(fp, "utf-8")) as BlogPost;
  } catch { return null; }
}

// Sync wrappers for pages that can't use async (server components)
export function getAllBlogPosts(): BlogPost[] { return getAllBlogPostsLocal(); }
export function getPublishedBlogPosts(): BlogPost[] { return getAllBlogPostsLocal().filter(p => p.published); }
export function getBlogPostById(id: string): BlogPost | null { return getPostByIdLocal(id); }
export function getBlogPostBySlug(slug: string): BlogPost | null { return getAllBlogPostsLocal().find(p => p.slug === slug) || null; }
export function saveBlogPost(post: BlogPost): void { savePostLocal(post); }
export function deleteBlogPost(id: string): void { deletePostLocal(id); }

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export function calculateReadTime(content: { heading: string; body: string }[]): string {
  const words = content.reduce((a, s) => a + s.body.split(" ").length + s.heading.split(" ").length, 0);
  return `${Math.ceil(words / 200)} min read`;
}
