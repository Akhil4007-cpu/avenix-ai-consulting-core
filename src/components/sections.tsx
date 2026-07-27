import { services, advantages, processSteps } from "@/data/site";
import { Section, SectionHeading } from "@/components/Section";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Services"
        title="AI capabilities built around real business problems"
        description="Four core practice areas, delivered end to end — from discovery and data preparation through to deployment and ongoing support."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="card-hover group rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="gradient-brand inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground">
              <s.icon className="size-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {s.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
            {!detailed && (
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Learn more
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhyAvenix() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Avenix AI"
        title="A consulting partner focused on outcomes, not experiments"
        description="We build AI systems that fit your operations, stay maintainable, and keep delivering value after go-live."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((a) => (
          <article
            key={a.title}
            className="card-hover glass-card rounded-3xl p-7"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <a.icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WorkProcess() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Work Process"
        title="A clear path from first conversation to live solution"
        description="A structured engagement model that keeps scope, expectations, and delivery transparent at every stage."
      />
      <div className="relative mt-16">
        <div
          aria-hidden
          className="gradient-brand absolute top-7 left-0 hidden h-px w-full opacity-30 lg:block"
        />
        <ol className="grid gap-8 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="relative">
              <div className="gradient-brand relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-extrabold text-primary-foreground shadow-soft">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
