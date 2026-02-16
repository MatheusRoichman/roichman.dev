import { Reveal } from "@/view/components/animated/reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 max-w-6xl mx-auto px-8">
      <Reveal>
        <span
          className="font-mono text-xs tracking-widest block mb-10"
          style={{ color: "#4F7FFF" }}
        >
          03 — Philosophy
        </span>
      </Reveal>
      <Reveal delay={60}>
        <p
          className="text-3xl md:text-4xl font-semibold leading-snug mb-8 max-w-2xl"
          style={{ color: "#E6EAF0", letterSpacing: "-0.02em" }}
        >
          At scale, frontend engineering is about{" "}
          <span style={{ color: "#4F7FFF" }}>systems</span>, not screens.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "#8B949E" }}
        >
          Clear abstractions, disciplined component design, and strong typing
          prevent complexity from compounding over time. My focus is building
          foundations that allow teams to move fast without sacrificing
          long-term maintainability.
        </p>
      </Reveal>
    </section>
  );
}
