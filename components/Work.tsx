"use client";

import { ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { siteData } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-[1000px] mx-auto px-4">
        <FadeIn className="mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]">
              Selected work
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl leading-relaxed">
              These projects span product storytelling, custom sections, performance-focused theme work, and integration-heavy Shopify implementations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <article
                className="group relative rounded-2xl p-6 md:p-8 flex flex-col gap-6 h-full transition-all duration-300 hover:bg-[var(--color-surface-offset)] border border-[var(--color-border)] hover:border-[var(--color-divider)] bg-[var(--color-surface)] shadow-sm hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[var(--color-text)] tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-surface-2)] text-[var(--color-text-faint)] border border-[var(--color-divider)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Visit project ${p.name}`}
                >
                  <span className="sr-only">Visit project</span>
                </a>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                  <ExternalLink size={20} className="text-[var(--color-text)]" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
