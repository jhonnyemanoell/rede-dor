"use client";

import { useState } from "react";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { PlusCircle } from "lucide-react";
import { NewPlanForm } from "@/components/features/plans/NewPlanForm";

interface CreatePlanDialogProps {
  unidadeId?: string;
}

export function CreatePlanDialog({ unidadeId }: CreatePlanDialogProps) {
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

        <NewPlanForm onSuccess={() => setOpen(false)} unidadeId={unidadeId} />
      </DialogContent>
    </Dialog>
  );
}
