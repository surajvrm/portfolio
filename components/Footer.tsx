export function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: "var(--color-divider)" }}>
      <div className="max-w-[1180px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[var(--color-text-muted)]">
          Suraj Verma — Shopify Developer
        </p>
        <p className="text-sm text-[var(--color-text-faint)]">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
