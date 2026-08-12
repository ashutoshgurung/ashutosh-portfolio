import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { actionClass } from "./action";
import { Reveal, Section } from "./Section";

const fieldClass =
  "w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // No backend is connected yet — this hands the message off to your email client.
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast("Opening your email app", { description: "Your message is ready to send." });
    setSending(false);
  }

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "View my repositories", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "Let's connect", href: profile.linkedin },
  ];

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something."
      intro="I'm always interested in learning, collaborating, and working on meaningful digital products."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-3">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="group flex items-center gap-4 rounded-xl border border-hairline bg-surface p-4 transition-colors hover:border-accent/60"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-background text-muted-foreground transition-colors group-hover:text-accent">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="mono-label block">{label}</span>
                <span className="block truncate text-sm text-foreground">{value}</span>
              </span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mono-label mb-2 block">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mono-label mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mono-label mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about what you're working on."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button type="submit" disabled={sending} className={actionClass({ size: "lg", className: "mt-6 w-full sm:w-auto" })}>
              Send Message <ArrowUpRight className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
