export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] flex items-center justify-center text-xs font-bold tracking-tight">
            SV
          </span>
          <p className="text-sm font-semibold text-[var(--color-text)]">
            Suraj Verma
          </p>
        </div>
        <p className="text-sm font-medium text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} Shopify Developer.
        </p>
      </div>
    </footer>
  );
}
