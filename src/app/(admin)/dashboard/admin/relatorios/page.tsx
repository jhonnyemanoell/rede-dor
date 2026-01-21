"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/shared/ui/button";
import { cn } from "@/lib/utils"; // Importante para juntar as classes

const relatorios = [
  {
    id: "1",
    titulo: "Relatório Mensal de Performance",
    descricao: "Análise completa de todos os planos de ação do mês",
    icone: BarChart3,
    periodo: "Janeiro 2026",
  },
  {
    id: "2",
    titulo: "Planos em Atraso por Unidade",
    descricao: "Detalhamento de ações atrasadas por hospital",
    icone: TrendingUp,
    periodo: "Últimos 30 dias",
  },
  {
    id: "3",
    titulo: "Taxa de Conclusão",
    descricao: "Métricas de eficiência e conclusão de planos",
    icone: FileText,
    periodo: "Trimestre Q1 2026",
  },
];

export default function RelatoriosPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#004186]">
            Relatórios
          </h1>
          <p className="text-muted-foreground mt-1">
            Análises e métricas sobre os planos de ação
          </p>
        </div>
        <Button className="bg-[#004186] hover:bg-[#00356b]">
          <Download className="mr-2 h-4 w-4" />
          Exportar Todos
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatorios.map((relatorio) => {
          const Icon = relatorio.icone;
          return (
            <Card
              key={relatorio.id}
              className="group cursor-pointer transition-all duration-300 hover:border-[#004186] hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* O Ícone muda de cor no hover do card */}
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#004186] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#004186] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-base group-hover:text-[#004186] transition-colors">
                        {relatorio.titulo}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  {relatorio.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{relatorio.periodo}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400 group-hover:text-[#004186]">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Card de "Gerar Novo" também ganha a borda, mas sutil */}
      <Card className="border-dashed transition-all duration-300 hover:border-[#004186] hover:bg-slate-50/50">
        <CardHeader>
          <CardTitle>Gerar Novo Relatório</CardTitle>
          <CardDescription>
            Crie relatórios personalizados com filtros específicos
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8 text-slate-400" />
            </div>
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento
            </p>
            <Button variant="outline" disabled>
              Criar Relatório Personalizado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}