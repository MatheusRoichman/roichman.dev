import { cn } from "@/utils/cn";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 max-w-6xl mx-auto px-8", className)}>
      {children}
    </section>
  );
}
