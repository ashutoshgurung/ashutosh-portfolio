import { Reveal, Section } from "./Section";

const points = [
  "Mobile app development with Flutter & Dart",
  "Material Design + responsive UI systems",
  "Firebase and REST API integration",
  "BLoC and Provider for state management",
  "MVVM, Clean Architecture, BLoC Architecture, and local storage",
];

export function About() {
  return (
    <Section id="about" label="About" title="A little about me">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Flutter Developer passionate about building clean, responsive, and user-friendly cross-platform
            mobile applications. I work with Flutter and Dart to turn ideas into practical, functional experiences for
            real users.
          </p>
          <p>
            My work includes Firebase setup, REST API integration, and building scalable mobile
            products with strong app structure. I use BLoC and Provider for state management, and
            MVVM, Clean Architecture, and BLoC Architecture to keep code maintainable. Hive and
            SharedPreferences support efficient local data storage.
          </p>
          <p>
            I&apos;m always learning, improving my problem-solving skills, and building practical projects that focus on
            reliability, performance, and clean user experiences.
          </p>
          <p className="text-foreground">I enjoy creating apps that are useful, polished, and built to last.</p>
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
