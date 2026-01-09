"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-8 shadow-sm">
      
      {/* Lado Esquerdo: Contexto */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Unidade Hospitalar</h2>
        <span className="text-slate-300">/</span>
        <h1 className="text-lg font-bold text-slate-800">Copa Star</h1> {/* Isso será dinâmico depois */}
      </div>

      {/* Lado Direito: Perfil e Notificações */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </Button>

        <div className="flex items-center gap-3 border-l pl-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium leading-none text-slate-700">Dr. José Claudino</p>
            <p className="text-xs text-muted-foreground">Gestor Operacional</p>
          </div>
          <Avatar className="h-9 w-9 border-2 border-white shadow-sm cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}