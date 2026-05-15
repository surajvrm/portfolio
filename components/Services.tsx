"use client";

import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-4">
        <FadeIn className="mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-black text-[var(--color-text)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Execution across the Shopify stack
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-[44ch] text-sm leading-relaxed md:text-right">
              I support agencies and merchants with implementation-heavy work that needs reliability, speed, and clean handoff.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteData.services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article
                className="rounded-xl border p-5 h-full"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                  style={{ background: "var(--color-primary-soft)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-[var(--color-text)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {s.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
