// ============================================================
//  CATÁLOGO DE APLICATIVOS — Kairós Apps
// ============================================================
//
//  Adicionar um novo aplicativo é simples:
//  1) Acrescente um objeto no array `apps` abaixo.
//  2) Crie (opcionalmente) um mockup SVG em src/components/mockups/<slug>.tsx
//     OU coloque PNGs/JPGs em /public/apps/<slug>/ e aponte em `screenshots`.
//  3) (Opcional) Defina `ogImage` com imagem própria ou use a gerada dinamicamente.
//
//  Campos:
//   - slug        : identificador único (kebab-case). Vira URL /apps/<slug>
//   - name        : nome de exibição ("Kairós Igreja")
//   - tagline     : frase curta (max ~50 chars) — vai no card e na página
//   - description : descrição comercial completa
//   - category    : slug de uma categoria existente em `categories`
//   - target      : público-alvo
//   - features    : funcionalidades REAIS do app (não invente)
//   - benefits    : benefícios traduzidos em linguagem comercial
//   - status      : "available" | "coming" | "beta"
//   - highlight   : true para aparecer em destaque no hero
//   - price       : "Consulte" ou valor anual em texto ("R$ 397/ano")
//   - url         : link para o app (se já publicado). Vazio se não houver.
//   - screenshots : array de imagens. Cada item pode ser:
//                   { kind: "svg", component: "igreja" }        → mockup SVG
//                   { kind: "image", src: "/apps/igreja/01.png" } → imagem estática
//   - accent      : gradiente da marca (classe Tailwind)
//   - icon        : emoji ou glifo que aparece no card
//   - seo         : { title, description, keywords } opcional
//
// ============================================================

export type Screenshot =
  | { kind: "svg"; component: string; alt?: string; caption?: string }
  | { kind: "image"; src: string; alt?: string; caption?: string };

export type AppCategory =
  | "oficina"
  | "gestao"
  | "estoque"
  | "orcamentos"
  | "igrejas"
  | "agenda"
  | "vidracaria"
  | "ia";

export type AppStatus = "available" | "beta" | "coming";

