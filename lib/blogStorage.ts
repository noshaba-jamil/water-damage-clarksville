 export interface BlogPost {
   id: string; slug: string; title: string; category: string;
   date: string; readTime: string; excerpt: string;
   metaTitle: string; metaDesc: string; focusKeyword: string;
   content: { heading: string; body: string }[];
   featuredImage?: string;
   published: boolean; createdAt: string; updatedAt: string; author: string;
 }
 
 // ── KV (Upstash REST API) ──────────────────────────────────────────────────
 function getKvConfig() {
   return {
     url: process.env.KV_REST_API_URL || "",
     token: process.env.KV_REST_API_TOKEN || "",
   };
 }
 
 function isKvAvailable(): boolean {
   const { url, token } = getKvConfig();
   return !!(url && token);
 }
 
 async function kvGet(key: string): Promise<string | null> {
   const { url, token } = getKvConfig();
   const res = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
     headers: { Authorization: `Bearer ${token}` },
     cache: "no-store",
   });
   const data = await res.json();
   return data.result ?? null;
 }
 
 async function kvSet(key: string, value: string): Promise<void> {
   const { url, token } = getKvConfig();
   await fetch(`${url}/set/${encodeURIComponent(key)}`, {
     method: "POST",
     headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
     body: JSON.stringify({ value }),
     cache: "no-store",
   });
 }
 
 async function kvDel(key: string): Promise<void> {
   const { url, token } = getKvConfig();
   await fetch(`${url}/del/${encodeURIComponent(key)}`, {
     method: "POST",
     headers: { Authorization: `Bearer ${token}` },
     cache: "no-store",
   });
 }
 
 async function kvSmembers(key: string): Promise<string[]> {
   const { url, token } = getKvConfig();
   const res = await fetch(`${url}/smembers/${encodeURIComponent(key)}`, {
     headers: { Authorization: `Bearer ${token}` },
     cache: "no-store",
   });
   const data = await res.json();
   return Array.isArray(data.result) ? data.result : [];
 }
 
 async function kvSadd(key: string, member: string): Promise<void> {
   const { url, token } = getKvConfig();
   await fetch(`${url}/sadd/${encodeURIComponent(key)}/${encodeURIComponent(member)}`, {
     method: "POST",
     headers: { Authorization: `Bearer ${token}` },
     cache: "no-store",
   });
 }
 
 async function kvSrem(key: string, member: string): Promise<void> {
   const { url, token } = getKvConfig();
   await fetch(`${url}/srem/${encodeURIComponent(key)}/${encodeURIComponent(member)}`, {
     method: "POST",
     headers: { Authorization: `Bearer ${token}` },
     cache: "no-store",
   });
 }
 
 // ── Async functions (use KV on Vercel, local files on dev) ─────────────────
 export async function getAllBlogPostsAsync(): Promise<BlogPost[]> {
   if (!isKvAvailable()) return getAllBlogPostsLocal();
   try {
     const ids = await kvSmembers("blog:ids");
     if (!ids.length) return [];
     const posts = await Promise.all(
       ids.map(async (id) => {
         const raw = await kvGet(`blog:post:${id}`);
         if (!raw) return null;
         try { return JSON.parse(raw) as BlogPost; } catch { return null; }
       })
     );
     return (posts.filter(Boolean) as BlogPost[])
       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
   } catch (e) {
     console.error("KV getAllBlogPostsAsync error:", e);
     return [];
   }
 }
 
 export async function getPublishedPostsAsync(): Promise<BlogPost[]> {
   const posts = await getAllBlogPostsAsync();
   return posts.filter(p => p.published);
 }
 
 export async function getPostByIdAsync(id: string): Promise<BlogPost | null> {
   if (!isKvAvailable()) return getPostByIdLocal(id);
   try {
     const raw = await kvGet(`blog:post:${id}`);
     if (!raw) return null;
     return JSON.parse(raw) as BlogPost;
   } catch { return null; }
 }
 
 export async function getPostBySlugAsync(slug: string): Promise<BlogPost | null> {
   const posts = await getAllBlogPostsAsync();
   return posts.find(p => p.slug === slug) || null;
 }
 
 export async function savePostAsync(post: BlogPost): Promise<void> {
   if (!isKvAvailable()) { savePostLocal(post); return; }
   try {
     await kvSet(`blog:post:${post.id}`, JSON.stringify(post));
     await kvSadd("blog:ids", post.id);
   } catch (e) {
     console.error("KV savePostAsync error:", e);
     throw e;
   }
 }
 
 export async function deletePostAsync(id: string): Promise<void> {
   if (!isKvAvailable()) { deletePostLocal(id); return; }
   try {
     await kvDel(`blog:post:${id}`);
     await kvSrem("blog:ids", id);
   } catch (e) {
     console.error("KV deletePostAsync error:", e);
   }
 }
 
 // ── Local file storage (localhost dev fallback) ────────────────────────────
 import fs from "fs";
 import path from "path";
 
 function getLocalDir(): string {
   const dir = path.join(process.cwd(), "data", "blog");
   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
   return dir;
 }
 
 function getAllBlogPostsLocal(): BlogPost[] {
   try {
     const dir = getLocalDir();
     return fs.readdirSync(dir)
       .filter(f => f.endsWith(".json"))
       .map(f => {
         try { return JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as BlogPost; }
         catch { return null; }
       })
       .filter(Boolean)
       .sort((a, b) => new Date((b as BlogPost).date).getTime() - new Date((a as BlogPost).date).getTime()) as BlogPost[];
   } catch { return []; }
 }
 
 function getPostByIdLocal(id: string): BlogPost | null {
   try {
     const fp = path.join(getLocalDir(), `${id}.json`);
     if (!fs.existsSync(fp)) return null;
     return JSON.parse(fs.readFileSync(fp, "utf-8")) as BlogPost;
   } catch { return null; }
 }
 
 function savePostLocal(post: BlogPost): void {
   fs.writeFileSync(path.join(getLocalDir(), `${post.id}.json`), JSON.stringify(post, null, 2));
 }
 
 function deletePostLocal(id: string): void {
   const fp = path.join(getLocalDir(), `${id}.json`);
   if (fs.existsSync(fp)) fs.unlinkSync(fp);
 }
 
 // ── Sync wrappers (for server components that can't be async) ──────────────
 export function getAllBlogPosts(): BlogPost[] { return getAllBlogPostsLocal(); }
 export function getPublishedBlogPosts(): BlogPost[] { return getAllBlogPostsLocal().filter(p => p.published); }
 export function getBlogPostById(id: string): BlogPost | null { return getPostByIdLocal(id); }
 export function getBlogPostBySlug(slug: string): BlogPost | null { return getAllBlogPostsLocal().find(p => p.slug === slug) || null; }
 export function saveBlogPost(post: BlogPost): void { savePostLocal(post); }
 export function deleteBlogPost(id: string): void { deletePostLocal(id); }
 
 // ── Utilities ──────────────────────────────────────────────────────────────
 export function generateSlug(title: string): string {
   return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
 }
 
 export function calculateReadTime(content: { heading: string; body: string }[]): string {
   const words = content.reduce((a, s) => a + s.body.split(" ").length + s.heading.split(" ").length, 0);
   return `${Math.ceil(words / 200)} min read`;
 }
 