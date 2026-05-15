"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FadeIn direction="left">
            <div
              className="rounded-2xl border p-6 h-full"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                About
              </p>
              <h2
                className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Developer-first, commerce-aware
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                I work primarily in Shopify, combining Liquid, frontend development, and integration work to build storefronts that are both usable for customers and practical for teams to manage. My focus is not just shipping pages, but solving the real implementation details behind product discovery, conversion, and merchant workflows.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.08}>
            <div
              className="rounded-2xl border p-6 h-full"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                Preferred engagements
              </p>
              <h2
                className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Best fit projects
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                Agency partnerships, Shopify build support, ongoing store optimization, API-led custom features, and custom app or checkout-related work where technical ownership matters.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Agency collaboration", "White-label dev", "Store builds", "API features", "Checkout work", "App development"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: "var(--color-primary-soft)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
