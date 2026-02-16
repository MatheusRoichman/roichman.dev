import { Reveal } from "@/view/components/animated/reveal";

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
    <section id="contact" className="py-24 pb-32 max-w-6xl mx-auto px-8">
      <Reveal>
        <span
          className="font-mono text-xs tracking-widest block mb-10"
          style={{ color: "#4F7FFF" }}
        >
          04 — Contact
        </span>
      </Reveal>
      <Reveal delay={60}>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-10"
          style={{ color: "#E6EAF0", letterSpacing: "-0.02em" }}
        >
          Let's build scalable systems.
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
              className="inline-flex items-center gap-4 font-mono text-sm group relative text-[#8B949E] hover:text-[#4F7FFF]"
            >
              <span className="w-16 text-xs opacity-40 shrink-0">
                {link.label}
              </span>
              <span className="relative">
                {link.display}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                  style={{ background: "#4F7FFF" }}
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
