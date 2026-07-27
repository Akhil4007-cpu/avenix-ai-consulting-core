import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Avenix AI — Book a Free Consultation" },
      {
        name: "description",
        content:
          "Tell us about your project and book a free consultation with Avenix AI. Based in Hyderabad, Telangana, India.",
      },
      { property: "og:title", content: "Contact Avenix AI — Book a Free Consultation" },
      {
        property: "og:description",
        content: "Share your goals and we'll outline practical AI options for your organization.",
      },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Data Analytics",
  "Machine Learning Solutions",
  "AI Chatbots",
  "Custom AI Solutions",
  "Not sure yet",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // Form is intentionally front-end only; ready for a future backend integration.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a free consultation"
        description="Tell us about your organization, your data, and what you'd like to improve. We'll respond with practical next steps and an honest view of what's achievable."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
            <h2 className="text-2xl font-extrabold">Project enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" required placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Organization" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="service">Service Interested In *</Label>
                <Select name="service" required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  placeholder="What are you trying to achieve? What data or systems are involved?"
                />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="budget">Budget (Optional)</Label>
                <Input id="budget" name="budget" placeholder="Approximate range" />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                  Send Enquiry <Send />
                </Button>
                {submitted && (
                  <p
                    role="status"
                    className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary"
                  >
                    Thanks — your details are captured in the form. Message delivery will be enabled
                    once the contact backend is connected.
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside className="grid content-start gap-5">
            <div className="glass-card rounded-3xl p-7">
              <h2 className="text-lg font-bold">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="mailto:contact@avenixai.com"
                    className="min-w-0 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    contact@avenixai.com
                  </a>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <Linkedin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 text-muted-foreground transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <Github className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 text-muted-foreground transition-colors hover:text-primary"
                  >
                    GitHub
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
                  <span>We review your enquiry and clarify anything that's unclear.</span>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="font-display font-extrabold text-primary">2</span>
                  <span>A free consultation call to explore goals, data, and constraints.</span>
                </li>
                <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="font-display font-extrabold text-primary">3</span>
                  <span>A written outline of the recommended approach and scope.</span>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
