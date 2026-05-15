"use client";

import { Phone, Linkedin, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

const contactItems = [
  {
    label: "Phone",
    value: siteData.contact.phone,
    href: siteData.contact.phoneHref,
    icon: <Phone size={15} />,
  },
  {
    label: "LinkedIn",
    value: siteData.contact.linkedin,
    href: siteData.contact.linkedinHref,
    icon: <Linkedin size={15} />,
  },
  {
    label: "Upwork",
    value: siteData.contact.upwork,
    href: siteData.contact.upworkHref,
    icon: <ExternalLink size={15} />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-4">
        <FadeIn>
          <div
            className="rounded-2xl border p-6 md:p-10"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Contact
            </p>
            <h2
              className="text-3xl md:text-4xl font-black mb-3 text-[var(--color-text)] max-w-[28ch]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Open to agency collaborations and Shopify projects
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-[52ch] text-sm leading-relaxed">
              For freelance, white-label, or direct Shopify work, the best way to reach me is through phone, LinkedIn, or Upwork.
            </p>

            <div className="divide-y" style={{ borderColor: "var(--color-divider)" }}>
              {contactItems.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between py-4 gap-4"
                >
                  <span className="text-sm text-[var(--color-text-muted)] font-medium">
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:opacity-70"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {c.icon}
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
