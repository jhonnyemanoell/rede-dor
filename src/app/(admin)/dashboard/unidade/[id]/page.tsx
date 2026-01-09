"use client";

import { use } from "react";
import { StatsCard } from "@/components/features/dashboard/StatsCard";
import { CreatePlanDialog } from "@/components/features/plans/CreatePlanDialog";
import { Button } from "@/components/shared/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Badge } from "@/components/shared/ui/badge";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  ClipboardList,
  Users,
  Calendar,
} from "lucide-react";
import { UNIDADES_MOCK, DIMENSAO_PLANO } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function UnidadeDashboardPage({ params }: PageProps) {
  const { id } = use(params);
  const unidade = UNIDADES_MOCK.find((u) => u.id === id);

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

  // Dados mock para estatísticas
  const stats = {
    totalAcoes: 24,
    emAndamento: 8,
    concluidas: 14,
    atrasadas: 2,
    eficiencia: 87,
  };

  // Planos recentes mock
  const planosRecentes = [
    {
      id: 1,
      titulo: "Adequação Escala UTI",
      responsavel: "Maria Santos",
      dias: 2,
      status: "em_andamento",
    },
    {
      id: 2,
      titulo: "Troca Filtros AC",
      responsavel: "João Torres",
      dias: 3,
      status: "pendente",
    },
    {
      id: 3,
      titulo: "Reunião de Feedback",
      responsavel: "Ana Rodrigues",
      dias: 5,
      status: "concluido",
    },
  ];

  // Distribuição por dimensão
  const distribuicaoDimensao = [
    { dimensao: "enps", count: 4 },
    { dimensao: "estrutura_trabalho", count: 3 },
    { dimensao: "colaboracao", count: 4 },
    { dimensao: "lideranca", count: 3 },
    { dimensao: "carreira_desenvolvimento", count: 4 },
    { dimensao: "pertencimento", count: 3 },
    { dimensao: "saude_bem_estar", count: 3 },
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
            {unidade.cidade}, {unidade.estado} • Código: {unidade.codigo}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={`/dashboard/unidade/${id}/planos`}>
            <Button variant="outline" className="gap-2">
              <ClipboardList size={18} />
              Ver Planos
            </Button>
          </Link>
          <CreatePlanDialog unidadeId={id} />
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total de Ações"
          value={stats.totalAcoes}
          description="Planos registrados"
          icon={TrendingUp}
          iconColor="text-blue-500"
        />

        <StatsCard
          title="Em Andamento"
          value={stats.emAndamento}
          description="Ações ativas"
          icon={Clock}
          iconColor="text-yellow-500"
          valueColor="text-yellow-600"
        />

        <StatsCard
          title="Concluídas"
          value={stats.concluidas}
          description="Este mês"
          icon={CheckCircle2}
          iconColor="text-green-500"
          valueColor="text-green-600"
        />

        <StatsCard
          title="Atrasadas"
          value={stats.atrasadas}
          description="Requer atenção"
          icon={AlertTriangle}
          iconColor="text-red-500"
          valueColor="text-red-600"
        />
      </div>

      {/* Seção de Eficiência */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Taxa de Eficiência
              </h3>
              <p className="text-sm text-muted-foreground">
                Baseado nas conclusões no prazo
              </p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold text-blue-600">
                {stats.eficiencia}%
              </span>
              <p className="text-sm text-green-600 flex items-center justify-end gap-1">
                <TrendingUp size={14} />
                +5% em relação ao mês anterior
              </p>
            </div>
          </div>
          <div className="mt-4 w-full bg-blue-100 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${stats.eficiencia}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Planos Recentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Planos Recentes</CardTitle>
            <Link href={`/dashboard/unidade/${id}/planos`}>
              <Button variant="ghost" size="sm" className="gap-1 text-blue-600">
                Ver todos <ArrowRight size={14} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {planosRecentes.map((plano) => (
                <div
                  key={plano.id}
                  className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        plano.status === "em_andamento" && "bg-blue-500",
                        plano.status === "pendente" && "bg-yellow-500",
                        plano.status === "concluido" && "bg-green-500"
                      )}
                    />
                    <div>
                      <p className="font-medium text-slate-800">
                        {plano.titulo}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users size={12} />
                        {plano.responsavel}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {plano.dias} dias atrás
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distribuição por Dimensão */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribuição por Dimensão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {distribuicaoDimensao.map((item) => {
                const dimensaoConfig =
                  DIMENSAO_PLANO[item.dimensao as keyof typeof DIMENSAO_PLANO];
                const percentage = (item.count / stats.totalAcoes) * 100;

                return (
                  <div key={item.dimensao}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={cn("text-xs", dimensaoConfig.color)}
                      >
                        {dimensaoConfig.label}
                      </Badge>
                      <span className="text-sm font-medium text-slate-600">
                        {item.count} ações
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className={cn(
                          "h-2 rounded-full transition-all",
                          item.dimensao === "enps" && "bg-rose-500",
                          item.dimensao === "estrutura_trabalho" &&
                            "bg-sky-500",
                          item.dimensao === "colaboracao" && "bg-teal-500",
                          item.dimensao === "lideranca" && "bg-violet-500",
                          item.dimensao === "carreira_desenvolvimento" &&
                            "bg-amber-500",
                          item.dimensao === "pertencimento" && "bg-fuchsia-500",
                          item.dimensao === "saude_bem_estar" &&
                            "bg-emerald-500"
                        )}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Próximos Vencimentos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Próximos Vencimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { titulo: "Treinamento Brigada", prazo: "01/01", atrasado: true },
              { titulo: "Auditoria Interna", prazo: "02/01", atrasado: true },
              {
                titulo: "Adequação Escala UTI",
                prazo: "12/01",
                atrasado: false,
              },
              { titulo: "Revisão Protocolos", prazo: "15/01", atrasado: false },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "p-3 rounded-lg border",
                  item.atrasado
                    ? "bg-red-50 border-red-200"
                    : "bg-slate-50 border-slate-200"
                )}
              >
                <p
                  className={cn(
                    "font-medium text-sm",
                    item.atrasado ? "text-red-700" : "text-slate-700"
                  )}
                >
                  {item.titulo}
                </p>
                <p
                  className={cn(
                    "text-xs mt-1 flex items-center gap-1",
                    item.atrasado ? "text-red-600" : "text-muted-foreground"
                  )}
                >
                  <Clock size={12} />
                  {item.atrasado ? "Vencido em " : "Vence em "}
                  {item.prazo}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
