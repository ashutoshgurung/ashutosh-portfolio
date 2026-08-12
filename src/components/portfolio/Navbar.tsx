import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { actionClass } from "./action";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-accent font-mono text-xs font-bold text-accent-foreground">
            AG
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">Ashutosh Gurung</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={actionClass({ variant: "outline", size: "icon", className: "rounded-full" })}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a href="#contact" className={actionClass({ size: "sm", className: "hidden sm:inline-flex" })}>
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={actionClass({ variant: "outline", size: "icon", className: "rounded-full lg:hidden" })}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-hairline bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[520px] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-hairline last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 font-display text-2xl font-medium tracking-tight transition-colors hover:text-accent"
              >
                <span className="mono-label">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={actionClass({ size: "lg", className: "w-full" })}
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
