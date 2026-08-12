import { ArrowDownToLine } from "lucide-react";
import { profile } from "@/data/portfolio";
import { actionClass } from "./action";
import { Reveal } from "./Section";

export function Resume() {
  return (
    <section id="resume" className="border-t border-hairline py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-hairline bg-surface p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <p className="mono-label">Resume</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Want to know more?</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Download my resume to learn more about my education, skills, projects, and experience.
              </p>
            </div>
            <a href={profile.resumeUrl} download className={actionClass({ size: "lg", className: "shrink-0" })}>
              <ArrowDownToLine className="size-4" /> Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
