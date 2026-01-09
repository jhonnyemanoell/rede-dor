"use client";

import { use, useState, useMemo } from "react";
import { PlanCard } from "@/components/features/dashboard/PlanCard";
import { CreatePlanDialog } from "@/components/features/plans/CreatePlanDialog";
import { Button } from "@/components/shared/ui/button";
import { UNIDADES_MOCK, DIMENSAO_PLANO } from "@/constants";
import type { PlanoAcao } from "@/types";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Dados mock para os planos
const PLANOS_MOCK: PlanoAcao[] = [
  {
    id: "1",
    titulo: "Adequação Escala UTI",
    descricao: "Cobrir lacuna do plantão noturno detectada na auditoria.",
    unidadeId: "quinta-dor",
    responsavel: "Maria Santos",
    dataInicio: new Date("2026-01-01"),
    dataFim: new Date("2026-01-12"),
    status: "em_andamento",
    prioridade: "alta",
    dimensao: "carreira_desenvolvimento",
    progresso: 65,
    categoria: "Recursos Humanos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    titulo: "Troca Filtros AC",
    descricao: "Manutenção preventiva setor B conforme norma técnica.",
    unidadeId: "quinta-dor",
    responsavel: "João Torres",
    dataInicio: new Date("2026-01-05"),
    dataFim: new Date("2026-01-20"),
    status: "pendente",
    prioridade: "media",
    dimensao: "enps",
    progresso: 0,
    categoria: "Infraestrutura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    titulo: "Reunião de Feedback",
    descricao: "Alinhar processos com equipe de enfermagem do 3º turno.",
    unidadeId: "quinta-dor",
    responsavel: "Ana Rodrigues",
    dataInicio: new Date("2026-01-01"),
    dataFim: new Date("2026-01-05"),
    status: "concluido",
    prioridade: "baixa",
    dimensao: "colaboracao",
    progresso: 100,
    categoria: "Gestão de Processos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    titulo: "Treinamento Brigada",
    descricao: "Renovação do certificado anual da equipe de segurança.",
    unidadeId: "quinta-dor",
    responsavel: "Carlos Silva",
    dataInicio: new Date("2025-12-15"),
    dataFim: new Date("2026-01-01"),
    status: "atrasado",
    prioridade: "alta",
    dimensao: "saude_bem_estar",
    progresso: 90,
    categoria: "Segurança do Paciente",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    titulo: "Revisão Protocolos COVID",
    descricao: "Atualizar procedimentos de acordo com novas diretrizes MS.",
    unidadeId: "quinta-dor",
    responsavel: "Lucia Pereira",
    dataInicio: new Date("2026-01-05"),
    dataFim: new Date("2026-01-15"),
    status: "em_andamento",
    prioridade: "alta",
    dimensao: "pertencimento",
    progresso: 40,
    categoria: "Qualidade Assistencial",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    titulo: "Calibração Equipamentos",
    descricao: "Calibrar monitores cardíacos do setor de emergência.",
    unidadeId: "quinta-dor",
    responsavel: "Roberto Fernandes",
    dataInicio: new Date("2026-01-10"),
    dataFim: new Date("2026-01-25"),
    status: "pendente",
    prioridade: "media",
    dimensao: "enps",
    progresso: 0,
    categoria: "Infraestrutura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    titulo: "Inventário Medicamentos",
    descricao: "Contagem mensal do estoque da farmácia central.",
    unidadeId: "quinta-dor",
    responsavel: "Patricia Gomes",
    dataInicio: new Date("2026-01-01"),
    dataFim: new Date("2026-01-03"),
    status: "concluido",
    prioridade: "baixa",
    dimensao: "estrutura_trabalho",
    progresso: 100,
    categoria: "Gestão de Processos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    titulo: "Manutenção Elevadores",
    descricao: "Inspeção técnica obrigatória dos elevadores sociais.",
    unidadeId: "quinta-dor",
    responsavel: "Fernando Martins",
    dataInicio: new Date("2026-01-10"),
    dataFim: new Date("2026-01-18"),
    status: "em_andamento",
    prioridade: "media",
    dimensao: "colaboracao",
    progresso: 75,
    categoria: "Infraestrutura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    titulo: "Auditoria Interna",
    descricao: "Preparação de documentos para auditoria de qualidade.",
    unidadeId: "quinta-dor",
    responsavel: "Amanda Costa",
    dataInicio: new Date("2025-12-20"),
    dataFim: new Date("2026-01-02"),
    status: "atrasado",
    prioridade: "alta",
    dimensao: "lideranca",
    progresso: 30,
    categoria: "Compliance",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    titulo: "Capacitação Recepção",
    descricao:
      "Treinamento de atendimento humanizado para novos colaboradores.",
    unidadeId: "quinta-dor",
    responsavel: "Bruno Nascimento",
    dataInicio: new Date("2026-01-15"),
    dataFim: new Date("2026-01-28"),
    status: "pendente",
    prioridade: "baixa",
    dimensao: "carreira_desenvolvimento",
    progresso: 0,
    categoria: "Recursos Humanos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    titulo: "Revisão Contratos",
    descricao: "Análise e renovação dos contratos de fornecedores.",
    unidadeId: "quinta-dor",
    responsavel: "Eduardo Rocha",
    dataInicio: new Date("2026-01-02"),
    dataFim: new Date("2026-01-08"),
    status: "concluido",
    prioridade: "baixa",
    dimensao: "pertencimento",
    progresso: 100,
    categoria: "Financeiro",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "12",
    titulo: "Workshop Liderança",
    descricao: "Desenvolvimento de habilidades de gestão para coordenadores.",
    unidadeId: "quinta-dor",
    responsavel: "Fernanda Lima",
    dataInicio: new Date("2026-01-20"),
    dataFim: new Date("2026-02-05"),
    status: "pendente",
    prioridade: "media",
    dimensao: "lideranca",
    progresso: 0,
    categoria: "Recursos Humanos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

type PrioridadeFilter = "todos" | "baixa" | "media" | "alta";

export default function PlanosPage({ params }: PageProps) {
  const { id } = use(params);
  const unidade = UNIDADES_MOCK.find((u) => u.id === id);
  const [filtroAtivo, setFiltroAtivo] = useState<PrioridadeFilter>("todos");

  // Filtrar planos por prioridade
  const planosFiltrados = useMemo(() => {
    if (filtroAtivo === "todos") return PLANOS_MOCK;
    if (filtroAtivo === "alta") {
      return PLANOS_MOCK.filter(
        (p) => p.prioridade === "alta" || p.prioridade === "critica"
      );
    }
    return PLANOS_MOCK.filter((p) => p.prioridade === filtroAtivo);
  }, [filtroAtivo]);

  if (!unidade) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Unidade não encontrada
          </h2>
          <p className="text-muted-foreground mt-2">
            A unidade solicitada não existe.
          </p>
        </div>
      </div>
    );
  }

  const filtros: { label: string; value: PrioridadeFilter; color?: string }[] =
    [
      { label: "Todos", value: "todos" },
      { label: "Alta", value: "alta", color: "bg-red-500" },
      { label: "Média", value: "media", color: "bg-yellow-500" },
      { label: "Baixa", value: "baixa", color: "bg-green-500" },
    ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">
            {unidade.nome}
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerenciamento Operacional
          </p>
        </div>
        <CreatePlanDialog unidadeId={id} />
      </div>

      {/* Filtros por Prioridade */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground mr-2">
          Filtrar por urgência:
        </span>
        {filtros.map((filtro) => (
          <Button
            key={filtro.value}
            variant={filtroAtivo === filtro.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroAtivo(filtro.value)}
            className={cn("gap-2", filtroAtivo === filtro.value && "shadow-md")}
          >
            {filtro.color && (
              <span className={cn("w-2 h-2 rounded-full", filtro.color)} />
            )}
            {filtro.label}
          </Button>
        ))}
      </div>

      {/* Grid de Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {planosFiltrados.map((plano) => (
          <PlanCard
            key={plano.id}
            plano={plano}
            onClick={() => {
              console.log("Abrir detalhes do plano:", plano.id);
              // TODO: Abrir modal de detalhes ou navegar para página do plano
            }}
          />
        ))}
      </div>

      {/* Mensagem quando não há planos */}
      {planosFiltrados.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg font-medium text-slate-600">
            Nenhum plano encontrado
          </p>
          <p className="text-muted-foreground mt-1">
            Não há planos com o filtro selecionado.
          </p>
        </div>
      )}

      {/* Legenda de Dimensões */}
      <div className="flex items-center gap-4 pt-4 border-t">
        <span className="text-sm text-muted-foreground">Dimensões:</span>
        {Object.entries(DIMENSAO_PLANO).map(([key, value]) => (
          <span
            key={key}
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium border",
              value.color
            )}
          >
            {value.label}
          </span>
        ))}
      </div>
    </div>
  );
}
