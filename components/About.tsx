"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--color-surface-2)] border-y border-[var(--color-border)]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn direction="up" className="md:col-span-2">
            <div className="rounded-3xl border border-[var(--color-border)] p-8 md:p-12 h-full bg-[var(--color-surface)] flex flex-col justify-center transition-colors hover:border-[var(--color-divider)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-[var(--color-text)]">
                Developer-first, commerce-aware
              </h2>
              <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
                I work primarily in Shopify, combining Liquid, frontend development, and integration work to build storefronts that are both usable for customers and practical for teams to manage. My focus is not just shipping pages, but solving the real implementation details behind product discovery, conversion, and merchant workflows.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="md:col-span-1">
            <div className="rounded-3xl border border-[var(--color-border)] p-8 h-full bg-[var(--color-surface)] flex flex-col justify-center transition-colors hover:border-[var(--color-divider)]">
              <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-[var(--color-text)]">
                Best fit projects
              </h2>
              <div className="flex flex-col gap-4">
                {["Agency collaboration", "White-label dev", "Store builds", "API features", "Checkout work"].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-80" />
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
