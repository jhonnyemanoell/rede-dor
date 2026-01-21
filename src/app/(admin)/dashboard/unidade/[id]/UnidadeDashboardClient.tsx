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

  // --- AJUSTE GERAL DE ESTILO ---
  // Uma classe base para os cards principais ficarem mais leves
  const mainCardClass = "shadow-sm border-slate-100/60";

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#004186] uppercase">
            {unidade.nome}
          </h1>
          <p className="text-muted-foreground mt-1">
            {unidade.cidade}, {unidade.estado} • Código: {unidade.codigo}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={`/dashboard/unidade/${unidade.id}/planos`}>
            <Button variant="outline" className="gap-2 bg-white hover:bg-slate-50 border-slate-200 text-slate-700">
              <ClipboardList size={18} className="text-slate-500" />
              Ver Planos
            </Button>
          </Link>
          <CreatePlanDialog unidadeId={unidade.id} />
        </div>
      </div>

      {/* Cards de Estatísticas - StatsCard já deve ter estilos leves internamente */}
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
          iconColor="text-amber-500"
          valueColor="text-amber-600"
        />
        <StatsCard
          title="Concluídas"
          value={stats.concluidas}
          description="Este mês"
          icon={CheckCircle2}
          iconColor="text-emerald-500"
          valueColor="text-emerald-600"
        />
        <StatsCard
          title="Atrasadas"
          value={stats.atrasadas}
          description="Requer atenção"
          icon={AlertTriangle}
          iconColor="text-rose-500"
          valueColor="text-rose-600"
        />
      </div>

      {/* CARD DE EFICIÊNCIA */}
      <Card className="bg-gradient-to-br from-white via-white to-blue-50/50 border-blue-100/50 shadow-sm relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/30 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

        <CardContent className="py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Eficiência Geral
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-[#004186]">
                  {stats.eficiencia}%
                </p>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded-full">
                  +2.4%
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Taxa de conclusão dentro do prazo (KPI Principal)
              </p>
            </div>
            
            {/* Círculo do Ícone - MUDANÇA PRINCIPAL AQUI */}
            {/* De: border-[6px] border-blue-50 */}
            {/* Para: border-[3px] border-blue-50/80 (Mais fino e levemente transparente) */}
            <div className="h-20 w-20 rounded-full border-[3px] border-blue-50/80 flex items-center justify-center bg-white/80 shadow-sm backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-[#004186]" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid Principal */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Planos Recentes */}
        <Card className={mainCardClass}>
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-[#004186]">Planos Recentes</CardTitle>
            <Link href={`/dashboard/unidade/${unidade.id}/planos`}>
              <Button variant="ghost" size="sm" className="gap-1 text-slate-500 hover:text-[#004186] hover:bg-blue-50/50">
                Ver todos <ArrowRight size={14} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              {planosRecentes.map((plano) => (
                <div
                  key={plano.id}
                  // MUDANÇA: Borda muito mais leve (slate-50) e background mais sutil
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50/30 border border-slate-50 hover:border-blue-100/50 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 text-sm">{plano.titulo}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {plano.responsavel}
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    {/* MUDANÇA: Badges sem borda (border-0), usando apenas cores de fundo suaves */}
                    <Badge
                      variant="secondary"
                      className={cn(
                        "font-medium px-2 py-0.5 rounded-md bg-opacity-60",
                        plano.status === "concluido" && "bg-emerald-50 text-emerald-700",
                        plano.status === "pendente" && "bg-amber-50 text-amber-700",
                        plano.status === "em_andamento" && "bg-blue-50 text-blue-700"
                      )}
                    >
                      {plano.status === "concluido"
                        ? "Concluído"
                        : plano.status === "pendente"
                        ? "Pendente"
                        : "Em Andamento"}
                    </Badge>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {plano.dias} dias restantes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distribuição por Dimensão */}
        <Card className={mainCardClass}>
          <CardHeader className="pb-2 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-[#004186]">Distribuição por Dimensão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-4">
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
                      {/* MUDANÇA: Badge mais leve */}
                      <Badge
                        variant="secondary"
                        className={cn("text-[10px] font-semibold text-slate-600 bg-slate-50/80 border-0")}
                      >
                        {dimensaoInfo?.label || item.dimensao}
                      </Badge>
                      <span className="text-xs font-medium text-slate-500">
                        {item.count} ações
                      </span>
                    </div>
                    {/* Barras Suavizadas */}
                    <div className="w-full bg-slate-50 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500 opacity-80", // Opacidade nas cores
                          item.dimensao === "enps" && "bg-rose-400",
                          item.dimensao === "estrutura_trabalho" && "bg-sky-400",
                          item.dimensao === "colaboracao" && "bg-teal-400",
                          item.dimensao === "lideranca" && "bg-indigo-400",
                          item.dimensao === "carreira_desenvolvimento" && "bg-amber-400",
                          item.dimensao === "pertencimento" && "bg-purple-400",
                          item.dimensao === "saude_bem_estar" && "bg-emerald-400"
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
      <Card className={mainCardClass}>
        <CardHeader className="pb-2 border-b border-slate-50">
          <CardTitle className="text-lg font-bold text-[#004186]">Próximos Vencimentos</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid gap-4 md:grid-cols-3">
            {/* MUDANÇA: Bordas coloridas muito mais finas e transparentes (border-rose-100/40) */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-rose-100/40 bg-rose-50/20 hover:bg-rose-50/40 transition-colors">
              <div className="p-2.5 bg-white rounded-lg shadow-sm ring-1 ring-rose-50">
                <Calendar className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Hoje</p>
                <p className="text-2xl font-bold text-rose-600">2</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-amber-100/40 bg-amber-50/20 hover:bg-amber-50/40 transition-colors">
              <div className="p-2.5 bg-white rounded-lg shadow-sm ring-1 ring-amber-50">
                 <Calendar className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Esta Semana</p>
                <p className="text-2xl font-bold text-amber-600">5</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-100/40 bg-blue-50/20 hover:bg-blue-50/40 transition-colors">
              <div className="p-2.5 bg-white rounded-lg shadow-sm ring-1 ring-blue-50">
                <Calendar className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Este Mês</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Atalhos Rápidos */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Equipe", icon: Users, color: "text-blue-500", desc: "Gerenciar membros", href: `/dashboard/unidade/${unidade.id}/equipe` },
          { label: "Calendário", icon: Calendar, color: "text-emerald-500", desc: "Ver agenda", href: `/dashboard/unidade/${unidade.id}/calendario` },
          { label: "Relatórios", icon: TrendingUp, color: "text-purple-500", desc: "Análise de dados", href: `/dashboard/unidade/${unidade.id}/relatorios` },
          { label: "Configurações", icon: ClipboardList, color: "text-orange-500", desc: "Ajustar unidade", href: `/dashboard/unidade/${unidade.id}/configuracoes` },
        ].map((item) => (
          <Link key={item.label} href={item.href}>
            {/* MUDANÇA: Borda do card mais leve */}
            <Card className="hover:shadow-md border-slate-100/60 hover:border-blue-100 transition-all cursor-pointer group">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                   <item.icon className={cn("h-6 w-6", item.color)} />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">{item.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}