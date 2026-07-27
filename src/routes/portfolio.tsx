import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";
import { featuredSolutions } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Featured Solutions — Avenix AI" },
      {
        name: "description",
        content:
          "Explore featured AI solution concepts from Avenix AI, spanning analytics dashboards, predictive models, chatbots, and document intelligence.",
      },
      { property: "og:title", content: "Featured Solutions — Avenix AI" },
      {
        property: "og:description",
        content: "Solution concepts across analytics, machine learning, chatbots, and custom AI.",
      },
    ],
  }),
  component: PortfolioPage,
});

const thumbStyles = [
  "from-[oklch(0.546_0.215_262.9)] to-[oklch(0.511_0.262_276.9)]",
  "from-[oklch(0.511_0.262_276.9)] to-[oklch(0.541_0.281_293)]",
  "from-[oklch(0.541_0.281_293)] to-[oklch(0.546_0.215_262.9)]",
];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Solutions"
        title="Solution concepts that show how we build"
        description="These are internally developed solution concepts that demonstrate our approach and technical capability. They are not presented as client projects."
      />

      <Section>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((p, i) => (
            <article
              key={p.title}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${thumbStyles[i % 3]} overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(18rem_10rem_at_25%_10%,white,transparent_65%)]" />
                <svg
                  className="absolute inset-0 h-full w-full opacity-40"
                  viewBox="0 0 400 160"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 120 C60 90 90 40 160 60 S280 130 400 40"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M0 140 C80 120 120 70 200 90 S320 150 400 80"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                  />
                  {[60, 140, 220, 300, 360].map((x, k) => (
                    <circle key={x} cx={x} cy={60 + (k % 3) * 22} r="4" fill="white" opacity="0.8" />
                  ))}
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {p.category}
                </p>
                <h2 className="mt-3 text-lg font-bold">{p.title}</h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
