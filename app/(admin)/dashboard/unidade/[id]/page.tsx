import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CreatePlanDialog } from "@/components/admin/CreatePlanDialog";

// Mock Data
const MOCK_PLANS = [
  { id: 1, titulo: "Adequação Escala UTI", desc: "Cobrir lacuna do plantão noturno detectada na auditoria.", status: "Em Andamento", prazo: "12/01", prioridade: "Alta", progresso: 65, autor: "Maria Silva" },
  { id: 2, titulo: "Troca Filtros AC", desc: "Manutenção preventiva setor B conforme norma técnica.", status: "Pendente", prazo: "20/01", prioridade: "Média", progresso: 0, autor: "João Tec" },
  { id: 3, titulo: "Reunião de Feedback", desc: "Alinhar processos com equipe de enfermagem do 3º turno.", status: "Concluído", prazo: "05/01", prioridade: "Baixa", progresso: 100, autor: "Ana RH" },
  { id: 4, titulo: "Treinamento Brigada", desc: "Renovação do certificado anual da equipe de segurança.", status: "Atrasado", prazo: "01/01", prioridade: "Crítica", progresso: 90, autor: "Carlos Seg" },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UnitDashboardPage({ params }: PageProps) {
  const resolvedParams = await params;
  const unitName = resolvedParams.id.replace("-", " ").toUpperCase();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Topo: Título + Ação Principal (Alinhado à direita conforme pedido) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{unitName}</h1>
          <p className="text-muted-foreground mt-1">Gerenciamento Operacional</p>
        </div>
        {/* Botão reposicionado para o topo */}
        <CreatePlanDialog />
      </div>

      {/* 2. Grid de Cards Estilo "Classroom" */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MOCK_PLANS.map((plan) => (
          <Card 
            key={plan.id} 
            className="group relative flex flex-col overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Banner Superior Colorido */}
            <div className={`h-24 w-full p-4 flex flex-col justify-between bg-gradient-to-r ${
              plan.prioridade === 'Crítica' || plan.prioridade === 'Alta' ? 'from-orange-50 to-orange-100 border-b border-orange-200' : 
              plan.status === 'Concluído' ? 'from-emerald-50 to-emerald-100 border-b border-emerald-200' : 
              'from-blue-50 to-blue-100 border-b border-blue-200'
            }`}>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-xs font-semibold text-slate-700 shadow-sm">
                   {plan.status}
                </Badge>
                {/* Bolinha de Urgência */}
                <div className={`h-3 w-3 rounded-full border-2 border-white shadow-sm ${
                   plan.prioridade === 'Alta' || plan.prioridade === 'Crítica' ? 'bg-red-500' : 
                   plan.prioridade === 'Média' ? 'bg-yellow-400' : 'bg-green-400'
                }`} title={`Prioridade: ${plan.prioridade}`} />
              </div>
            </div>

            {/* Conteúdo */}
            <CardHeader className="pb-2 pt-4 relative">
               {/* Avatar Flutuante */}
               <div className="absolute -top-8 right-4">
                  <Avatar className="h-10 w-10 border-4 border-white shadow-sm">
                    <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-xs">{plan.autor.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                  </Avatar>
               </div>
              <CardTitle className="line-clamp-1 text-lg font-bold text-slate-800" title={plan.titulo}>
                {plan.titulo}
              </CardTitle>
              <CardDescription className="line-clamp-2 text-xs min-h-[2.5em]">
                {plan.desc}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-3 flex-grow">
              <div className="space-y-1.5 mt-2">
                <div className="flex justify-between text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                  <span>Conclusão</span>
                  <span>{plan.progresso}%</span>
                </div>
                <Progress value={plan.progresso} className="h-1.5 bg-slate-100" />
              </div>
            </CardContent>

            {/* Rodapé */}
            <CardFooter className="flex justify-between border-t bg-slate-50/50 px-4 py-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Clock size={14} className="text-slate-400" /> 
                {plan.prazo}
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-primary transition-colors">
                <MoreHorizontal size={16} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}