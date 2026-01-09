// Constantes da aplicação

export const UNIDADES_MOCK = [
  {
    id: "arthur-ramos",
    nome: "Arthur Ramos",
    codigo: "ar001",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "esperanca",
    nome: "Esperança",
    codigo: "es002",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "esperanca-olinda",
    nome: "Esperança Olinda",
    codigo: "EO003",
    cidade: "Olinda",
    estado: "PE",
  },
  {
    id: "mediax",
    nome: "Mediax",
    codigo: "MX004",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "memorial",
    nome: "Memorial",
    codigo: "MM005",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "sao-lucas",
    nome: "São Lucas",
    codigo: "SL006",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "sao-marcos",
    nome: "São Marcos",
    codigo: "SM006",
    cidade: "Recife",
    estado: "PE",
  },
  {
    id: "udi",
    nome: "UDI",
    codigo: "UD001",
    cidade: "Pernambuco",
    estado: "PE",
  },
] as const;

export const STATUS_PLANO = {
  pendente: { label: "Pendente", color: "yellow", variant: "secondary" },
  em_andamento: { label: "Em Andamento", color: "blue", variant: "default" },
  concluido: { label: "Concluído", color: "green", variant: "default" },
  atrasado: { label: "Atrasado", color: "red", variant: "destructive" },
  cancelado: { label: "Cancelado", color: "gray", variant: "outline" },
} as const;

export const PRIORIDADE_PLANO = {
  baixa: { label: "Baixa", color: "gray" },
  media: { label: "Média", color: "yellow" },
  alta: { label: "Alta", color: "orange" },
  critica: { label: "Crítica", color: "red" },
} as const;

export const DIMENSAO_PLANO = {
  enps: {
    label: "e-NPS",
    color: "bg-rose-100 text-rose-700 border-rose-200",
  },
  estrutura_trabalho: {
    label: "Estrutura de Trabalho",
    color: "bg-sky-100 text-sky-700 border-sky-200",
  },
  colaboracao: {
    label: "Colaboração",
    color: "bg-teal-100 text-teal-700 border-teal-200",
  },
  lideranca: {
    label: "Liderança",
    color: "bg-violet-100 text-violet-700 border-violet-200",
  },
  carreira_desenvolvimento: {
    label: "Carreira e Desenvolvimento",
    color: "bg-amber-100 text-amber-700 border-amber-200",
  },
  pertencimento: {
    label: "Pertencimento",
    color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  },
  saude_bem_estar: {
    label: "Saúde e Bem-estar",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
} as const;

export const CATEGORIAS_PLANO = [
  "Qualidade Assistencial",
  "Segurança do Paciente",
  "Gestão de Processos",
  "Infraestrutura",
  "Recursos Humanos",
  "Financeiro",
  "Compliance",
  "Tecnologia da Informação",
  "Sustentabilidade",
  "Outros",
] as const;

export const ROUTES = {
  home: "/",
  login: "/login",
  admin: {
    dashboard: "/dashboard/admin",
    unidades: "/dashboard/admin/unidades",
    relatorios: "/dashboard/admin/relatorios",
    usuarios: "/dashboard/admin/usuarios",
    configuracoes: "/dashboard/admin/configuracoes",
  },
  unidade: {
    dashboard: (id: string) => `/dashboard/unidade/${id}`,
    planos: (id: string) => `/dashboard/unidade/${id}/planos`,
    novo_plano: (id: string) => `/dashboard/unidade/${id}/planos/novo`,
  },
} as const;
