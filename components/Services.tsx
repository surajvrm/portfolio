"use client";

import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-[1000px] mx-auto px-4">
        <FadeIn className="mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]">
              Execution across the Shopify stack
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl leading-relaxed">
              I support agencies and merchants with implementation-heavy work that needs reliability, speed, and clean handoff.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <article
                className="rounded-2xl p-6 md:p-8 h-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-divider)] transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 bg-[var(--color-surface-offset)] border border-[var(--color-divider)] text-[var(--color-text)] shadow-sm group-hover:scale-105 transition-transform"
                >
                  {s.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-tight text-[var(--color-text)]">
                  {s.title}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
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
