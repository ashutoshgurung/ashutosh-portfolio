import { ArrowDownToLine, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { actionClass } from "./action";
import { Reveal } from "./Section";

const stack = ["Flutter", "Dart", "Firebase", "Provider", "MVVM", "Figma", "BLoC Architecture"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Currently building &amp; learning
            </span>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-8 font-mono text-sm text-muted-foreground">Hi, I&apos;m Ashutosh Gurung.</p>
            <h1 className="mt-3 text-4xl leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">
              Flutter Developer
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build clean, responsive, and user-friendly cross-platform mobile applications using Flutter and Dart,
              with a strong focus on practical functionality and polished experiences.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className={actionClass({ size: "lg" })}>
                View My Work <ArrowUpRight className="size-4" />
              </a>
              <a href={profile.resumeUrl} download className={actionClass({ variant: "outline", size: "lg" })}>
                <ArrowDownToLine className="size-4" /> Download Resume
              </a>
              <div className="flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className={actionClass({ variant: "ghost", size: "icon", className: "hover:text-accent" })}
                >
                  <Github className="size-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className={actionClass({ variant: "ghost", size: "icon", className: "hover:text-accent" })}
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-hairline bg-surface p-4 shadow-2xl shadow-black/5 transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="size-2.5 rounded-full bg-hairline" />
                <span className="size-2.5 rounded-full bg-hairline" />
                <span className="size-2.5 rounded-full bg-accent/70" />
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">main.dart</span>
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-background p-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                <code>{`class Ashutosh extends Developer {
  final focus = 'Flutter';
  final study = 'BCIS';

  @override
  Widget build(BuildContext c) {
    return Portfolio(
      builds: mobileApps,
      cares: aboutDesign,
    );
  }
}`}</code>
              </pre>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
