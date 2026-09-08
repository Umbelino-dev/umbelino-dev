export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "aprendendo", label: "Aprendendo" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export const technologies = [
  { name: "JavaScript", level: "Aprendendo", group: "Linguagem" },
  { name: "Python", level: "Aprendendo", group: "Linguagem" },
  { name: "Node.js", level: "Aprendendo", group: "Runtime / backend" },
  { name: "C++", level: "Aprendendo", group: "Linguagem" },
  { name: "HTML", level: "Em prática", group: "Web" },
  { name: "CSS", level: "Em prática", group: "Web" },
];

export const projects = [
  {
    number: "01",
    title: "Via Hebraica",
    eyebrow: "Projeto pessoal · Estudos bíblicos",
    description:
      "Aplicação criada para auxiliar estudos bíblicos, organizando recursos e conteúdo em uma experiência digital pensada para estudo e consulta.",
    tags: ["Web", "Estudos bíblicos", "Projeto pessoal"],
    href: "https://viahebraica.app/",
    logo: "/project-via-hebraica-logo.png",
  },
  {
    number: "02",
    title: "Centro do Despertar",
    eyebrow: "Projeto pessoal · Gestão de grupos",
    description:
      "Sistema em desenvolvimento para apoiar a gestão de grupos, com acompanhamento de pessoas, radar de participantes e organização das informações do grupo.",
    tags: ["Sistema web", "Gestão", "Projeto pessoal"],
    href: "https://centrododespertar.live/",
    logo: "/project-despertar-logo.png",
  },
];

export const practicalAreas = [
  {
    number: "01",
    title: "Projetos web",
    description:
      "Construo projetos próprios enquanto estudo desenvolvimento web e procuro transformar ideias em experiências que possam ser realmente utilizadas.",
  },
  {
    number: "02",
    title: "Programação em aprendizado",
    description:
      "Meu momento atual é de formação: estudo Python, JavaScript, Node.js, C++, HTML e CSS, sempre tentando colocar o conteúdo em prática.",
  },
  {
    number: "03",
    title: "Celulares e eletrônicos",
    description:
      "Também faço reparos e manutenção de celulares e eletrônicos, ainda em processo de aprendizado e aprimoramento técnico.",
  },
];
