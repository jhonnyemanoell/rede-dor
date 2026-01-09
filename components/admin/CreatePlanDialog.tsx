"use client"; // <--- Isso marca que aqui pode ter interatividade (state, click)

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { NewPlanForm } from "@/components/forms/NewPlanForm";

export function CreatePlanDialog() {
  // Agora podemos usar State tranquilamente!
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-lg shadow-blue-500/20">
          <PlusCircle size={20} />
          Novo Plano de Ação
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Criar Plano de Ação</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para designar uma nova tarefa.
          </DialogDescription>
        </DialogHeader>
        
        {/* Agora passamos a função de fechar corretamente */}
        <NewPlanForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}