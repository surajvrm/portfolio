"use client";

import { ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-4">
        <FadeIn className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Selected work
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[var(--color-text)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Storefronts shaped around<br className="hidden md:block" /> real commerce needs
              </h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-[44ch] text-sm leading-relaxed md:text-right">
              These projects span product storytelling, custom sections, performance-focused theme work, and integration-heavy Shopify implementations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <article
                className="group rounded-2xl border p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div>
                  <h3
                    className="text-xl font-bold mb-1 text-[var(--color-text)]"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: "var(--color-surface-offset)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                  style={{ color: "var(--color-primary)" }}
                >
                  Visit project
                  <ExternalLink size={13} />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
