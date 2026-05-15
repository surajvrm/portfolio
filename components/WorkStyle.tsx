"use client";

import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

export function WorkStyle() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-4">
        <FadeIn className="mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            Working style
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-black text-[var(--color-text)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              What agencies usually need from me
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-[44ch] text-sm leading-relaxed md:text-right">
              I fit best into projects where delivery quality matters as much as speed.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteData.workStyle.map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.07}>
              <div
                className="rounded-xl border p-5"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <strong
                  className="block text-lg font-bold mb-2 text-[var(--color-text)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {w.title}
                </strong>
                <span className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {w.desc}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
