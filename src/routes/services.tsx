import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ServicesGrid, WorkProcess } from "@/components/sections";
import { CallToAction } from "@/components/CallToAction";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Consulting Services — Avenix AI" },
      {
        name: "description",
        content:
          "Data analytics, machine learning solutions, AI chatbots, and custom AI development delivered end to end by Avenix AI.",
      },
      { property: "og:title", content: "AI Consulting Services — Avenix AI" },
      {
        property: "og:description",
        content:
          "Analytics, machine learning, conversational AI, and custom AI systems for modern organizations.",
      },
    ],
  }),
  component: ServicesPage,
});

const engagements = [
  {
    title: "Discovery & advisory",
    description:
      "A short engagement to assess your data, identify viable use cases, and define a realistic roadmap before any build begins.",
  },
  {
    title: "Solution build",
    description:
      "Full delivery of an analytics, machine learning, chatbot, or custom AI solution, from data pipeline to production interface.",
  },
  {
    title: "Ongoing partnership",
    description:
      "Continued monitoring, retraining, and enhancement so the system adapts as your data and business change.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI solutions designed for measurable business impact"
        description="We work across analytics, machine learning, conversational AI, and custom software — always scoped to the problem you actually need solved."
      />
      <ServicesGrid detailed />
      <Section>
        <SectionHeading
          eyebrow="Engagement Models"
          title="Flexible ways to work together"
          description="Start small with an assessment or engage us for full delivery and long-term support."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="card-hover rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <h3 className="text-lg font-bold">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <WorkProcess />
      <CallToAction />
    </>
  );
}
