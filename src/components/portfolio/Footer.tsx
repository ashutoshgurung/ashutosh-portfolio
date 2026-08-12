import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-hairline px-5 pt-6 sm:px-8">
        <p className="font-mono text-[11px] text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
