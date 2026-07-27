import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { ServicesGrid, WhyAvenix, WorkProcess } from "@/components/sections";
import { CallToAction } from "@/components/CallToAction";
import { featuredSolutions, industries } from "@/data/site";
import heroImage from "@/assets/hero-ai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avenix AI — Transform Business Data Into Intelligent Decisions" },
      {
        name: "description",
        content:
          "Avenix AI builds data analytics, machine learning, AI chatbot, and custom AI solutions that help organizations automate workflows and improve decision-making.",
      },
      {
        property: "og:title",
        content: "Avenix AI — Transform Business Data Into Intelligent Decisions",
      },
      {
        property: "og:description",
        content:
          "Modern AI consulting for analytics, machine learning, chatbots, and custom AI solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="gradient-soft relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="reveal min-w-0">
            <Eyebrow>Intelligent Data. Smarter Decisions.</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Transform Business Data Into{" "}
              <span className="gradient-text">Intelligent Decisions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Avenix AI develops modern Data Analytics, Machine Learning, AI Chatbots, and Custom AI
              Solutions that help businesses automate workflows, improve decision-making, and
              accelerate growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book a Free Consultation <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["Business-focused delivery", "Scalable architecture", "Long-term support"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative min-w-0">
            <div className="glass-card overflow-hidden rounded-[2rem] p-2 shadow-lift">
              <img
                src={heroImage}
                alt="Abstract illustration of a neural network connecting flowing data streams"
                width={1408}
                height={1104}
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-soft backdrop-blur-sm">
            <p className="text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Working across industries
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {industries.map((i) => (
                <div
                  key={i.label}
                  className="flex min-w-0 items-center justify-center gap-2.5 rounded-2xl bg-muted/60 px-4 py-4 text-center"
                >
                  <i.icon className="size-4 shrink-0 text-primary" />
                  <span className="truncate text-sm font-medium">{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyAvenix />
      <WorkProcess />

      <Section>
        <SectionHeading
          eyebrow="Featured Solutions"
          title="Solution concepts we design and build"
          description="Representative examples of the systems we develop. These are capability demonstrations, not client deliverables."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.slice(0, 3).map((p) => (
            <article
              key={p.title}
              className="card-hover overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="gradient-brand h-32 opacity-90" />
              <div className="p-7">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {p.category}
                </p>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              See all featured solutions <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
