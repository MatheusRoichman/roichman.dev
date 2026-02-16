import { ArchDiagram } from "@/assets/arch-diagram";

import { Section } from "@/view/components/ui/section";

export function Hero() {
  return (
    <Section id="hero" className="pt-36 pb-24 py-0">
      <div className="pt-36 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs tracking-widest text-accent opacity-0 animate-fade-in [animation-delay:0ms]">
              React &middot; TypeScript &middot; Design Systems &middot;
              Frontend Architecture
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight -tracking-[0.02em] text-foreground opacity-0 animate-fade-in [animation-delay:80ms]">
              Designing scalable UI systems for the web.
            </h1>
            <p className="text-base leading-relaxed max-w-sm text-muted opacity-0 animate-fade-in [animation-delay:160ms]">
              Senior Frontend Engineer focused on scalable architecture and
              maintainable UI foundations.
            </p>
            <div className="opacity-0 animate-fade-in [animation-delay:240ms]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs px-6 py-3 transition-all duration-200 group text-foreground border border-border-strong hover:border-accent hover:text-accent"
              >
                Get in touch
                <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center opacity-0 animate-fade-in [animation-delay:400ms] [animation-duration:800ms]">
            <ArchDiagram />
          </div>
        </div>
      </div>
    </Section>
  );
}
