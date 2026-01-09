"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, CalendarDays, UserCircle, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" }, // Ajuste o href conforme necessário
  { icon: CalendarDays, label: "Calendário", href: "/dashboard/calendario" },
  { icon: UserCircle, label: "Perfil", href: "/dashboard/perfil" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r bg-white p-4 shadow-sm">
      <div className="space-y-6">
        {/* Logo Minimalista */}
        <div className="flex items-center gap-2 px-2 font-bold text-xl text-primary">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
            RD
          </div>
          <span className="text-slate-700">ActionTrack</span>
        </div>

        {/* Menu Principal */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 font-medium text-slate-500 hover:bg-blue-50 hover:text-primary",
                  pathname.startsWith(item.href) && "bg-blue-50 text-primary border-r-4 border-primary rounded-r-none"
                )}
              >
                <item.icon size={20} />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer (Config + Sair) */}
      <div className="space-y-1 border-t pt-4">
        <Button variant="ghost" className="w-full justify-start gap-3 text-slate-500">
           <Settings size={20} /> Configurações
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={20} /> Sair
        </Button>
      </div>
    </div>
  );
}