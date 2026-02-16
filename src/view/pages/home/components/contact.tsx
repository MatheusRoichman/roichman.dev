import { Reveal } from "@/view/components/animated/reveal";
import { Section } from "@/view/components/ui/section";

const LINKS = [
  {
    label: "email",
    href: "mailto:matheus@roichman.dev",
    display: "matheus@roichman.dev",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/matheusroichman",
    display: "/in/matheusroichman",
  },
  {
    label: "github",
    href: "https://github.com/MatheusRoichman",
    display: "@MatheusRoichman",
  },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <Reveal>
        <span className="font-mono text-xs tracking-widest block mb-10 text-accent">
          04 &mdash; Contact
        </span>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground -tracking-[0.02em]">
          Let&apos;s build scalable systems.
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {LINKS.map((link, i) => (
          <Reveal key={link.label} delay={80 + i * 60}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex items-center gap-4 font-mono text-sm group relative text-muted hover:text-accent transition-colors duration-200"
            >
              <span className="w-16 text-xs opacity-40 shrink-0">
                {link.label}
              </span>
              <span className="relative">
                {link.display}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-200 bg-accent" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
