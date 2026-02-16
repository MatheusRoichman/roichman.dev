export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border bg-background/92"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-muted">
          {/** biome-ignore lint/suspicious/noCommentText: it's not a comment */}
          <span className="text-accent">//</span> Matheus Roichman
        </span>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {["profile", "expertise", "philosophy", "contact"].map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="font-mono text-xs tracking-widest text-muted transition-colors duration-200 hover:text-foreground"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
