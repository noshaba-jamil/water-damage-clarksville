"use client";
import { useState, FormEvent } from "react";


type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    damageType: "",
    urgency: "emergency",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          damageType: "",
          urgency: "emergency",
          description: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 15, color: "#4ADE80", fontWeight: 600, marginBottom: 8 }}>
          ✓ Request received!
        </div>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13.5, color: "rgba(255,255,255,.5)" }}>
          We&apos;ll get back to you within 15 minutes. For immediate help, call{" "}
          <a href="tel:+19312712350" style={{ color: "#4ADE80", fontWeight: 600 }}>
            (931) 271-2350
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form">
      {status === "error" && (
        <div
          style={{
            background: "rgba(239,68,68,.1)",
            border: "1px solid rgba(239,68,68,.3)",
            borderRadius: 6,
            padding: "12px 14px",
            marginBottom: 16,
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#FCA5A5",
          }}
        >
          Something went wrong sending your request. Please call us directly at{" "}
          <a href="tel:+19312712350" style={{ color: "#FCA5A5", fontWeight: 700 }}>
            (931) 271-2350
          </a>.
        </div>
      )}

      <div className="cf-row">
        <div className="cf-f">
          <label htmlFor="fn">First Name</label>
          <input id="fn" name="firstName" type="text" placeholder="John" autoComplete="given-name"
            value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="cf-f">
          <label htmlFor="ln">Last Name</label>
          <input id="ln" name="lastName" type="text" placeholder="Smith" autoComplete="family-name"
            value={form.lastName} onChange={handleChange} />
        </div>
      </div>
<input
  type="text"
  name="website"
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  style={{ position: "absolute", left: "-9999px" }}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>
      <div className="cf-f">
        <label htmlFor="ph">Phone Number *</label>
        <input id="ph" name="phone" type="tel" placeholder="(931) 271-2350" autoComplete="tel"
          value={form.phone} onChange={handleChange} required />
      </div>

      <div className="cf-f">
        <label htmlFor="em">Email Address</label>
        <input id="em" name="email" type="email" placeholder="john@example.com" autoComplete="email"
          value={form.email} onChange={handleChange} />
      </div>

      <div className="cf-row">
        <div className="cf-f">
          <label htmlFor="dt">Type of Damage</label>
          <select id="dt" name="damageType" value={form.damageType} onChange={handleChange}
            aria-label="Type of water damage">
            <option value="">Select...</option>
            <option value="water">Water Damage</option>
            <option value="flood">Flood</option>
            <option value="mold">Mold</option>
            <option value="sewage">Sewage Backup</option>
            <option value="storm">Storm Damage</option>
          </select>
        </div>
        <div className="cf-f">
          <label htmlFor="urg">Urgency</label>
          <select id="urg" name="urgency" value={form.urgency} onChange={handleChange}
            aria-label="Urgency level">
            <option value="emergency">🚨 Emergency NOW</option>
            <option value="24h">Within 24 Hours</option>
            <option value="sched">Scheduling</option>
          </select>
        </div>
      </div>

      <div className="cf-f">
        <label htmlFor="desc">Description (optional)</label>
        <textarea id="desc" name="description" placeholder="Describe what happened..."
          value={form.description} onChange={handleChange} aria-label="Description" />
      </div>

      <button className="cf-btn" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request Assessment →"}
      </button>
      <div className="cf-note">✓ We respect your privacy. No spam, ever.</div>
    </form>
  );
}