 import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (per IP) — good enough for low-medium traffic.
// For high traffic, swap this for Upstash Redis rate limiting.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const PHONE_REGEX = /^[\d\s()+-]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // --- Rate limit by IP ---
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please call us directly." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, phone, email, damageType, urgency, description, honeypot } = body;

    // --- Honeypot: bots fill hidden fields, humans don't ---
    if (honeypot) {
      return NextResponse.json({ success: true }); // silently pretend success to bots
    }

    // --- Server-side validation ---
    if (!firstName || typeof firstName !== "string" || firstName.length > 100) {
      return NextResponse.json({ success: false, error: "Valid name is required." }, { status: 400 });
    }
    if (!phone || !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ success: false, error: "Valid phone number is required." }, { status: 400 });
    }
    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format." }, { status: 400 });
    }
    if (description && description.length > 2000) {
      return NextResponse.json({ success: false, error: "Description too long." }, { status: 400 });
    }

    const allowedDamageTypes = ["water", "flood", "mold", "sewage", "storm", ""];
    const allowedUrgency = ["emergency", "24h", "sched"];
    if (!allowedDamageTypes.includes(damageType) || !allowedUrgency.includes(urgency)) {
      return NextResponse.json({ success: false, error: "Invalid form data." }, { status: 400 });
    }

    // --- Sanitize before putting into HTML email ---
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName || ""),
      phone: escapeHtml(phone),
      email: escapeHtml(email || ""),
      damageType: escapeHtml(damageType || "Not specified"),
      urgency: escapeHtml(urgency),
      description: escapeHtml(description || "None"),
    };

    await resend.emails.send({
       from: "onboarding@resend.dev",
to: "vulecturehub1083@gmail.com",
      replyTo: email && EMAIL_REGEX.test(email) ? email : undefined,
      subject: `New Lead${safe.urgency === "emergency" ? " — 🚨 EMERGENCY" : ""}: ${safe.firstName} ${safe.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> ${safe.email || "Not provided"}</p>
        <p><strong>Damage Type:</strong> ${safe.damageType}</p>
        <p><strong>Urgency:</strong> ${safe.urgency}</p>
        <p><strong>Description:</strong> ${safe.description}</p>
        <hr/>
        <p style="color:#888;font-size:12px">Submitted from IP: ${escapeHtml(ip)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead email failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send. Please call us instead." },
      { status: 500 }
    );
  }
}