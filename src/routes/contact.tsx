import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sokode AI" },
      {
        name: "description",
        content: "Email Sokode AI to tell us about your company and start a conversation.",
      },
      { property: "og:title", content: "Contact Sokode AI" },
      {
        property: "og:description",
        content: "Email us with your company details at contactsokodeai@gmail.com.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Email us your company details"
        description="Please email contactsokodeai@gmail.com with information about your company and we'll respond with next steps."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
            <h2 className="text-2xl font-extrabold">Send us an email</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Please tell us about your company and what you need in an email to:
            </p>
            <a
              href="mailto:contactsokodeai@gmail.com"
              className="mt-6 inline-flex items-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              contactsokodeai@gmail.com
            </a>
          </div>

          <aside className="grid content-start gap-5">
            <div className="glass-card rounded-3xl p-7">
              <h2 className="text-lg font-bold">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="mailto:contactsokodeai@gmail.com"
                    className="min-w-0 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    contactsokodeai@gmail.com
                  </a>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <Linkedin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/sokode-ai-ab3396425/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 text-muted-foreground transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-muted-foreground">
                    Hyderabad, Telangana, India
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="font-display font-extrabold text-primary">1</span>
                  <span>We review your email and company details.</span>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="font-display font-extrabold text-primary">2</span>
                  <span>We reply with the best next step for your AI initiative.</span>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="font-display font-extrabold text-primary">3</span>
                  <span>We'll work with you to scope the right solution.</span>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
