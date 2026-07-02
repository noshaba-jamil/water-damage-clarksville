 import { NextRequest, NextResponse } from "next/server";
import { getAllBlogPostsAsync, savePostAsync, generateSlug, calculateReadTime } from "@/lib/blogStorage";
import { verifyAdminAuth } from "@/lib/auth";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const posts = await getAllBlogPostsAsync();
    return NextResponse.json({ success: true, posts });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to load posts." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAuth = await verifyAdminAuth();
    if (!isAuth) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });

    const body = await req.json();
    const { title, slug, category, excerpt, metaTitle, metaDesc, focusKeyword, date, content, featuredImage, published, author } = body;

    if (!title || !content?.length) {
      return NextResponse.json({ success: false, message: "Title and content required." }, { status: 400 });
    }

    const now = new Date().toISOString();
    const post = {
      id: crypto.randomUUID(),
      title,
      slug: slug || generateSlug(title),
      category: category || "Water Damage",
      excerpt: excerpt || "",
      metaTitle: metaTitle || title,
      metaDesc: metaDesc || excerpt || "",
      focusKeyword: focusKeyword || "",
      date: date || new Date().toISOString().split("T")[0],
      readTime: calculateReadTime(content),
      content,
      featuredImage: featuredImage || "",
      published: published ?? false,
      author: author || "Clarksville Restoration Team",
      createdAt: now,
      updatedAt: now,
    };

    await savePostAsync(post);
    return NextResponse.json({ success: true, post });
  } catch (e) {
    console.error("Blog save error:", e);
    return NextResponse.json({ success: false, message: "Failed to save post." }, { status: 500 });
  }
}
