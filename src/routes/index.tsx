import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { About, Experience, Hero, Projects, Services, Skills, SouStudioStrip } from "@/components/portfolio/Sections";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { SITE_URL } from "@/data/portfolio";

const TITLE = "Iury Umbelino | Assistente de TI · SQL e desenvolvimento web";
const DESCRIPTION =
  "Portfólio de Iury Umbelino, Assistente de TI no Giassi Supermercados. SQL, PL/SQL, suporte a sistemas e projetos web próprios. Estudante de Ciência da Computação e ADS.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Iury Umbelino — Assistente de TI no Giassi" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
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
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <SouStudioStrip />
        <ContactSection />
      </main>
    </div>
  );
}
