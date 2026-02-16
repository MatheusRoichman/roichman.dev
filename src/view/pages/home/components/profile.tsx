import { Reveal } from "@/view/components/animated/reveal";

export function Profile() {
  return (
    <section id="profile" className="py-24 max-w-6xl mx-auto px-8">
      <Reveal>
        <span
          className="font-mono text-xs tracking-widest block mb-10"
          style={{ color: "#4F7FFF" }}
        >
          01 — Profile
        </span>
      </Reveal>
      <div className="max-w-2xl flex flex-col gap-5">
        <Reveal delay={60}>
          <p className="text-lg leading-relaxed" style={{ color: "#E6EAF0" }}>
            I'm a Senior Frontend Software Engineer focused on building
            large-scale web applications with React and TypeScript. My work
            centers around scalable UI architecture, design system development,
            and creating maintainable frontend foundations that support growing
            teams and evolving products.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-lg leading-relaxed" style={{ color: "#E6EAF0" }}>
            I collaborate closely with design and product teams to ensure
            systems remain consistent, accessible, and performant over time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
