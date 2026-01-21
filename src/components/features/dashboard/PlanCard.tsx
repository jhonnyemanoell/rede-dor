"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/shared/ui/card";
import { Badge } from "@/components/shared/ui/badge";
import type { PlanoAcao } from "@/types";
import { DIMENSAO_PLANO, PRIORIDADE_PLANO } from "@/constants";
import { formatDate } from "@/lib/utils";
import { Clock, Star } from "lucide-react"; // Import da Star
import { cn } from "@/lib/utils";
import { PlanDetailsDialog } from "@/components/features/plans/PlanDetailsDialog";

interface PlanCardProps {
  plano: PlanoAcao;
}

export function PlanCard({ plano }: PlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configurações visuais
  const dimensaoConfig = DIMENSAO_PLANO[plano.dimensao];
  const prioridadeConfig = PRIORIDADE_PLANO[plano.prioridade];

  // Cores da bolinha de Prioridade
  const prioridadeColors = {
    baixa: "bg-green-500",
    media: "bg-yellow-400",
    alta: "bg-orange-500",
    critica: "bg-red-500",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const isLate = plano.status === "atrasado" || (new Date() > new Date(plano.dataFim) && plano.progresso < 100);

  return (
    <>
      <Card
        onClick={() => setIsModalOpen(true)}
        className="group relative cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden"
      >
        <CardContent className="p-6 flex flex-col h-full gap-4">
          
          {/* TOPO: Data (Esq) vs Prioridade + Star (Dir) */}
          <div className="flex justify-between items-start">
            
            {/* Data */}
            <div className={cn(
              "flex items-center gap-1.5 text-sm font-medium transition-colors",
              isLate ? "text-red-500" : "text-slate-400 group-hover:text-slate-600"
            )}>
              <Clock size={16} />
              <span>{formatDate(plano.dataFim)}</span>
            </div>

            {/* Coluna da Direita: Bolinha + Estrela */}
            <div className="flex flex-col items-end gap-3">
               {/* Bolinha de Prioridade */}
               <div className="relative">
                  <div className={cn(
                    "w-4 h-4 rounded-full shadow-sm",
                    prioridadeColors[plano.prioridade]
                  )} title={`Prioridade: ${prioridadeConfig.label}`} />
                  
                  {plano.prioridade === 'critica' && (
                    <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 animate-ping opacity-75" />
                  )}
               </div>

               {/* Ícone de Favoritar (Star) */}
               <button 
                 onClick={(e) => {
                   e.stopPropagation(); // Evita abrir o modal ao clicar na estrela
                   // Lógica de favoritar viria aqui
                 }}
                 className="text-slate-300 hover:text-yellow-400 transition-colors hover:scale-110 active:scale-95"
               >
                 <Star size={18} />
               </button>
            </div>
          </div>

          {/* MEIO: Título e Descrição */}
          <div className="space-y-2 mt-[-10px]"> {/* Margem negativa para compensar o espaço da estrela */}
            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-[#004186] transition-colors pr-8">
              {plano.titulo}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
              {plano.descricao}
            </p>
          </div>

          {/* TAG: Dimensão */}
          <div>
            <Badge 
              variant="secondary" 
              className={cn(
                "rounded-full px-3 py-0.5 text-xs font-medium border-0 transition-colors",
                dimensaoConfig?.color || "bg-slate-100 text-slate-600"
              )}
            >
              {dimensaoConfig?.label || "Geral"}
            </Badge>
          </div>

          {/* RODAPÉ: Responsável e Barra */}
          <div className="mt-auto pt-2 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0 border border-transparent group-hover:border-slate-200 transition-colors">
              {getInitials(plano.responsavel)}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-end">
                <span className="text-xs font-bold text-slate-400 group-hover:text-[#004186] transition-colors">
                  {plano.progresso}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#004186] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${plano.progresso}%` }}
                />
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      <PlanDetailsDialog 
        plano={plano} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
}