"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function HeroForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    damageType: "",
    urgency: "emergency",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");

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
        body: JSON.stringify({ ...form, honeypot }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          firstName: "",
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
      <div className="hp-form" role="complementary" aria-label="Emergency assessment request form">
        <span className="hf-ey">Free Assessment</span>
        <div className="hf-t" style={{ color: "#4ADE80" }}>✓ Request Received!</div>
        <div className="hf-s">
          We&apos;ll call you back within 15 minutes. For immediate help, call{" "}
          <a href="tel:+19312712350" style={{ color: "#4ADE80" }}>(931) 271-2350</a>.
        </div>
      </div>
    );
  }

  return (
    <div className="hp-form" role="complementary" aria-label="Emergency assessment request form">
      <span className="hf-ey">Free Assessment</span>
      <div className="hf-t">Get Emergency Help</div>
      <div className="hf-s">We respond within 15 minutes. Emergencies answered immediately.</div>

      {status === "error" && (
        <div style={{
          background: "rgba(239,68,68,.1)",
          border: "1px solid rgba(239,68,68,.3)",
          borderRadius: 5,
          padding: "10px 12px",
          marginBottom: 12,
          fontFamily: "var(--font-inter)",
          fontSize: 12.5,
          color: "#FCA5A5",
        }}>
          Couldn&apos;t send your request. Please call us directly at{" "}
          <a href="tel:+19312712350" style={{ color: "#FCA5A5", fontWeight: 700 }}>
            (931) 271-2350
          </a>.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Honeypot — hidden from real users, catches bots */}
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

        <div className="hf-f">
          <input
            type="text" name="firstName" placeholder="Your full name"
            aria-label="Your full name" autoComplete="name"
            value={form.firstName} onChange={handleChange} required
          />
        </div>
        <div className="hf-f">
          <input
            type="tel" name="phone" placeholder="Phone number"
            aria-label="Your phone number" autoComplete="tel"
            value={form.phone} onChange={handleChange} required
          />
        </div>
        <div className="hf-f">
          <input
            type="email" name="email" placeholder="Email (optional)"
            aria-label="Your email" autoComplete="email"
            value={form.email} onChange={handleChange}
          />
        </div>
        <div className="hf-f">
          <select name="damageType" aria-label="Type of water damage" value={form.damageType} onChange={handleChange}>
            <option value="">Type of damage</option>
            <option value="water">Water Damage</option>
            <option value="flood">Flood</option>
            <option value="mold">Mold</option>
            <option value="sewage">Sewage Backup</option>
            <option value="storm">Storm Damage</option>
          </select>
        </div>
        <div className="hf-f">
          <select name="urgency" aria-label="Urgency" value={form.urgency} onChange={handleChange}>
            <option value="emergency">🚨 Emergency — Happening Now</option>
            <option value="24h">Within 24 Hours</option>
            <option value="sched">Scheduling Future Work</option>
          </select>
        </div>
        <div className="hf-f">
          <textarea
            name="description" placeholder="Brief description..."
            aria-label="Brief description of water damage"
            value={form.description} onChange={handleChange}
          />
        </div>
        <button className="hf-sub" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Request Emergency Help →"}
        </button>
        <div className="hf-note">Or call: <a href="tel:+19312712350">(931) 271-2350</a></div>
      </form>
    </div>
  );
}