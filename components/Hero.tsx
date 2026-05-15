"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteData } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="pt-20 pb-12 md:pt-28 md:pb-16"
    >
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr] gap-10 items-end">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
              style={{
                background: "var(--color-primary-soft)",
                color: "var(--color-primary)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              {siteData.available}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 max-w-[12ch] text-[var(--color-text)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.03em" }}
            >
              {siteData.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-[var(--color-text-muted)] max-w-[58ch] leading-relaxed mb-8"
            >
              {siteData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--color-primary-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--color-primary)")
                }
              >
                Start a conversation
                <ArrowRight size={15} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border transition-all hover:bg-[var(--color-surface-2)]"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                View selected work
              </a>
            </motion.div>
          </div>

          {/* Right — Stats card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="rounded-2xl border p-5"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            aria-label="Quick profile summary"
          >
            {siteData.stats.map((s, i) => (
              <div
                key={i}
                className={`py-4 ${
                  i < siteData.stats.length - 1
                    ? "border-b border-[var(--color-divider)]"
                    : ""
                } ${i === 0 ? "pt-0" : ""} ${
                  i === siteData.stats.length - 1 ? "pb-0" : ""
                }`}
              >
                <strong
                  className="block text-2xl md:text-3xl font-black mb-1"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    color: "var(--color-text)",
                  }}
                >
                  {s.value}
                </strong>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
