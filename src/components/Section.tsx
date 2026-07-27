import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(muted && "surface-section", "py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl font-extrabold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
