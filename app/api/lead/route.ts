import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, type, urgency, description } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Name and phone required." }, { status: 400 });
    }

    // Log lead (in production, send to CRM/email/webhook)
    console.log("NEW LEAD:", { name, phone, type, urgency, description, timestamp: new Date().toISOString() });

    // TODO: Add your webhook/email here:
    // await fetch(process.env.LEAD_WEBHOOK_URL, { method:"POST", body: JSON.stringify(body) })

    return NextResponse.json({ success: true, message: "We received your request. We'll call you within 5 minutes." });
  } catch {
    return NextResponse.json({ success: false, message: "Server error. Please call us directly." }, { status: 500 });
  }
}
