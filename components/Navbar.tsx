"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { siteData } from "@/lib/data";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "w-full max-w-3xl bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)] shadow-sm"
            : "w-full max-w-4xl bg-transparent border border-transparent"
        }`}
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2 font-bold text-[var(--color-text)]">
          <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] flex items-center justify-center text-sm font-bold tracking-tight">
            SV
          </span>
          <span className="hidden sm:block text-sm tracking-tight">{siteData.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-text-muted)]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-[var(--color-surface)] flex items-center justify-center hover:bg-[var(--color-surface-offset)] border border-[var(--color-border)] transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-full bg-[var(--color-surface)] flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 md:hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
