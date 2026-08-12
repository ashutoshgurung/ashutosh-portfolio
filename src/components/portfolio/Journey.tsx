import { journey } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Journey() {
  return (
    <Section
      id="journey"
      label="Journey"
      title="My learning path"
      intro="How I got from coursework to shipping projects — a development journey rather than a work history."
    >
      <ol className="relative border-l border-hairline pl-8 sm:pl-12">
        {journey.map((step, i) => (
          <li key={step.title} className="relative pb-10 last:pb-0">
            <Reveal delay={i * 60}>
              <span
                aria-hidden
                className="absolute top-1.5 -left-[calc(2rem+0.3125rem)] size-2.5 rounded-full border border-accent bg-background sm:-left-[calc(3rem+0.3125rem)]"
              />
              <p className="mono-label">Step 0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
