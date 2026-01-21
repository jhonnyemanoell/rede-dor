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
import Image from "next/image"; // <--- Importante para a logo nova
import { usePathname, useParams } from "next/navigation";

// Interface dos itens
interface MenuItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

// Configuração do Menu
const getMenuItems = (
  unidadeId?: string
): { section: string; items: MenuItem[] }[] => [
  {
    section: "PLATAFORMA",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: unidadeId
          ? `/dashboard/unidade/${unidadeId}`
          : "/dashboard/admin",
      },
      {
        icon: ClipboardList,
        label: "Planos de Ação",
        children: [
          {
            label: "Novo Plano",
            href: unidadeId
              ? `/dashboard/unidade/${unidadeId}/planos/novo`
              : "/dashboard/admin/planos/novo",
          },
          {
            label: "Meus Planos",
            href: unidadeId
              ? `/dashboard/unidade/${unidadeId}/planos`
              : "/dashboard/admin/planos",
          },
          {
            label: "Relatórios",
            href: unidadeId
              ? `/dashboard/unidade/${unidadeId}/relatorios`
              : "/dashboard/admin/relatorios",
          },
        ],
      },
      {
        icon: Calendar,
        label: "Calendário",
        href: unidadeId
          ? `/dashboard/unidade/${unidadeId}/calendario`
          : "/dashboard/admin/calendario",
      },
    ],
  },
  {
    section: "SISTEMA",
    items: [
      {
        icon: Users,
        label: "Equipe",
        href: unidadeId
          ? `/dashboard/unidade/${unidadeId}/equipe`
          : "/dashboard/admin/equipe",
      },
      {
        icon: Settings,
        label: "Configurações",
        href: unidadeId
          ? `/dashboard/unidade/${unidadeId}/configuracoes`
          : "/dashboard/admin/configuracoes",
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const params = useParams();
  const unidadeId = params?.id as string | undefined;
  const menuSections = getMenuItems(unidadeId);
  
  // Estado para menus expansíveis (ex: Planos de Ação)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([
    "Planos de Ação",
  ]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname === href;
  
  // Verifica se algum filho está ativo para manter o pai azul/branco
  const isChildActive = (children?: { label: string; href: string }[]) =>
    children?.some((child) => pathname === child.href);

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-[#00356b] bg-[#004186] text-white">
      
      {/* 1. Logo Branca */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-center py-6 border-b border-white/10">
           <div className="relative w-32 h-10">
             {/* Certifique-se que o arquivo logo-white.png está na pasta public */}
             <Image 
               src="/logo-white.png" 
               alt="Rede D'Or" 
               fill
               className="object-contain"
               priority
             />
           </div>
        </div>

        {/* Menu Sections */}
        <div className="py-4">
          {menuSections.map((section) => (
            <div key={section.section} className="mb-4">
              {/* Título da Seção (ex: PLATAFORMA) */}
              <h3 className="px-4 mb-2 text-xs font-bold text-blue-200 uppercase tracking-wider opacity-80">
                {section.section}
              </h3>

              {/* Itens do Menu */}
              <nav className="space-y-1 px-2">
                {section.items.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedMenus.includes(item.label);
                  const isItemActive = item.href
                    ? isActive(item.href)
                    : isChildActive(item.children);

                  return (
                    <div key={item.label}>
                      {/* Item Pai (Botão ou Link) */}
                      {hasChildren ? (
                        <button
                          onClick={() => toggleMenu(item.label)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                            isItemActive
                              ? "bg-white text-[#004186] shadow-sm" // Ativo: Branco
                              : "text-blue-100 hover:bg-white/10 hover:text-white" // Inativo: Azul Claro
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon size={20} />
                            {item.label}
                          </div>
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200 opacity-70",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                      ) : (
                        <Link href={item.href || "#"}>
                          <div
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                              isItemActive
                                ? "bg-white text-[#004186] shadow-sm"
                                : "text-blue-100 hover:bg-white/10 hover:text-white"
                            )}
                          >
                            <item.icon size={20} />
                            {item.label}
                          </div>
                        </Link>
                      )}

                      {/* Sub-itens (Children) */}
                      {hasChildren && isExpanded && (
                        <div className="ml-6 mt-1 space-y-1 border-l border-white/20 pl-4">
                          {item.children?.map((child) => (
                            <Link key={child.href} href={child.href}>
                              <div
                                className={cn(
                                  "py-2 px-3 text-sm rounded-lg transition-all duration-200 block",
                                  isActive(child.href)
                                    ? "text-white font-semibold bg-white/10" // Sub-item Ativo
                                    : "text-blue-200 hover:text-white hover:bg-white/5" // Sub-item Inativo
                                )}
                              >
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

      {/* Footer - Sair */}
      <div className="border-t border-white/10 p-3">
        <Button
          className="w-full justify-start gap-3 bg-transparent text-blue-200 hover:bg-white/5 hover:text-white transition-all duration-200 border-0 shadow-none"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <LogOut size={20} />
          Sair
        </Button>
      </div>
    </div>
  );
}