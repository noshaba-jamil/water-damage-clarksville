import { NextRequest, NextResponse } from "next/server";
import { getBlogPostById, saveBlogPost, deleteBlogPost } from "@/lib/blogStorage";
import { verifyAdminAuth } from "@/lib/auth";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id);
  if (!post) return NextResponse.json({ success: false, message: "Not found." }, { status: 404 });
  return NextResponse.json({ success: true, post });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });

  const post = getBlogPostById(params.id);
  if (!post) return NextResponse.json({ success: false, message: "Not found." }, { status: 404 });

  const body = await req.json();
  const updated = { ...post, ...body, updatedAt: new Date().toISOString() };
  saveBlogPost(updated);
  return NextResponse.json({ success: true, post: updated });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });

  deleteBlogPost(params.id);
  return NextResponse.json({ success: true });
}
