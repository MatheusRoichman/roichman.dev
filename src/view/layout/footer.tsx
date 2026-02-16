export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <span
          className="font-mono text-xs opacity-40"
          style={{ color: "#8B949E" }}
        >
          © {new Date().getFullYear()} — Matheus Roichman
        </span>
        <div
          className="flex items-center gap-2 font-mono text-xs"
          style={{ color: "#8B949E" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#3FB950",
              animation: "pulse-dot 2.4s ease infinite",
            }}
          />
          Available for new opportunities
        </div>
      </div>
    </footer>
  );
}
