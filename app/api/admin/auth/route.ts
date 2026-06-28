import { NextRequest, NextResponse } from "next/server";
import { validatePassword, generateSessionToken } from "@/lib/auth";

const attempts = new Map<string, { count: number; first: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const att = attempts.get(ip);

    if (att && now - att.first < 900000 && att.count >= 5) {
      const rem = Math.ceil((900000 - (now - att.first)) / 60000);
      return NextResponse.json({ success: false, message: `Too many attempts. Try again in ${rem} min.` }, { status: 429 });
    }
    if (att && now - att.first >= 900000) attempts.delete(ip);

    const body = await req.json();
    const { password } = body;
    if (!password) return NextResponse.json({ success: false, message: "Password required." }, { status: 400 });

    if (!validatePassword(password)) {
      const c = attempts.get(ip) || { count: 0, first: now };
      attempts.set(ip, { count: c.count + 1, first: c.first });
      const remaining = 5 - (c.count + 1);
      return NextResponse.json({ success: false, message: remaining > 0 ? `Invalid password. ${remaining} attempts left.` : "Account locked for 15 minutes." }, { status: 401 });
    }

    attempts.delete(ip);
    // Generate deterministic token from password — works across serverless instances
    const token = generateSessionToken(password);

    const res = NextResponse.json({ success: true });
    res.cookies.set("wdr_admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("wdr_admin_session", "", { maxAge: 0, path: "/" });
  return res;
}
