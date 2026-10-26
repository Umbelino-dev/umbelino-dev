export const SITE_URL = "https://umbelino.vercel.app";

export const contact = {
  whatsappHref:
    "https://wa.me/5548991000913?text=Ol%C3%A1%20Iury!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  whatsappLabel: "+55 (48) 99100-0913",
  email: "iuryumbelino1@gmail.com",
  github: "https://github.com/Umbelino-dev/",
  linkedin: "https://www.linkedin.com/in/iuryumbelino/",
  instagram: "https://www.instagram.com/umbelino.zs/",
  souStudio: "https://soustudio.com.br",
};

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
    period: "abr/2026 – atual",
    current: true,
    items: [
      "Suporte a usuários por chamados e e-mail",
      "Consultas e manipulação de dados em SQL e PL/SQL (Oracle)",
      "Configuração e manutenção da plataforma DOX (EMA Sistemas)",
      "Padronização de templates de e-mail com HTML e construtor em SQL",
      "Criação e ajuste de relatórios",
    ],
  },
  {
    role: "Auxiliar Administrativo de TI",
    company: "Giassi Supermercados",
    period: "jan/2026 – mar/2026",
    current: false,
    items: ["Primeira função na equipe de TI"],
  },
  {
    role: "Jovem Aprendiz e Operador de Caixas",
    company: "Giassi Supermercados · Centro de Distribuição",
    period: "abr/2024 – dez/2025",
    current: false,
    items: [
      "Jovem Aprendiz no Centro de Distribuição (abr/2024 – jul/2025)",
      "Operador de Caixas na logística do CD (nov/2025 – dez/2025)",
    ],
  },
];

export const education = [
  {
    course: "Ciência da Computação",
    institution: "UNESC",
    status: "2º semestre · previsão 2030",
  },
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "UNOPAR · EAD",
    status: "2º semestre · previsão 2028",
  },
  { course: "Técnico em Administração", institution: "Senac", status: "2025" },
  { course: "Introdução a HTML", institution: "Fundação Bradesco", status: "2024" },
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

export type Project = {
  title: string;
  eyebrow: string;
  status: string;
  problem: string;
  role: string;
  stack: string[];
  challenge: string;
  href: string;
  repo?: string;
  logo?: string;
  screenshot?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Koinonia",
    eyebrow: "Produto SOU Studio · Igrejas e comunidades",
    status: "No ar",
    problem:
      "A liderança de igrejas e comunidades precisa saber quem está se afastando, mas presença, eventos e cuidado ficam espalhados.",
    role: "Construí o produto inteiro sozinho, com apoio de IA: interface, banco de dados e autenticação.",
    stack: ["TanStack Start", "React 19", "TypeScript", "Supabase", "PostgreSQL + RLS", "PWA"],
    challenge:
      "Isolar os dados de cada organização e controlar o acesso por módulo. Resolvi no próprio banco: regras de RLS no Supabase e permissões de ver/editar por módulo para cada gestor. O Radar de Cuidado transforma a chamada dos encontros em uma lista de quem precisa de atenção.",
    href: "https://usekoinonia.com.br/",
    logo: "/project-koinonia-logo.webp",
    screenshot: "/project-koinonia.webp",
    featured: true,
  },
  {
    title: "Site da SOU Studio",
    eyebrow: "Minha empresa · Site institucional",
    status: "No ar",
    problem:
      "Apresentar a SOU Studio com clareza e levar o visitante a pedir um orçamento em poucos cliques.",
    role: "Design e desenvolvimento do site.",
    stack: ["Next.js 16", "React 19", "TypeScript", "CSS Modules"],
    challenge:
      "Ter tema claro e escuro, animações e um formulário de orçamento sem biblioteca de animação nem kit de componentes. Tudo é CSS Modules com tokens próprios, as páginas são geradas estaticamente no build e o movimento pode ser reduzido.",
    href: "https://soustudio.com.br/",
    screenshot: "/project-sou-studio.webp",
  },
  {
    title: "Este portfólio",
    eyebrow: "Projeto pessoal · Site",
    status: "No ar",
    problem: "Mostrar com clareza minha experiência em TI e os projetos que já construí.",
    role: "Desenvolvimento, conteúdo e design.",
    stack: ["React 19", "TypeScript", "TanStack Start (SSR)", "Tailwind CSS"],
    challenge:
      "Deixar o site leve sem perder a identidade visual. As imagens da página inicial caíram de cerca de 900 KB para menos de 150 KB, já com as capturas dos projetos, usando WebP no tamanho certo, e a página é renderizada no servidor para carregar rápido e ser indexada.",
    href: "https://umbelino.vercel.app/",
    repo: "https://github.com/Umbelino-dev/umbelino-dev",
    screenshot: "/project-portfolio.webp",
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
