 import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

const COOKIE = "wdr_admin_session";

function verifyToken(token: string): boolean {
  const secret = process.env.AUTH_SALT || "fallback-change-in-production-32chars";
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !token) return false;

  try {
    // Check today and yesterday (handles midnight edge case)
    for (let i = 0; i <= 1; i++) {
      const day = Math.floor((Date.now() - i * 86400000) / 86400000).toString();
      const passHash = createHmac("sha256", secret).update(adminPassword).digest("hex");
      const expected = createHmac("sha256", secret).update(passHash + day).digest("hex");
      if (token === expected) return true;
    }
  } catch { return false; }
  return false;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/")) {
    const session = req.cookies.get(COOKIE);
    if (!session?.value || !verifyToken(session.value)) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path+"],
};
