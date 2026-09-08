import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { About, Hero, Projects, Services, Skills } from "@/components/portfolio/Sections";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iury Umbelino — Desenvolvedor em formação" },
      { name: "description", content: "Portfólio de Iury Umbelino, desenvolvedor em formação e estudante de ADS e Ciência da Computação." },
      { property: "og:title", content: "Iury Umbelino — Desenvolvedor em formação" },
      { property: "og:description", content: "Projetos reais, aprendizado contínuo e tecnologia na prática." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="portfolio-shell">
      <Sidebar />
      <main className="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <ContactSection />
      </main>
    </div>
  );
}
