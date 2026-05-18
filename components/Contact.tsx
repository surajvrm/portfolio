"use client";

import { Phone, Linkedin, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

const contactItems = [
  {
    label: "Phone",
    value: siteData.contact.phone,
    href: siteData.contact.phoneHref,
    icon: <Phone size={18} />,
  },
  {
    label: "LinkedIn",
    value: siteData.contact.linkedin,
    href: siteData.contact.linkedinHref,
    icon: <Linkedin size={18} />,
  },
  {
    label: "Upwork",
    value: siteData.contact.upwork,
    href: siteData.contact.upworkHref,
    icon: <ExternalLink size={18} />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <FadeIn>
          <div className="rounded-3xl border border-[var(--color-border)] p-10 md:p-16 bg-[var(--color-surface)]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-4">
              Let's build together
            </h2>
            <p className="text-[var(--color-text-muted)] text-base md:text-lg mx-auto leading-relaxed mb-10 max-w-xl">
              Open to agency collaborations, white-label development, and direct Shopify projects. I'm ready to bring your e-commerce vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-offset)] hover:border-[var(--color-divider)] transition-all text-sm font-semibold text-[var(--color-text)] hover:-translate-y-0.5 shadow-sm"
                >
                  {c.icon}
                  {c.value}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
