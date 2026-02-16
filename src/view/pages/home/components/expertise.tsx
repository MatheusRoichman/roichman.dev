import { Reveal } from "@/view/components/animated/reveal";

const EXPERTISE = [
  {
    index: "01",
    title: "Architecture",
    items: ["Application structure", "State boundaries", "Module isolation"],
  },
  {
    index: "02",
    title: "Design Systems",
    items: ["Typed components", "Token governance", "Accessibility foundation"],
  },
  {
    index: "03",
    title: "Performance",
    items: [
      "Rendering optimization",
      "Bundle efficiency",
      "Re-render analysis",
    ],
  },
  {
    index: "04",
    title: "Developer Experience",
    items: ["Conventions", "Documentation", "Cognitive load reduction"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 max-w-6xl mx-auto px-8">
      <Reveal>
        <span
          className="font-mono text-xs tracking-widest block mb-10"
          style={{ color: "#4F7FFF" }}
        >
          02 — Core Expertise
        </span>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {EXPERTISE.map((block, i) => {
          const isLeft = i % 2 === 0;
          const isBottom = i >= 2;
          return (
            <Reveal key={block.title} delay={i * 60}>
              <div
                className="py-10"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: isBottom
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
                  borderRight: isLeft
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
                  paddingRight: isLeft ? "48px" : undefined,
                  paddingLeft: !isLeft ? "48px" : undefined,
                }}
              >
                <p
                  className="font-mono text-xs mb-4"
                  style={{ color: "#8B949E" }}
                >
                  {block.index}
                </p>
                <h3
                  className="text-lg font-semibold mb-5"
                  style={{ color: "#E6EAF0", letterSpacing: "-0.01em" }}
                >
                  {block.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 font-mono text-sm"
                      style={{ color: "#8B949E" }}
                    >
                      <span style={{ color: "#4F7FFF", flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
