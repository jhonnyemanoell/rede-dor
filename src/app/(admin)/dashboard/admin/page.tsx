"use client";

import { StatsCard } from "@/components/features/dashboard/StatsCard";
import { BarChart3, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card";

// --- DADOS MOCKADOS ---

const PERFORMANCE_DATA = [
  { name: "Esperança", eficiencia: 92 },
  { name: "Mediax", eficiencia: 85 },
  { name: "São Luiz", eficiencia: 78 },
  { name: "UDI", eficiencia: 74 },
  { name: "Memorial", eficiencia: 65 },
];

const STATUS_DATA = [
  { name: "Concluídos", value: 145, color: "#22c55e" }, 
  { name: "Em Andamento", value: 80, color: "#004186" }, // Azul da Marca
  { name: "Atrasados", value: 35, color: "#ef4444" },   
  { name: "Pendentes", value: 45, color: "#eab308" },   
];

const EVOLUTION_DATA = [
  { name: "Ago", criados: 40, concluidos: 24 },
  { name: "Set", criados: 30, concluidos: 13 },
  { name: "Out", criados: 20, concluidos: 38 },
  { name: "Nov", criados: 27, concluidos: 39 },
  { name: "Dez", criados: 18, concluidos: 48 },
  { name: "Jan", criados: 23, concluidos: 38 },
];

const CATEGORY_DATA = [
  { name: "Infraestrutura", value: 85 },
  { name: "RH & Pessoas", value: 65 },
  { name: "Processos", value: 45 },
  { name: "Segurança", value: 30 },
  { name: "Tecnologia", value: 20 },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          {/* Título com Azul da Marca */}
          <h1 className="text-3xl font-bold tracking-tight text-[#004186]">
            Visão Geral da Rede
          </h1>
          <p className="text-muted-foreground mt-1">
             Indicadores estratégicos e operacionais
          </p>
        </div>
        <span className="text-xs bg-blue-50 text-[#004186] px-3 py-1 rounded-full font-semibold border border-blue-100">
           Atualizado: Hoje, 14:30
        </span>
      </div>

      {/* Cards de KPIs (Estes usam o componente StatsCard) */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total de Unidades"
          value={12}
          description="Monitoradas em tempo real"
          icon={Users}
          iconColor="text-slate-400"
        />
        <StatsCard
          title="Ações em Atraso"
          value={35}
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
          iconColor="text-[#004186]"
          valueColor="text-[#004186]"
        />
      </div>

      {/* LINHA 1 DE GRÁFICOS */}
      <div className="grid gap-4 md:grid-cols-7">
        
        {/* Gráfico 1: Barras (Ranking) */}
        <Card className="md:col-span-4 transition-all duration-300 hover:border-[#004186] hover:shadow-lg group">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-[#004186] transition-colors">
              Eficiência por Unidade (Top 5)
            </CardTitle>
            <CardDescription>Percentual de planos concluídos no prazo</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="eficiencia" fill="#004186" radius={[4, 4, 0, 0]} barSize={45} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico 2: Donut (Status) */}
        <Card className="md:col-span-3 transition-all duration-300 hover:border-[#004186] hover:shadow-lg group">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-[#004186] transition-colors">
              Status dos Planos
            </CardTitle>
            <CardDescription>Panorama geral das ações</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STATUS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {STATUS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LINHA 2 DE GRÁFICOS */}
      <div className="grid gap-4 md:grid-cols-2">
        
        {/* Gráfico 3: Área (Evolução) - Agora com Azul #004186 */}
        <Card className="transition-all duration-300 hover:border-[#004186] hover:shadow-lg group">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-[#004186] transition-colors">
              Evolução de Produtividade
            </CardTitle>
            <CardDescription>Comparativo: Criados vs Concluídos (6 Meses)</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={EVOLUTION_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCriados" x1="0" y1="0" x2="0" y2="1">
                      {/* Azul da Marca no gradiente */}
                      <stop offset="5%" stopColor="#004186" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#004186" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorConcluidos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="criados" stroke="#004186" fillOpacity={1} fill="url(#colorCriados)" name="Novos Planos" />
                  <Area type="monotone" dataKey="concluidos" stroke="#22c55e" fillOpacity={1} fill="url(#colorConcluidos)" name="Concluídos" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico 4: Barras Horizontais */}
        <Card className="transition-all duration-300 hover:border-[#004186] hover:shadow-lg group">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-[#004186] transition-colors">
              Demandas por Área
            </CardTitle>
            <CardDescription>Volume de planos de ação por setor</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={CATEGORY_DATA} margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={100} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" fill="#004186" radius={[0, 4, 4, 0]} barSize={25} name="Planos" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}