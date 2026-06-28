import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const COOKIE = "wdr_admin_session";

function getSecret(): string {
  return process.env.AUTH_SALT || "fallback-change-in-production-32chars";
}

export function hashPassword(password: string): string {
  return crypto.createHmac("sha256", getSecret()).update(password).digest("hex");
}

export function generateSessionToken(password: string): string {
  // Token = HMAC of password hash + timestamp day (valid 24h, no DB needed)
  const day = Math.floor(Date.now() / 86400000).toString();
  const hash = hashPassword(password);
  return crypto.createHmac("sha256", getSecret()).update(hash + day).digest("hex");
}

export function verifySessionToken(token: string): boolean {
  const secret = getSecret();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !token) return false;
  // Check today and yesterday (handles midnight edge case)
  for (let i = 0; i <= 1; i++) {
    const day = Math.floor((Date.now() - i * 86400000) / 86400000).toString();
    const hash = hashPassword(adminPassword);
    const expected = crypto.createHmac("sha256", secret).update(hash + day).digest("hex");
    try {
      if (crypto.timingSafeEqual(Buffer.from(token, "hex"), Buffer.from(expected, "hex"))) return true;
    } catch { continue; }
  }
  return false;
}

export async function verifyAdminAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(COOKIE);
    if (!session?.value) return false;
    return verifySessionToken(session.value);
  } catch { return false; }
}

export async function requireAdminAuth(): Promise<void> {
  const isAuthed = await verifyAdminAuth();
  if (!isAuthed) redirect("/admin");
}

export function validatePassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  try {
    const a = hashPassword(input);
    const b = hashPassword(adminPassword);
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch { return false; }
}
