"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(8px)",
        transition: `opacity 300ms ease-out ${delay}ms, transform 300ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
