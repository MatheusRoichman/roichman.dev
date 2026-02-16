export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(11,13,16,0.92)",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: "#8B949E" }}
        >
          {/** biome-ignore lint/suspicious/noCommentText: it's not a comment */}
          <span style={{ color: "#4F7FFF" }}>//</span> Matheus Roichman
        </span>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {["profile", "expertise", "philosophy", "contact"].map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="font-mono text-xs tracking-widest transition-colors duration-200 hover:text-[#E6EAF0]"
                style={{ color: "#8B949E" }}
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
