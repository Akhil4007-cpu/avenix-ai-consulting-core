import { Eyebrow } from "@/components/Section";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-soft border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="reveal max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold text-balance sm:text-5xl lg:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
