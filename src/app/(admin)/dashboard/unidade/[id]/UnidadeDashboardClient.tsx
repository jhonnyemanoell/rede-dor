"use client";

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
import { DIMENSAO_PLANO } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Unidade {
  id: string;
  nome: string;
  codigo: string;
  cidade: string;
  estado: string;
}

interface UnidadeDashboardClientProps {
  unidade: Unidade;
}

export function UnidadeDashboardClient({
  unidade,
}: UnidadeDashboardClientProps) {
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
          <Link href={`/dashboard/unidade/${unidade.id}/planos`}>
            <Button variant="outline" className="gap-2">
              <ClipboardList size={18} />
              Ver Planos
            </Button>
          </Link>
          <CreatePlanDialog unidadeId={unidade.id} />
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

      {/* Card de Eficiência */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardContent className="py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Eficiência Geral
              </p>
              <p className="text-4xl font-bold text-blue-700">
                {stats.eficiencia}%
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Taxa de conclusão dentro do prazo
              </p>
            </div>
            <div className="h-24 w-24 rounded-full border-8 border-blue-200 flex items-center justify-center bg-white">
              <TrendingUp className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid Principal */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Planos Recentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Planos Recentes</CardTitle>
            <Link href={`/dashboard/unidade/${unidade.id}/planos`}>
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todos <ArrowRight size={14} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {planosRecentes.map((plano) => (
                <div
                  key={plano.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{plano.titulo}</p>
                    <p className="text-sm text-slate-500">
                      {plano.responsavel}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        plano.status === "concluido"
                          ? "default"
                          : plano.status === "pendente"
                          ? "secondary"
                          : "outline"
                      }
                      className={cn(
                        plano.status === "concluido" &&
                          "bg-green-100 text-green-700",
                        plano.status === "pendente" &&
                          "bg-yellow-100 text-yellow-700",
                        plano.status === "em_andamento" &&
                          "bg-blue-100 text-blue-700"
                      )}
                    >
                      {plano.status === "concluido"
                        ? "Concluído"
                        : plano.status === "pendente"
                        ? "Pendente"
                        : "Em Andamento"}
                    </Badge>
                    <p className="text-xs text-slate-400 mt-1">
                      {plano.dias} dias restantes
                    </p>
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
                const dimensaoInfo =
                  DIMENSAO_PLANO[item.dimensao as keyof typeof DIMENSAO_PLANO];
                const total = distribuicaoDimensao.reduce(
                  (acc, d) => acc + d.count,
                  0
                );
                const percentage = Math.round((item.count / total) * 100);

                return (
                  <div key={item.dimensao} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={cn("text-xs", dimensaoInfo?.color)}
                      >
                        {dimensaoInfo?.label || item.dimensao}
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
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-red-50 border-red-100">
              <Calendar className="h-8 w-8 text-red-500" />
              <div>
                <p className="font-medium text-slate-800">Hoje</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-yellow-50 border-yellow-100">
              <Calendar className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="font-medium text-slate-800">Esta Semana</p>
                <p className="text-2xl font-bold text-yellow-600">5</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-blue-50 border-blue-100">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium text-slate-800">Este Mês</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Atalhos Rápidos */}
      <div className="grid gap-4 md:grid-cols-4">
        <Link href={`/dashboard/unidade/${unidade.id}/equipe`}>
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 py-6">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium">Equipe</p>
                <p className="text-sm text-muted-foreground">
                  Gerenciar membros
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={`/dashboard/unidade/${unidade.id}/calendario`}>
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 py-6">
              <Calendar className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium">Calendário</p>
                <p className="text-sm text-muted-foreground">Ver agenda</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={`/dashboard/unidade/${unidade.id}/relatorios`}>
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 py-6">
              <TrendingUp className="h-8 w-8 text-purple-500" />
              <div>
                <p className="font-medium">Relatórios</p>
                <p className="text-sm text-muted-foreground">
                  Análise de dados
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={`/dashboard/unidade/${unidade.id}/configuracoes`}>
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 py-6">
              <ClipboardList className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-medium">Configurações</p>
                <p className="text-sm text-muted-foreground">Ajustar unidade</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
