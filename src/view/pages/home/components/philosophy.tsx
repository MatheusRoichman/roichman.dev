import { Reveal } from "@/view/components/animated/reveal";
import { Section } from "@/view/components/ui/section";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <Reveal>
        <span className="font-mono text-xs tracking-widest block mb-10 text-accent">
          03 &mdash; Philosophy
        </span>
      </Reveal>
      <Reveal delay={60}>
        <p className="text-3xl md:text-4xl font-semibold leading-snug mb-8 max-w-2xl text-foreground -tracking-[0.02em]">
          At scale, frontend engineering is about{" "}
          <span className="text-accent">systems</span>, not screens.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-base leading-relaxed max-w-xl text-muted">
          Clear abstractions, disciplined component design, and strong typing
          prevent complexity from compounding over time. My focus is building
          foundations that allow teams to move fast without sacrificing
          long-term maintainability.
        </p>
      </Reveal>
    </Section>
  );
}