export interface KairoApp {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: AppCategory;
  target: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  status: AppStatus;
  highlight?: boolean;
  price: string;
  url?: string;
  screenshots: Screenshot[];
  accent: {
    from: string; // classe Tailwind
    to: string;
    ring: string;
  };
  icon: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// ------------------------------------------------------------
//  CATEGORIAS — aparecem na seção "Qual problema você resolve?"
//  Para criar uma nova: acrescente um objeto aqui com um slug
//  novo e use esse slug em `app.category`.
// ------------------------------------------------------------

export interface Categoria {
  slug: AppCategory;
  nome: string;
  icon: string; // emoji
  descricao: string;
}

export const categories: Categoria[] = [
  {
    slug: "oficina",
    nome: "Oficina",
    icon: "🔧",
    descricao: "Oficinas mecânicas, funilarias e prestadores de serviço.",
  },
  {
    slug: "gestao",
    nome: "Gestão",
    icon: "📊",
    descricao: "CRM, clientes, contatos e processos comerciais.",
  },
  {
    slug: "estoque",
    nome: "Estoque",
    icon: "📦",
    descricao: "Almoxarifado, entradas, saídas e controle de produtos.",
  },
  {
    slug: "orcamentos",
    nome: "Orçamentos",
    icon: "💰",
    descricao: "Cotação, propostas comerciais e fechamento de pedidos.",
  },
  {
    slug: "igrejas",
    nome: "Igrejas",
    icon: "⛪",
    descricao: "Gestão eclesiástica, membros, agenda e comunicação.",
  },
  {
    slug: "agenda",
    nome: "Agenda",
    icon: "📅",
    descricao: "Compromissos, lembretes e organização do tempo.",
  },
  {
    slug: "vidracaria",
    nome: "Vidraçaria",
    icon: "🪟",
    descricao: "Vidraçarias, esquadrias e instalações.",
  },
  {
    slug: "ia",
    nome: "Inteligência Artificial",
    icon: "🤖",
    descricao: "Agentes de IA, automações e assistentes inteligentes.",
  },
];

// ------------------------------------------------------------
//  APLICATIVOS
//  Adicione novos objetos aqui. A landing page se atualiza
//  automaticamente.
// ------------------------------------------------------------

export const apps: KairoApp[] = [
  {
    slug: "igreja",
    name: "Kairós Igreja",
    tagline: "Gestão pastoral simples e organizada.",
    description:
      "Aplicativo de gestão pastoral que reúne membros, congregações, agenda, patrimônio e comunicação da igreja em um só lugar.",
    category: "igrejas",
    target: "Igrejas, congregações e liderança pastoral.",
    features: [
      "Cadastro de membros e congregações",
      "Agenda pastoral e eventos",
      "Geração de PDFs (cartas, declarações, relatórios)",
      "Chat com regras para dúvidas frequentes",
      "Acesso multiplataforma (web e PWA)",
    ],
    benefits: [
      "Menos papel e menos retrabalho administrativo",
      "Comunicação direta com a liderança",
      "Histórico organizado de cada membro",
      "Disponível em qualquer dispositivo",
    ],
    howItWorks: [
      "Cadastre sua igreja e congregações",
      "Adicione membros e líderes",
      "Organize agenda e eventos pastorais",
      "Emita documentos e acompanhe relatórios",
    ],
    status: "available",
    highlight: true,
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "igreja", alt: "Dashboard Kairós Igreja" },
      { kind: "svg", component: "igreja-membros", alt: "Cadastro de membros" },
      { kind: "svg", component: "igreja-agenda", alt: "Agenda pastoral" },
    ],
    accent: {
      from: "from-indigo-500",
      to: "to-blue-600",
      ring: "ring-indigo-400/40",
    },
    icon: "⛪",
    seo: {
      title: "Kairós Igreja — Gestão pastoral simples",
      description:
        "Sistema de gestão pastoral: membros, congregações, agenda, patrimônio e PDFs em um só app.",
      keywords: [
        "gestão pastoral",
        "sistema para igreja",
        "cadastro de membros",
        "agenda pastoral",
      ],
    },
  },
  {
    slug: "crm",
    name: "Kairós CRM",
    tagline: "Clientes, conversas e oportunidades em um só lugar.",
    description:
      "CRM enxuto para times comerciais que precisam organizar contatos, acompanhar conversas e fechar mais negócios sem complicação.",
    category: "gestao",
    target: "Pequenos times comerciais, autônomos e prestadores.",
    features: [
      "Cadastro de contatos e organizações",
      "Linha do tempo de conversas por cliente",
      "Estágios de funil personalizáveis",
      "Integração com WhatsApp",
      "Agentes de IA para qualificação",
    ],
    benefits: [
      "Histórico completo de cada cliente",
      "Atendimento mais rápido e contextualizado",
      "Visão clara do funil de vendas",
      "Automações que economizam tempo",
    ],
    howItWorks: [
      "Importe ou cadastre seus contatos",
      "Conecte o WhatsApp da equipe",
      "Organize oportunidades por estágio",
      "Acompanhe e feche mais negócios",
    ],
    status: "available",
    highlight: true,
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "crm", alt: "Pipeline Kairós CRM" },
      { kind: "svg", component: "crm-conversa", alt: "Conversa com cliente" },
      { kind: "svg", component: "crm-funil", alt: "Funil de vendas" },
    ],
    accent: {
      from: "from-cyan-500",
      to: "to-blue-600",
      ring: "ring-cyan-400/40",
    },
    icon: "📊",
    seo: {
      title: "Kairós CRM — CRM simples com WhatsApp e IA",
      description:
        "CRM enxuto com pipeline, histórico de conversas, integração com WhatsApp e agentes de IA.",
      keywords: ["crm simples", "crm com whatsapp", "crm para pequenas empresas"],
    },
  },
  {
    slug: "dental",
    name: "Kairós Dental",
    tagline: "Atendimento odontológico mais organizado.",
    description:
      "Aplicativo para consultórios e clínicas odontológicas que centraliza pacientes, agendamentos e prontuários em uma interface direta.",
    category: "agenda",
    target: "Consultórios e clínicas odontológicas de pequeno e médio porte.",
    features: [
      "Cadastro de pacientes",
      "Agenda de consultas",
      "Prontuário do paciente",
      "Funciona como PWA (instalável no celular)",
    ],
    benefits: [
      "Agenda sempre à mão",
      "Histórico do paciente centralizado",
      "Instalação direta no celular",
      "Sem instalação complexa em servidor",
    ],
    howItWorks: [
      "Cadastre os pacientes",
      "Organize consultas na agenda",
      "Registre o atendimento no prontuário",
      "Acompanhe retornos e histórico",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "dental", alt: "Agenda Kairós Dental" },
      { kind: "svg", component: "dental-paciente", alt: "Prontuário" },
    ],
    accent: {
      from: "from-sky-500",
      to: "to-cyan-600",
      ring: "ring-sky-400/40",
    },
    icon: "🦷",
    seo: {
      title: "Kairós Dental — Gestão para consultório odontológico",
      description:
        "Sistema para clínicas odontológicas: pacientes, agenda e prontuário em um só app.",
      keywords: [
        "sistema odontológico",
        "software para dentista",
        "agenda odontológica",
      ],
    },
  },
  {
    slug: "studio-beleza",
    name: "Kairós Studio",
    tagline: "Salão de beleza: clientes, agenda e serviços.",
    description:
      "Aplicativo para salões de beleza e studios que organiza clientes, profissionais, serviços e agenda em uma interface rápida.",
    category: "agenda",
    target: "Salões de beleza, barbearias e studios.",
    features: [
      "Cadastro de clientes",
      "Catálogo de serviços",
      "Agenda por profissional",
      "Acompanhamento de atendimentos",
    ],
    benefits: [
      "Agenda organizada por profissional",
      "Histórico de cada cliente",
      "Visual moderno e direto",
      "Pensado para celular",
    ],
    howItWorks: [
      "Cadastre clientes e serviços",
      "Defina os profissionais",
      "Organize a agenda do dia",
      "Acompanhe o histórico do cliente",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "studio", alt: "Agenda Kairós Studio" },
      { kind: "svg", component: "studio-cliente", alt: "Cliente" },
    ],
    accent: {
      from: "from-fuchsia-500",
      to: "to-purple-600",
      ring: "ring-fuchsia-400/40",
    },
    icon: "💇",
    seo: {
      title: "Kairós Studio — Gestão para salão de beleza",
      description:
        "Sistema para salões de beleza: clientes, serviços e agenda por profissional.",
      keywords: [
        "sistema para salão de beleza",
        "agenda salão",
        "software para barbearia",
      ],
    },
  },
  {
    slug: "engenharia",
    name: "Kairós Engenharia",
    tagline: "Gestão técnica para pequenos escritórios.",
    description:
      "Aplicativo voltado para gestão de projetos e documentos técnicos em pequenos escritórios de engenharia.",
    category: "gestao",
    target: "Pequenos escritórios de engenharia e autônomos da área técnica.",
    features: [
      "Cadastro de clientes e projetos",
      "Organização de documentos",
      "Acompanhamento de etapas",
      "Assinatura digital de documentos",
    ],
    benefits: [
      "Documentos centralizados",
      "Menos papel e mais agilidade",
      "Assinatura digital integrada",
      "Foco em projetos pequenos e médios",
    ],
    howItWorks: [
      "Cadastre clientes e projetos",
      "Suba documentos técnicos",
      "Acompanhe as etapas do projeto",
      "Colete assinaturas digitais",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "engenharia", alt: "Projetos Kairós Engenharia" },
      { kind: "svg", component: "engenharia-doc", alt: "Documento técnico" },
    ],
    accent: {
      from: "from-emerald-500",
      to: "to-cyan-600",
      ring: "ring-emerald-400/40",
    },
    icon: "🏗️",
    seo: {
      title: "Kairós Engenharia — Gestão para escritório de engenharia",
      description:
        "Sistema para gestão de projetos, documentos e assinatura digital em pequenos escritórios de engenharia.",
      keywords: [
        "gestão engenharia",
        "software para engenheiro",
        "assinatura digital projetos",
      ],
    },
  },
  {
    slug: "ponto",
    name: "Kairós Ponto",
    tagline: "Controle de ponto simples para equipes.",
    description:
      "Aplicativo de controle de ponto para pequenas equipes com painéis para funcionário e administração.",
    category: "gestao",
    target: "Pequenas empresas, clínicas, escritórios e equipes operacionais.",
    features: [
      "Registro de ponto pelo celular",
      "Painel do funcionário",
      "Painel administrativo",
      "Histórico de marcações",
    ],
    benefits: [
      "Marca ponto de qualquer lugar",
      "Funciona em celular e computador",
      "Sem relógio físico",
      "Histórico simples de consultar",
    ],
    howItWorks: [
      "Cadastre funcionários e equipes",
      "O funcionário registra pelo app",
      "A administração acompanha os registros",
      "Exporte relatórios quando precisar",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "ponto", alt: "Kairós Ponto" },
      { kind: "svg", component: "ponto-admin", alt: "Painel admin" },
    ],
    accent: {
      from: "from-amber-500",
      to: "to-orange-600",
      ring: "ring-amber-400/40",
    },
    icon: "⏱️",
    seo: {
      title: "Kairós Ponto — ponto eletrônico simples",
      description:
        "Controle de ponto pelo celular com painel do funcionário e da administração.",
      keywords: ["ponto eletrônico", "controle de ponto", "ponto pelo celular"],
    },
  },
  {
    slug: "leitor",
    name: "Kairós Leitor",
    tagline: "Leitura organizada em qualquer dispositivo.",
    description:
      "Aplicativo leitor com instalação local (PWA), focado em uma experiência de leitura direta e organizada.",
    category: "ia",
    target: "Leitores, estudiosos e pequenos grupos de estudo.",
    features: [
      "Leitura offline (PWA)",
      "Instalável no celular",
      "Interface direta",
      "Funciona localmente no dispositivo",
    ],
    benefits: [
      "Funciona sem depender de conexão constante",
      "Instalável como app",
      "Visual limpo para leitura longa",
      "Sem cadastro complicado",
    ],
    howItWorks: [
      "Instale o app no celular",
      "Adicione seus textos",
      "Leia com a interface dedicada",
      "Continue de onde parou",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "leitor", alt: "Kairós Leitor" },
    ],
    accent: {
      from: "from-violet-500",
      to: "to-indigo-600",
      ring: "ring-violet-400/40",
    },
    icon: "📖",
    seo: {
      title: "Kairós Leitor — Leitor PWA offline",
      description:
        "Aplicativo leitor PWA, instalável e com leitura offline.",
      keywords: ["leitor pwa", "leitor offline", "app de leitura"],
    },
  },
  {
    slug: "teologia",
    name: "Kairós Teologia",
    tagline: "Estudo teológico com PDFs e leitura focada.",
    description:
      "Aplicativo para estudantes e professores de teologia com foco em leitura, organização e geração de materiais em PDF.",
    category: "gestao",
    target: "Estudantes de teologia, professores e seminários.",
    features: [
      "Leitura focada",
      "Geração de PDFs",
      "Catálogo de materiais",
      "Funciona em computador e celular",
    ],
    benefits: [
      "Estudo mais organizado",
      "Material exportável em PDF",
      "Interface dedicada para leitura longa",
      "Funciona localmente",
    ],
    howItWorks: [
      "Adicione os materiais de estudo",
      "Leia no modo focado",
      "Exporte trechos em PDF",
      "Compartilhe com alunos",
    ],
    status: "available",
    price: "Consulte",
    screenshots: [
      { kind: "svg", component: "teologia", alt: "Kairós Teologia" },
    ],
    accent: {
      from: "from-blue-600",
      to: "to-indigo-700",
      ring: "ring-blue-400/40",
    },
    icon: "📚",
    seo: {
      title: "Kairós Teologia — Estudo teológico com PDFs",
      description:
        "Aplicativo para estudo de teologia com leitura focada e geração de PDFs.",
      keywords: ["estudo teológico", "teologia app", "leitura bíblica"],
    },
  },
];

// ------------------------------------------------------------
//  HELPERS
// ------------------------------------------------------------

export function getAppBySlug(slug: string): KairoApp | undefined {
  return apps.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: AppCategory): Categoria | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAppsByCategory(category: AppCategory): KairoApp[] {
  return apps.filter((a) => a.category === category);
}

export function getHighlightApps(): KairoApp[] {
  return apps.filter((a) => a.highlight);
}