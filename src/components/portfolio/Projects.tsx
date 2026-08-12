import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { actionClass } from "./action";
import { Reveal, Section } from "./Section";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const featured = project.featured;
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50",
        featured && "lg:col-span-2 lg:flex-row",
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open case study for ${project.title}`}
        className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      />
      <div className={cn("overflow-hidden bg-background", featured ? "lg:w-[52%]" : "")}>
        {/* Replace this image with your own screenshot in src/data/portfolio.ts */}
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-72 lg:h-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {featured ? <p className="mono-label mb-2 text-accent">Featured project</p> : null}
            <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {featured ? (
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="size-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="relative z-20 mt-auto flex flex-wrap items-center gap-2 pt-7">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass({ variant: "outline", size: "sm" })}
            >
              <Github className="size-4" /> GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass({ size: "sm" })}
            >
              Live Demo <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          <button type="button" onClick={onOpen} className={actionClass({ variant: "ghost", size: "sm" })}>
            Read case study
          </button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      intro="Projects I've built while learning, experimenting, and solving real problems."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60} className={p.featured ? "lg:col-span-2" : ""}>
            <ProjectCard project={p} onOpen={() => setActive(p)} />
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-2xl border-hairline bg-card p-0">
          {active ? (
            <>
              <img
                src={active.image}
                alt={`${active.title} interface preview`}
                loading="lazy"
                width={1200}
                height={900}
                className="h-52 w-full object-cover sm:h-72"
              />
              <div className="p-6 sm:p-9">
                <DialogHeader className="text-left">
                  <p className="mono-label">Case study</p>
                  <DialogTitle className="mt-2 text-2xl font-semibold sm:text-3xl">{active.title}</DialogTitle>
                  <DialogDescription className="text-base">{active.tagline}</DialogDescription>
                </DialogHeader>

                <div className="mt-8 space-y-8">
                  <Block title="Overview">{active.caseStudy.overview}</Block>
                  <Block title="Problem">{active.caseStudy.problem}</Block>
                  <Block title="Solution">{active.caseStudy.solution}</Block>

                  <div>
                    <p className="mono-label">Features</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {active.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="size-1 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mono-label">Technology</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {active.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <Block title="What I learned">{active.caseStudy.learned}</Block>
                </div>

                {active.github || active.demo ? (
                  <div className="mt-9 flex flex-wrap gap-2">
                    {active.github ? (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={actionClass({ variant: "outline", size: "sm" })}
                      >
                        <Github className="size-4" /> GitHub
                      </a>
                    ) : null}
                    {active.demo ? (
                      <a
                        href={active.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={actionClass({ size: "sm" })}
                      >
                        Live Demo <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mono-label">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</p>
    </div>
  );
}
