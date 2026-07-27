import { createFileRoute } from "@tanstack/react-router";
import { Compass, ShieldCheck, Workflow } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { WhyAvenix, WorkProcess } from "@/components/sections";
import { CallToAction } from "@/components/CallToAction";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Avenix AI — AI Consulting Company" },
      {
        name: "description",
        content:
          "Avenix AI helps organizations unlock the power of artificial intelligence through practical, scalable, and data-driven solutions.",
      },
      { property: "og:title", content: "About Avenix AI — AI Consulting Company" },
      {
        property: "og:description",
        content:
          "Our mission is to turn complex business challenges into intelligent digital solutions.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Compass,
    title: "Practical over theoretical",
    description:
      "We recommend the simplest approach that solves the problem well, and say so when AI is not the right answer.",
  },
  {
    icon: Workflow,
    title: "Built to be maintained",
    description:
      "Clean data flows, documented systems, and architecture your team can understand and extend.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible by default",
    description:
      "Careful handling of sensitive data, clear model limitations, and human oversight where decisions matter.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An AI consulting company built around practical delivery"
        description="Avenix AI is dedicated to helping organizations unlock the power of Artificial Intelligence through practical, scalable, and data-driven solutions."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="min-w-0">
            <h2 className="text-3xl font-extrabold text-balance sm:text-4xl">Our mission</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              To transform complex business challenges into intelligent digital solutions using Data
              Analytics, Machine Learning, and AI technologies.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We work with startups, businesses, hospitals, educational institutions, retail
              companies, and other organizations that want to use their data more effectively. Every
              engagement begins with understanding the operational reality behind the request — the
              systems in place, the data available, and the decisions that need to improve.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From there we design solutions that are scoped honestly, built to scale, and supported
              beyond launch.
            </p>
          </div>

          <div className="grid gap-5">
            {principles.map((p) => (
              <article
                key={p.title}
                className="card-hover glass-card grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-3xl p-7"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <WhyAvenix />
      <WorkProcess />

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Based in Hyderabad, working with organizations everywhere"
          description="We collaborate remotely with teams across regions and time zones, with clear communication and documented progress throughout."
        />
      </Section>

      <CallToAction />
    </>
  );
}
