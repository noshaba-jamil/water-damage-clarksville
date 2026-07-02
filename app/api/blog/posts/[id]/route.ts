 import { NextRequest, NextResponse } from "next/server";
import { getPostByIdAsync, savePostAsync, deletePostAsync } from "@/lib/blogStorage";
import { verifyAdminAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const post = await getPostByIdAsync(params.id);
  if (!post) return NextResponse.json({ success: false, message: "Not found." }, { status: 404 });
  return NextResponse.json({ success: true, post });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });

  const post = await getPostByIdAsync(params.id);
  if (!post) return NextResponse.json({ success: false, message: "Not found." }, { status: 404 });

  const body = await req.json();
  const updated = { ...post, ...body, updatedAt: new Date().toISOString() };
  await savePostAsync(updated);
  return NextResponse.json({ success: true, post: updated });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });

  await deletePostAsync(params.id);
  return NextResponse.json({ success: true });
}
