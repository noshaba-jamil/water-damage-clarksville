import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

const COOKIE = "wdr_admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/")) {
    const session = req.cookies.get(COOKIE);
    if (!session?.value || !verifySessionToken(session.value)) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path+"],
};
