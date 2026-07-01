 import { NextRequest, NextResponse } from "next/server";

const COOKIE = "wdr_admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/")) {
    const session = req.cookies.get(COOKIE);
    if (!session?.value) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    const secret = process.env.AUTH_SALT || "fallback-change-in-production-32chars";
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    try {
      const { createHmac } = require("crypto");
      let valid = false;
      for (let i = 0; i <= 1; i++) {
        const day = Math.floor((Date.now() - i * 86400000) / 86400000).toString();
        const passHash = createHmac("sha256", secret).update(adminPassword).digest("hex");
        const expected = createHmac("sha256", secret).update(passHash + day).digest("hex");
        if (session.value === expected) { valid = true; break; }
      }
      if (!valid) return NextResponse.redirect(new URL("/admin", req.url));
    } catch {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path+"],
};