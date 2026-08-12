import { skillGroups } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools I build with"
      intro="The technologies I use day to day — grouped by how I actually work, not by how confident a progress bar looks."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70} className="bg-background">
            <div className="h-full bg-surface p-6 transition-colors duration-300 hover:bg-surface-strong sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-hairline bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
