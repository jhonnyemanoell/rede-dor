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
import { usePathname, useParams } from "next/navigation";
import { RedeDorLogo } from "@/components/shared/brand/RedeDorLogo";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

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
  const isChildActive = (children?: { label: string; href: string }[]) =>
    children?.some((child) => pathname === child.href);

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r bg-white">
      {/* Logo */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-center py-6 border-b">
          <RedeDorLogo className="text-[#004186]" />
        </div>

        {/* Menu Sections */}
        <div className="py-4">
          {menuSections.map((section) => (
            <div key={section.section} className="mb-4">
              {/* Section Title */}
              <h3 className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {section.section}
              </h3>

              {/* Menu Items */}
              <nav className="space-y-1 px-2">
                {section.items.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedMenus.includes(item.label);
                  const isItemActive = item.href
                    ? isActive(item.href)
                    : isChildActive(item.children);

                  return (
                    <div key={item.label}>
                      {/* Parent Item */}
                      {hasChildren ? (
                        <button
                          onClick={() => toggleMenu(item.label)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                            isItemActive
                              ? "bg-blue-50 text-[#004186]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon size={20} />
                            {item.label}
                          </div>
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200",
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
                                ? "bg-[#004186] text-white shadow-md shadow-blue-200"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            <item.icon size={20} />
                            {item.label}
                          </div>
                        </Link>
                      )}

                      {/* Children */}
                      {hasChildren && isExpanded && (
                        <div className="ml-6 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                          {item.children?.map((child) => (
                            <Link key={child.href} href={child.href}>
                              <div
                                className={cn(
                                  "py-2 px-3 text-sm rounded-lg transition-all duration-200",
                                  isActive(child.href)
                                    ? "text-[#004186] font-medium bg-blue-50"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
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
      <div className="border-t p-3">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-slate-500 hover:bg-red-50 hover:text-red-600"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <LogOut size={20} /> Sair
        </Button>
      </div>
    </div>
  );
}
