"use client";

import { useEffect, useRef } from "react";

import { ArchDiagram } from "@/assets/arch-diagram";

export function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftChildren = leftRef.current?.children;
    if (leftChildren) {
      Array.from(leftChildren).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
        el.style.transition = `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms`;
        requestAnimationFrame(() => {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, 60);
        });
      });
    }
    const diagram = diagramRef.current;
    if (diagram) {
      diagram.style.opacity = "0";
      diagram.style.transition = "opacity 800ms ease-out 400ms";
      requestAnimationFrame(() => {
        setTimeout(() => {
          diagram.style.opacity = "1";
        }, 60);
      });
    }
  }, []);

  return (
    <section id="hero" className="pt-36 pb-24 max-w-6xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div ref={leftRef} className="flex flex-col gap-6">
          <p
            className="font-mono text-xs tracking-widest"
            style={{ color: "#4F7FFF" }}
          >
            React · TypeScript · Design Systems · Frontend Architecture
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
            style={{ color: "#E6EAF0", letterSpacing: "-0.02em" }}
          >
            Designing scalable UI systems for the web.
          </h1>
          <p
            className="text-base leading-relaxed max-w-sm"
            style={{ color: "#8B949E" }}
          >
            Senior Frontend Engineer focused on scalable architecture and
            maintainable UI foundations.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs px-6 py-3 transition-all duration-200 group"
              style={{
                color: "#E6EAF0",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#4F7FFF";
                el.style.color = "#4F7FFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "#E6EAF0";
              }}
            >
              Get in touch
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#4F7FFF" }}
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right — diagram */}
        <div
          ref={diagramRef}
          className="hidden md:flex justify-center items-center"
        >
          <ArchDiagram />
        </div>
      </div>
    </section>
  );
}
