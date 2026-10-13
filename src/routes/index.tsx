import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Ashutosh Gurung — Flutter Developer";
const description =
  "Portfolio of Ashutosh Gurung, a Flutter Developer focused on clean, responsive cross-platform mobile apps using Flutter, Dart, Firebase, REST APIs, and modern app architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashutosh Gurung",
          jobTitle: "Flutter Developer",
          knowsAbout: [
            "Flutter",
            "Dart",
            "Firebase",
            "REST APIs",
            "Laravel",
            "MVVM",
            "Clean Architecture",
            "BLoC Architecture",
            "Local Storage",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
