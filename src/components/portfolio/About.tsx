import { Reveal, Section } from "./Section";

const points = [
  "Flutter & Dart as my main stack",
  "Firebase and Cloud Firestore for app data",
  "Firebase Auth with Google Sign-In",
  "Hive for local storage",
  "Provider + MVVM for structure",
  "Design in Figma",
];

export function About() {
  return (
    <Section id="about" label="About" title="A little about me">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a BCIS student and Flutter Developer, focused on building clean, functional, and
            user-friendly mobile applications. Most of my time goes into Flutter and Dart — building applications,
            breaking them, and rebuilding them better.
          </p>
          <p>
            I&apos;ve worked with Firebase, Cloud Firestore, Firebase Authentication, Google Sign-In, Hive, REST APIs,
            Provider, and MVVM to build and structure Flutter applications.
          </p>
          <p>
            I&apos;m also developing my UI/UX skills because I believe a good mobile application should not only work
            well, but also be simple and enjoyable to use.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
            <p className="mono-label">What I work with</p>
            <ul className="mt-6 space-y-4">
              {points.map((p, i) => (
                <li key={p} className="flex items-start gap-4 border-b border-hairline pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 font-mono text-[11px] text-accent">0{i + 1}</span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
