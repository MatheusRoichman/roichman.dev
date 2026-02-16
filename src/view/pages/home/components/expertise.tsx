import { cn } from "@/utils/cn";
import { Reveal } from "@/view/components/animated/reveal";
import { Section } from "@/view/components/ui/section";

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
    <Section id="expertise">
      <Reveal>
        <span className="font-mono text-xs tracking-widest block mb-10 text-accent">
          02 &mdash; Core Expertise
        </span>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {EXPERTISE.map((block, i) => {
          const isLeft = i % 2 === 0;
          const isBottom = i >= 2;
          return (
            <Reveal key={block.title} delay={i * 60}>
              <div
                className={cn(
                  "py-10 border-t border-border",
                  isBottom && "border-b",
                  isLeft ? "border-r pr-12" : "pl-12",
                )}
              >
                <p className="font-mono text-xs mb-4 text-muted">
                  {block.index}
                </p>
                <h3 className="text-lg font-semibold mb-5 text-foreground -tracking-[0.01em]">
                  {block.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 font-mono text-sm text-muted"
                    >
                      <span className="text-accent shrink-0">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
