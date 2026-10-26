export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "aprendendo", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "pratica", label: "Na prática" },
  { id: "contato", label: "Contato" },
];

/** Número editorial da seção, igual ao mostrado na sidebar (Início = 00). */
export function sectionNumber(id: string): string {
  const index = navItems.findIndex((item) => item.id === id);
  return String(Math.max(index, 0)).padStart(2, "0");
}

export const profile = {
  name: "Iury Umbelino",
  role: "Assistente de TI no Giassi",
  roleShort: "Assistente de TI · Giassi",
  kicker: "Suporte de TI · SQL · Desenvolvimento web",
  openTo: "Aberto a vagas de Suporte de TI, Desenvolvedor Júnior e Estágio em TI",
  location: "Remoto ou presencial em Içara, Criciúma e região",
};

export const experience = [
  {
    role: "Assistente de TI",
    company: "Giassi Supermercados",
    current: true,
    items: [
      "Suporte a usuários",
      "Consultas e manipulação de dados em SQL e PL/SQL (Oracle)",
      "Configuração e manutenção da plataforma DOX (EMA Sistemas)",
      "Padronização de templates de e-mail com HTML e construtor em SQL",
    ],
  },
  {
    role: "Jovem Aprendiz",
    company: "Giassi Supermercados · Administrativo",
    current: false,
    items: ["Primeira experiência na empresa, na área administrativa"],
  },
];

export const education = [
  { course: "Ciência da Computação", institution: "UNESC", status: "Em andamento" },
  { course: "Análise e Desenvolvimento de Sistemas", institution: "UNOPAR", status: "Em andamento" },
  { course: "Administração", institution: "Senac", status: "Formação" },
  { course: "Introdução a HTML", institution: "Fundação Bradesco", status: "Certificação" },
];

export const technologies = [
  { name: "SQL", level: "Uso no trabalho", group: "Banco de dados" },
  { name: "PL/SQL · Oracle", level: "Uso no trabalho", group: "Banco de dados" },
  { name: "HTML", level: "Em prática", group: "Web" },
  { name: "CSS", level: "Em prática", group: "Web" },
  { name: "JavaScript", level: "Aprendendo", group: "Linguagem" },
  { name: "Python", level: "Aprendendo", group: "Linguagem" },
  { name: "Node.js", level: "Aprendendo", group: "Runtime / backend" },
  { name: "C++", level: "Aprendendo", group: "Linguagem" },
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
    title: "Koinonia",
    eyebrow: "Produto SOU Studio · Igrejas e comunidades",
    description:
      "Plataforma para igrejas e comunidades acompanharem pessoas, presença, eventos e cuidado em um só lugar, com um radar que mostra quem está se afastando antes que vire distância.",
    tags: ["Sistema web", "PWA", "Gestão", "Supabase"],
    href: "https://usekoinonia.com.br/",
    logo: "/project-koinonia-logo.png",
  },
];

export const practicalAreas = [
  {
    number: "01",
    title: "Suporte e dados",
    description:
      "No Giassi, atendo usuários, consulto e ajusto dados com SQL e PL/SQL e mantenho a plataforma DOX funcionando no dia a dia.",
  },
  {
    number: "02",
    title: "Projetos web",
    description:
      "Construo projetos próprios, como a Koinonia, e coloco em prática o que estudo de Python, JavaScript, Node.js, C++, HTML e CSS.",
  },
  {
    number: "03",
    title: "Celulares e eletrônicos",
    description:
      "Sempre que consigo, faço reparos e manutenção de celulares e eletrônicos, um trabalho que faço fora do horário da TI.",
  },
];
