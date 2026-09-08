import { useEffect, useRef, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Check, Code2, Cpu, MessageCircle, Wrench } from "lucide-react";
import { practicalAreas, projects, technologies } from "@/data/portfolio";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const whatsappHref = "https://wa.me/5548991000913?text=Ol%C3%A1%20Iury!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

export function Hero() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>PORTFÓLIO PESSOAL / 2026</span>
        <span>SANTA CATARINA · BR</span>
      </div>

      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="hero-kicker"><span /> Desenvolvedor em formação</p>
          <h1 id="hero-title">Aprendendo tecnologia.<br /><em>Criando coisas reais.</em></h1>
          <p className="hero-description">
            Sou Iury Umbelino. Estou no primeiro ano da minha jornada como programador, estudando ADS e Ciência da Computação e colocando o que aprendo em projetos próprios.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conhecer projetos <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Falar comigo
            </a>
          </div>
          <div className="hero-facts">
            <div><strong>01</strong><span>ano programando</span></div>
            <div><strong>02</strong><span>graduações em andamento</span></div>
            <div><strong>02</strong><span>projetos em destaque</span></div>
          </div>
        </Reveal>

        <Reveal className="hero-art">
          <div className="art-square art-square-a" />
          <div className="art-square art-square-b" />
          <div className="art-square art-square-c" />
          <div className="art-index">IU / 01 — IDENTIDADE</div>
          <div className="art-caption"><span>TECNOLOGIA</span><span>EM CONSTRUÇÃO</span></div>
          <img
            src="/iury-hero-v2.png"
            alt="Iury Umbelino ao lado de uma versão ilustrada em estilo anime"
            className="hero-character"
            width={742}
            height={721}
            fetchPriority="high"
          />
        </Reveal>
      </div>

      <a href="#sobre" className="hero-scroll"><span>Rolar para explorar</span><ArrowDown size={15} /></a>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="section-block" aria-labelledby="sobre-title">
      <Reveal>
        <div className="section-meta"><span>01</span><p>Sobre mim</p><i /></div>
        <div className="about-layout">
          <div>
            <h2 id="sobre-title">Estou no começo.<br /><em>E estou construindo.</em></h2>
            <p className="about-statement">Não estou aqui para parecer que sei tudo. Estou aqui para mostrar o que estou aprendendo, o que já construí e para onde quero evoluir.</p>
          </div>
          <div className="about-copy">
            <p className="about-lead">Estou no primeiro ano de programação e estudo ADS na UNOPAR e Ciência da Computação na UNESC.</p>
            <p>Hoje estou aprendendo Python, JavaScript, Node.js, C++, HTML e CSS. Minha principal forma de aprender é praticando: estudando um conceito, tentando aplicá-lo e transformando ideias em projetos próprios.</p>
            <p>Além da programação, também faço reparos em celulares e eletrônicos. É outra área em que estou aprendendo na prática, entendendo componentes, manutenção e diagnóstico.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="aprendendo" className="section-block stack-section" aria-labelledby="stack-title">
      <Reveal>
        <div className="section-meta"><span>02</span><p>O que estou aprendendo</p><i /></div>
        <div className="stack-header">
          <div>
            <h2 id="stack-title">Minha base<br /><em>está em construção.</em></h2>
            <p className="stack-note">Estas são as tecnologias que fazem parte do meu estudo atual. Os níveis são honestos e refletem meu momento de aprendizado.</p>
          </div>
          <div className="learning-card">
            <Code2 size={20} />
            <span><strong>Aprender fazendo</strong><small>Projetos próprios + prática constante</small></span>
          </div>
        </div>
        <div className="tech-list">
          {technologies.map((tech, index) => (
            <div className="tech-row" key={tech.name}>
              <span className="tech-index">0{index + 1}</span>
              <div className="tech-name"><strong>{tech.name}</strong><span>{tech.group}</span></div>
              <span className="tech-level"><Check size={14} /> {tech.level}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section-block projects-section" aria-labelledby="projetos-title">
      <Reveal>
        <div className="section-meta"><span>03</span><p>Projetos em destaque</p><i /></div>
        <div className="projects-intro">
          <h2 id="projetos-title">Duas ideias que<br /><em>já viraram projeto.</em></h2>
          <p>São projetos próprios e representam melhor o meu momento atual: aprender tecnologia criando soluções que têm um propósito real.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-top">
                <span>{project.number}</span>
                <ArrowUpRight size={20} />
              </div>
              <div className="project-body">
                {project.logo && (
                  <img src={project.logo} alt={`Logo ${project.title}`} className="project-logo" loading="lazy" />
                )}
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span className="project-url">{project.href.replace("https://", "")}</span>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-description">{project.description}</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Services() {
  return (
    <section id="pratica" className="section-block services-section" aria-labelledby="pratica-title">
      <Reveal>
        <div className="section-meta"><span>04</span><p>Na prática</p><i /></div>
        <div className="services-heading">
          <h2 id="pratica-title">Tecnologia<br /><em>fora da teoria.</em></h2>
          <p>Além dos estudos, estas são as áreas em que já coloco a mão na massa — sempre deixando claro quando ainda estou aprendendo.</p>
        </div>
        <div className="service-list">
          {practicalAreas.map((area) => (
            <article className="service-row" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
        <div className="learning-note"><Cpu size={19} /><span>Automação com n8n e Inteligência Artificial ainda não fazem parte do meu conhecimento atual. Não apresento essas áreas como experiência profissional.</span></div>
      </Reveal>
    </section>
  );
}
