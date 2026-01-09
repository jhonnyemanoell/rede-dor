// Tipos principais da aplicação

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipo: "admin" | "unidade";
  unidadeId?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Unidade {
  id: string;
  nome: string;
  codigo: string;
  endereco: string;
  cidade: string;
  estado: string;
  responsavel?: string;
  telefone?: string;
  email?: string;
  status: "ativa" | "inativa";
  createdAt: Date;
  updatedAt: Date;
}

export interface PlanoAcao {
  id: string;
  titulo: string;
  descricao: string;
  unidadeId: string;
  responsavel: string;
  dataInicio: Date;
  dataFim: Date;
  status: "pendente" | "em_andamento" | "concluido" | "atrasado" | "cancelado";
  prioridade: "baixa" | "media" | "alta" | "critica";
  dimensao:
    | "enps"
    | "estrutura_trabalho"
    | "colaboracao"
    | "lideranca"
    | "carreira_desenvolvimento"
    | "pertencimento"
    | "saude_bem_estar";
  progresso: number; // 0-100
  categoria: string;
  tags?: string[];
  observacoes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalUnidades: number;
  acoesEmAtraso: number;
  acoesConcluidas: number;
  eficienciaGlobal: number;
  acoesPorStatus: {
    pendente: number;
    em_andamento: number;
    concluido: number;
    atrasado: number;
  };
}

export interface LoginFormData {
  email?: string;
  password: string;
  unidade?: string;
}

export type UserRole = "admin" | "unidade";

export interface NavItem {
  title: string;
  href: string;
  icon?: any;
  badge?: string | number;
  children?: NavItem[];
}
