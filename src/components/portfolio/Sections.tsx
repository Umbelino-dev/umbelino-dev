import { useEffect, useRef, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Briefcase, Check, Code2, MessageCircle } from "lucide-react";
import {
  education,
  experience,
  practicalAreas,
  profile,
  projects,
  sectionNumber,
  technologies,
} from "@/data/portfolio";

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
          <p className="hero-kicker"><span /> {profile.kicker}</p>
          <h1 id="hero-title" className="hero-title">Aprendendo tecnologia.<br /><em>Criando coisas reais.</em></h1>
          <p className="hero-description">
            Sou Iury Umbelino, Assistente de TI no Giassi Supermercados. No dia a dia trabalho com SQL, PL/SQL e suporte a sistemas, e estudo Ciência da Computação e ADS construindo projetos próprios.
          </p>
          <p className="hero-open"><Briefcase size={15} /><span><strong>{profile.openTo}.</strong> {profile.location}.</span></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conhecer projetos <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Falar comigo
            </a>
          </div>
          <div className="hero-facts">
            <div><strong>TI</strong><span>Assistente no Giassi</span></div>
            <div><strong>SQL</strong><span>e PL/SQL no dia a dia</span></div>
            <div><strong>02</strong><span>projetos no ar</span></div>
          </div>
        </Reveal>

        <Reveal className="hero-art">
          <div className="art-square art-square-a" />
          <div className="art-square art-square-b" />
          <div className="art-square art-square-c" />
          <div className="art-index">IU / 01 — IDENTIDADE</div>
          <div className="art-caption"><span>TECNOLOGIA</span><span>EM CONSTRUÇÃO</span></div>
          <img
            src="/iury-hero-v2.webp"
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
        <div className="section-meta"><span>{sectionNumber("sobre")}</span><p>Sobre mim</p><i /></div>
        <div className="about-layout">
          <div>
            <h2 id="sobre-title">Trabalho com TI.<br /><em>E sigo construindo.</em></h2>
            <p className="about-statement">Aqui você encontra o que faço no trabalho, o que já construí por conta própria e o que estou estudando para evoluir.</p>
          </div>
          <div className="about-copy">
            <p className="about-lead">Sou Assistente de TI no Giassi Supermercados, onde comecei como Jovem Aprendiz na área administrativa. Em paralelo, estudo Ciência da Computação na UNESC e ADS na UNOPAR.</p>
            <p>No trabalho, uso SQL e PL/SQL todos os dias. Fora dele, estudo Python, JavaScript, Node.js, C++, HTML e CSS. Aprendo praticando: estudo um conceito, aplico e transformo ideias em projetos próprios, como a Koinonia, que construí sozinho com apoio de IA.</p>
            <p>Além da programação, faço reparos em celulares e eletrônicos sempre que consigo.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="section-block experience-section" aria-labelledby="experiencia-title">
      <Reveal>
        <div className="section-meta"><span>{sectionNumber("experiencia")}</span><p>Experiência</p><i /></div>
        <div className="services-heading">
          <h2 id="experiencia-title">Onde trabalho<br /><em>e onde estudo.</em></h2>
          <p>Minha experiência profissional é em TI no varejo, com suporte, dados e sistemas.</p>
        </div>
        <div className="service-list">
          {experience.map((job, index) => (
            <article className="service-row experience-row" key={job.role}>
              <span>0{index + 1}</span>
              <div>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}{job.current && <em>Atual</em>}</p>
              </div>
              <ul className="experience-items">
                {job.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="education-title">Formação</h3>
        <div className="tech-list">
          {education.map((item, index) => (
            <div className="tech-row" key={item.course}>
              <span className="tech-index">0{index + 1}</span>
              <div className="tech-name"><strong>{item.course}</strong><span>{item.institution}</span></div>
              <span className="tech-level"><Check size={14} /> {item.status}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="aprendendo" className="section-block stack-section" aria-labelledby="stack-title">
      <Reveal>
        <div className="section-meta"><span>{sectionNumber("aprendendo")}</span><p>Tecnologias</p><i /></div>
        <div className="stack-header">
          <div>
            <h2 id="stack-title">O que uso<br /><em>e o que estudo.</em></h2>
            <p className="stack-note">SQL e PL/SQL fazem parte do meu trabalho. As demais tecnologias fazem parte do meu estudo atual, e os níveis refletem onde estou hoje.</p>
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
        <div className="section-meta"><span>{sectionNumber("projetos")}</span><p>Projetos em destaque</p><i /></div>
        <div className="projects-intro">
          <h2 id="projetos-title">Ideias que<br /><em>já estão no ar.</em></h2>
          <p>Projetos próprios, construídos do zero. Em cada um, o problema, o meu papel, a stack real e um desafio técnico.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card${project.featured ? " project-card-featured" : ""}`}>
              <div className="project-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="project-status">{project.status}</span>
              </div>
              {project.screenshot && (
                <a href={project.href} target="_blank" rel="noreferrer" className="project-shot" tabIndex={-1} aria-hidden="true">
                  <img src={project.screenshot} alt="" width={960} height={600} loading="lazy" />
                </a>
              )}
              <div className="project-body">
                <div className="project-heading">
                  {project.logo && (
                    <img src={project.logo} alt="" className="project-logo" width={44} height={44} loading="lazy" />
                  )}
                  <div>
                    <p>{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <p className="project-description">{project.problem}</p>
                <dl className="project-facts">
                  <div><dt>Meu papel</dt><dd>{project.role}</dd></div>
                  <div><dt>Desafio</dt><dd>{project.challenge}</dd></div>
                </dl>
                <ul className="project-tags" aria-label="Stack">
                  {project.stack.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer">Ver site <ArrowUpRight size={15} /><span className="sr-only"> de {project.title}</span></a>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">Ver código <ArrowUpRight size={15} /><span className="sr-only"> de {project.title}</span></a>
                  )}
                </div>
              </div>
            </article>
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
        <div className="section-meta"><span>{sectionNumber("pratica")}</span><p>Na prática</p><i /></div>
        <div className="services-heading">
          <h2 id="pratica-title">Tecnologia<br /><em>fora da teoria.</em></h2>
          <p>Estas são as áreas em que já coloco a mão na massa, no trabalho e fora dele.</p>
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
      </Reveal>
    </section>
  );
}
