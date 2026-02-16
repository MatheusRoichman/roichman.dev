export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <span className="font-mono text-xs text-muted opacity-40">
          &copy; {new Date().getFullYear()} &mdash; Matheus Roichman
        </span>
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span
            className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot"
            aria-hidden="true"
          />
          <span>Available for new opportunities</span>
        </div>
      </div>
    </footer>
  );
}
