"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Badge } from "@/components/shared/ui/badge";
import { Progress } from "@/components/shared/ui/progress";
import type { PlanoAcao } from "@/types";
import { STATUS_PLANO, PRIORIDADE_PLANO, DIMENSAO_PLANO } from "@/constants";
import { formatDate } from "@/lib/utils";
import { Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  plano: PlanoAcao;
  onClick?: () => void;
}

export function PlanCard({ plano, onClick }: PlanCardProps) {
  const statusConfig = STATUS_PLANO[plano.status];
  const prioridadeConfig = PRIORIDADE_PLANO[plano.prioridade];
  const dimensaoConfig = DIMENSAO_PLANO[plano.dimensao];

  // Cor do indicador de prioridade
  const prioridadeColors = {
    baixa: "bg-green-500",
    media: "bg-yellow-500",
    alta: "bg-red-500",
    critica: "bg-red-600",
  };

  // Cor da barra de progresso baseada no status
  const progressColors = {
    pendente: "bg-yellow-500",
    em_andamento: "bg-blue-500",
    concluido: "bg-green-500",
    atrasado: "bg-red-500",
    cancelado: "bg-gray-400",
  };

  // Obtém as iniciais do responsável
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card
      className="hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 group relative"
      style={{ borderLeftColor: statusConfig.color === "blue" ? "#3b82f6" : 
               statusConfig.color === "green" ? "#22c55e" : 
               statusConfig.color === "red" ? "#ef4444" : 
               statusConfig.color === "yellow" ? "#eab308" : "#9ca3af" }}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs font-medium",
              statusConfig.color === "blue" && "bg-blue-50 text-blue-700 border-blue-200",
              statusConfig.color === "green" && "bg-green-50 text-green-700 border-green-200",
              statusConfig.color === "red" && "bg-red-50 text-red-700 border-red-200",
              statusConfig.color === "yellow" && "bg-yellow-50 text-yellow-700 border-yellow-200",
              statusConfig.color === "gray" && "bg-gray-50 text-gray-700 border-gray-200"
            )}
          >
            {statusConfig.label}
          </Badge>
          
          <div className="flex items-center gap-2">
            {/* Indicador de prioridade */}
            <div 
              className={cn(
                "w-3 h-3 rounded-full",
                prioridadeColors[plano.prioridade]
              )} 
              title={`Prioridade: ${prioridadeConfig.label}`}
            />
          </div>
        </div>

        {/* Avatar do responsável */}
        <div className="flex justify-end mt-2">
          <div 
            className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600"
            title={plano.responsavel}
          >
            {getInitials(plano.responsavel)}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div>
          <CardTitle className="text-base font-semibold text-slate-800 line-clamp-1">
            {plano.titulo}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {plano.descricao}
          </p>
        </div>

        {/* Badge de Dimensão */}
        <Badge 
          variant="outline" 
          className={cn("text-xs", dimensaoConfig?.color)}
        >
          {dimensaoConfig?.label || "Sem dimensão"}
        </Badge>

        {/* Progresso */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className={cn(
              "font-medium uppercase tracking-wide",
              plano.status === "atrasado" && "text-red-600"
            )}>
              Conclusão
            </span>
            <span className={cn(
              "font-bold",
              plano.status === "atrasado" && "text-red-600"
            )}>
              {plano.progresso}%
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5">
            <div
              className={cn(
                "h-1.5 rounded-full transition-all",
                progressColors[plano.status]
              )}
              style={{ width: `${plano.progresso}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock size={14} />
            <span className="text-xs">{formatDate(plano.dataFim)}</span>
          </div>
          <button 
            className="p-1 hover:bg-slate-100 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Abrir menu de ações
            }}
          >
            <MoreHorizontal size={16} className="text-slate-400" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

