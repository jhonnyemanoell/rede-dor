"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/shared/ui/dialog";
import { Badge } from "@/components/shared/ui/badge";
import { Checkbox } from "@/components/shared/ui/checkbox";
import { Textarea } from "@/components/shared/ui/textarea"; // Importei o Textarea
import { Button } from "@/components/shared/ui/button";     // Importei o Button
import { Label } from "@/components/shared/ui/label";       // Importei o Label
import { 
  Calendar, 
  User, 
  Clock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  ListTodo,
  LucideIcon,
  MessageSquare, // Ícone para observações
  Star,          // Ícone para avaliação
  Send           // Ícone para enviar
} from "lucide-react";
import { formatDate, cn } from "@/lib/utils";
import type { PlanoAcao } from "@/types";
import { useState } from "react";

interface PlanDetailsDialogProps {
  plano: PlanoAcao;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface StatusConfigItem {
  label: string;
  color: string;
  icon: LucideIcon;
}

export function PlanDetailsDialog({
  plano,
  open,
  onOpenChange,
}: PlanDetailsDialogProps) {
  
  // Estado do Checklist
  const [steps, setSteps] = useState([
    { id: 1, label: "Levantamento de absenteísmo e horas extras", checked: true },
    { id: 2, label: "Reunião com coordenação de enfermagem", checked: true },
    { id: 3, label: "Solicitação de vaga ao RH", checked: true },
    { id: 4, label: "Treinamento admissional dos novos técnicos", checked: true },
  ]);

  // --- NOVOS ESTADOS PARA FEEDBACK ---
  const [rating, setRating] = useState(0); // 0 a 5 estrelas
  const [observation, setObservation] = useState("");

  const toggleStep = (id: number) => {
    setSteps(prev => prev.map(step => 
      step.id === id ? { ...step, checked: !step.checked } : step
    ));
  };

  const statusConfig: Record<string, StatusConfigItem> = {
    pendente: { 
      label: "Pendente", 
      color: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100",
      icon: Clock
    },
    em_andamento: { 
      label: "Em Andamento", 
      color: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100",
      icon: ArrowRight
    },
    concluido: { 
      label: "Concluído", 
      color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-100",
      icon: CheckCircle2
    },
    atrasado: { 
      label: "Atrasado", 
      color: "bg-red-100 text-red-700 border-red-200 hover:bg-red-100",
      icon: AlertTriangle
    },
  };

  const currentStatus = statusConfig[plano.status] || statusConfig.pendente;
  const StatusIcon = currentStatus.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto p-0 gap-0 border-0 shadow-2xl">
        
        {/* CABEÇALHO */}
        <div className="p-6 pb-4 border-b bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex justify-between items-start mb-3">
            <Badge 
              variant="outline" 
              className={cn("px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1.5 transition-colors", currentStatus.color)}
            >
              <StatusIcon size={12} strokeWidth={2.5} />
              {currentStatus.label}
            </Badge>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">ID: #{plano.id.toString().padStart(4, '0')}</span>
          </div>

          <DialogTitle className="text-xl md:text-2xl font-bold text-[#004186] leading-snug mb-3">
            {plano.titulo}
          </DialogTitle>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <div className="flex items-center gap-1.5" title="Prazo Final">
              <Calendar size={14} className="text-slate-400" />
              <span>{formatDate(plano.dataFim)}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Responsável">
              <User size={14} className="text-slate-400" />
              <span>{plano.responsavel}</span>
            </div>
          </div>
        </div>

        {/* CORPO DO MODAL */}
        <div className="p-6 space-y-8">
          
          {/* 1. Contexto */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#004186] font-semibold text-sm uppercase tracking-wide">
              <FileText size={16} />
              <h3>Contexto & Diretrizes</h3>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm text-slate-600 leading-relaxed text-justify shadow-sm">
              <p className="mb-3">
                Durante a auditoria interna realizada em 10/12, foi identificada uma lacuna recorrente na escala de enfermagem do turno noturno na UTI Adulto II. O não cumprimento do dimensionamento mínimo (RDC 7) expõe a unidade a riscos assistenciais e passivos trabalhistas.
              </p>
              <p>
                Este plano visa reestruturar a escala, avaliar a necessidade de contratação imediata ou remanejamento de colaboradores de setores de menor complexidade, garantindo a cobertura total dos plantões de fim de semana.
              </p>
            </div>
          </section>

          <div className="h-px bg-slate-100 w-full" />

          {/* 2. Checklist */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#004186] font-semibold text-sm uppercase tracking-wide">
                <ListTodo size={16} />
                <h3>Etapas de Execução</h3>
              </div>
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                {Math.round((steps.filter(s => s.checked).length / steps.length) * 100)}% Concluído
              </Badge>
            </div>

            <div className="space-y-2.5">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 group",
                    step.checked 
                      ? "bg-emerald-50/50 border-emerald-100" 
                      : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"
                  )}
                >
                  <Checkbox 
                    id={`step-${step.id}`} 
                    checked={step.checked}
                    onCheckedChange={() => toggleStep(step.id)}
                    className={cn(
                      "transition-all duration-200 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500",
                      !step.checked && "border-slate-300 group-hover:border-blue-400"
                    )}
                  />
                  <label
                    htmlFor={`step-${step.id}`}
                    className={cn(
                      "text-sm font-medium leading-none cursor-pointer w-full py-1 transition-colors select-none",
                      step.checked ? "text-emerald-700 line-through decoration-emerald-300" : "text-slate-700 group-hover:text-slate-900"
                    )}
                  >
                    {step.label}
                  </label>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-slate-100 w-full" />

          {/* 3. NOVA SEÇÃO: Feedback e Observações */}
          <section className="space-y-5 bg-blue-50/30 p-5 rounded-xl border border-blue-100/50">
            <div className="flex items-center gap-2 text-[#004186] font-semibold text-sm uppercase tracking-wide">
              <MessageSquare size={16} />
              <h3>Acompanhamento & Feedback</h3>
            </div>

            {/* Avaliação de Satisfação */}
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Satisfação da Equipe com o Projeto</Label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-90"
                    title={`Avaliar com ${star} estrela(s)`}
                  >
                    <Star 
                      size={24} 
                      className={cn(
                        "transition-colors duration-200",
                        star <= rating 
                          ? "fill-amber-400 text-amber-400" // Estrela cheia amarela
                          : "text-slate-300 hover:text-amber-200" // Estrela vazia cinza
                      )} 
                    />
                  </button>
                ))}
                {rating > 0 && (
                   <span className="text-xs font-medium text-amber-600 ml-2 animate-in fade-in">
                     {rating === 5 ? "Excelente!" : rating >= 3 ? "Satisfatório" : "Precisa Melhorar"}
                   </span>
                )}
              </div>
            </div>

            {/* Campo de Texto */}
            <div className="space-y-2">
              <Label htmlFor="obs" className="text-slate-700 font-medium">Observações / Problemas Enfrentados</Label>
              <Textarea 
                id="obs"
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Descreva aqui se houve algum impedimento, feedback da equipe ou ponto de atenção..."
                className="bg-white border-slate-200 focus-visible:ring-[#004186] min-h-[100px] resize-y"
              />
            </div>

            {/* Botão de Enviar Feedback */}
            <div className="flex justify-end">
              <Button 
                className="bg-[#004186] hover:bg-[#00356b] gap-2 shadow-sm transition-all hover:translate-y-[-1px]"
                disabled={!observation && rating === 0} // Desabilita se vazio
              >
                <Send size={16} />
                Registrar Acompanhamento
              </Button>
            </div>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}