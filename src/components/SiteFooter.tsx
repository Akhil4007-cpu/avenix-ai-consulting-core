import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="surface-section border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9 shrink-0" />
              <span className="font-display text-lg font-extrabold tracking-tight">
                Avenix<span className="gradient-text"> AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Intelligent Data. Smarter Decisions.</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI consulting for organizations that want practical, scalable solutions built on their
              own data.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition-colors hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:contact@avenixai.com" className="transition-colors hover:text-primary">
                  contact@avenixai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                Hyderabad, Telangana, India
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avenix AI on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avenix AI on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="mailto:contact@avenixai.com"
                aria-label="Email Avenix AI"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avenix AI. All rights reserved.</p>
          <p>Data Analytics · Machine Learning · AI Chatbots · Custom AI</p>
        </div>
      </div>
    </footer>
  );
}
