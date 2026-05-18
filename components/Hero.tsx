"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-medium mb-8 text-[var(--color-text-muted)] shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {siteData.available}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--color-text)] leading-[1.1]"
        >
          {siteData.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-10"
        >
          {siteData.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 bg-[var(--color-primary)] text-[var(--color-bg)]"
          >
            Start a conversation
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-offset)] text-[var(--color-text)] transition-colors"
          >
            View selected work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-[var(--color-divider)] w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-left"
        >
          {siteData.stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <strong className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text)] mb-1">
                {s.value}
              </strong>
              <span className="text-sm text-[var(--color-text-faint)] font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
