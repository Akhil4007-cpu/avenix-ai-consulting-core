import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="gradient-brand relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-lift sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(30rem_20rem_at_20%_0%,white,transparent_60%)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-balance text-primary-foreground sm:text-4xl">
              Let's discuss what AI can do for your organization
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Share your goals and current data setup. We'll walk you through practical options,
              realistic timelines, and the right starting point.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="xl" variant="secondary">
                <Link to="/contact">
                  Book a Free Consultation <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="ghost"
                className="border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
