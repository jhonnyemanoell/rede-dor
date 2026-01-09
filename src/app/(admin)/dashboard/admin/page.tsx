"use client";

import { StatsCard } from "@/components/features/dashboard/StatsCard";
import { BarChart3, Users, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Visão Geral da Rede
      </h1>

      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total de Unidades"
          value={12}
          description="Monitoradas em tempo real"
          icon={Users}
          iconColor="text-muted-foreground"
        />

        <StatsCard
          title="Ações em Atraso"
          value={8}
          description="Requer atenção imediata"
          icon={AlertTriangle}
          iconColor="text-red-500"
          valueColor="text-red-600"
        />

        <StatsCard
          title="Concluídos (Mês)"
          value={145}
          description="+12% vs mês anterior"
          icon={CheckCircle2}
          iconColor="text-green-500"
          valueColor="text-green-600"
          trend={{ value: "12%", isPositive: true }}
        />

        <StatsCard
          title="Eficiência Global"
          value="87%"
          description="Meta atingida"
          icon={BarChart3}
          iconColor="text-blue-500"
          valueColor="text-blue-600"
        />
      </div>

      <div className="rounded-xl border bg-slate-50 border-dashed border-slate-300 h-64 flex items-center justify-center text-slate-400">
        Área dos Gráficos (Recharts)
      </div>
    </div>
  );
}
