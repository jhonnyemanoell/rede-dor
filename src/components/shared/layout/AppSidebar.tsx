"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/button";
import {
  LayoutDashboard,
  ClipboardList,
  ChevronDown,
  LogOut,
  Users,
  Calendar,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import logoWhite from "@/assets/logo-white.png";

// ... (Mantenha as interfaces e a função getMenuItems iguais, não mudou nada) ...
interface MenuItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const getMenuItems = (unidadeId?: string) => [
  // ... (Mantenha o conteúdo do menu igualzinho estava) ...
  {
    section: "PLATAFORMA",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: unidadeId ? `/dashboard/unidade/${unidadeId}` : "/dashboard/admin",
      },
      // ... (Resto dos itens) ...
      {
        icon: ClipboardList,
        label: "Planos de Ação",
        children: [
           { label: "Novo Plano", href: unidadeId ? `/dashboard/unidade/${unidadeId}/planos/novo` : "/dashboard/admin/planos/novo" },
           { label: "Meus Planos", href: unidadeId ? `/dashboard/unidade/${unidadeId}/planos` : "/dashboard/admin/planos" },
           { label: "Relatórios", href: unidadeId ? `/dashboard/unidade/${unidadeId}/relatorios` : "/dashboard/admin/relatorios" },
        ]
      },
      { icon: Calendar, label: "Calendário", href: unidadeId ? `/dashboard/unidade/${unidadeId}/calendario` : "/dashboard/admin/calendario" },
    ],
  },
  {
    section: "SISTEMA",
    items: [
      { icon: Users, label: "Equipe", href: unidadeId ? `/dashboard/unidade/${unidadeId}/equipe` : "/dashboard/admin/equipe" },
      { icon: Settings, label: "Configurações", href: unidadeId ? `/dashboard/unidade/${unidadeId}/configuracoes` : "/dashboard/admin/configuracoes" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const params = useParams();
  const unidadeId = params?.id as string | undefined;
  const menuSections = getMenuItems(unidadeId);
  
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["Planos de Ação"]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children?: { label: string; href: string }[]) =>
    children?.some((child) => pathname === child.href);

  // --- CORREÇÃO DO LINK DE SAÍDA ---
  const handleLogout = () => {
    // Verifica se estamos em produção (GitHub Pages) ou local
    const isProduction = process.env.NODE_ENV === "production";
    // Se for produção, adiciona o nome do repositório
    const loginPath = isProduction ? "/rede-dor/login" : "/login";
    
    window.location.href = loginPath;
  };

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-[#00356b] bg-[#004186] text-white">
      
      {/* 1. Logo (Lembre de importar a logo se precisar, igual fizemos no login) */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-center py-6 border-b border-white/10">
           <div className="relative w-32 h-10">
             {/* Se a logo branca estiver em src/assets, use o import aqui também! 
                 Se estiver usando string direta e funcionar, mantenha. 
                 Mas o ideal é: src={logoWhite} */}
             <Image 
               src={logoWhite}
               alt="Rede D'Or" 
               fill
               className="object-contain"
               priority
             />
           </div>
        </div>

        {/* ... (Renderização do Menu continua igual) ... */}
        <div className="py-4">
          {menuSections.map((section) => (
            <div key={section.section} className="mb-4">
              <h3 className="px-4 mb-2 text-xs font-bold text-blue-200 uppercase tracking-wider opacity-80">
                {section.section}
              </h3>
              <nav className="space-y-1 px-2">
                {section.items.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedMenus.includes(item.label);
                  // Lógica de renderização dos itens (mantida igual para economizar espaço aqui, mas use seu código completo)
                  // ...
                  return (
                    <div key={item.label}>
                       {/* ... Seu código de renderização dos botões ... */}
                       {hasChildren ? (
                         <button onClick={() => toggleMenu(item.label)} className={cn("w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200", isActive(item.href || "") ? "bg-white text-[#004186]" : "text-blue-100 hover:bg-white/10")}>
                            <div className="flex items-center gap-3"><item.icon size={20} />{item.label}</div>
                            <ChevronDown size={16} className={cn("transition-transform", isExpanded && "rotate-180")} />
                         </button>
                       ) : (
                         <Link href={item.href || "#"}>
                            <div className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium", isActive(item.href!) ? "bg-white text-[#004186]" : "text-blue-100 hover:bg-white/10")}>
                               <item.icon size={20} />{item.label}
                            </div>
                         </Link>
                       )}
                       
                       {hasChildren && isExpanded && (
                         <div className="ml-6 mt-1 space-y-1 border-l border-white/20 pl-4">
                           {item.children?.map(child => (
                             <Link key={child.href} href={child.href}>
                               <div className={cn("py-2 px-3 text-sm rounded-lg block", isActive(child.href) ? "text-white font-semibold bg-white/10" : "text-blue-200 hover:text-white")}>
                                 {child.label}
                               </div>
                             </Link>
                           ))}
                         </div>
                       )}
                    </div>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Sair (AQUI ESTÁ A MUDANÇA) */}
      <div className="border-t border-white/10 p-3">
        <Button
          className="w-full justify-start gap-3 bg-transparent text-blue-200 hover:bg-white/5 hover:text-white transition-all duration-200 border-0 shadow-none"
          onClick={handleLogout} // <--- Usando a função corrigida
        >
          <LogOut size={20} />
          Sair
        </Button>
      </div>
    </div>
  );
}