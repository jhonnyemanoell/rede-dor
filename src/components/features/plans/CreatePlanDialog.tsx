"use client";

import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { Plus, Calendar as CalendarIcon, Save } from "lucide-react";
import { useState } from "react";
import { DIMENSAO_PLANO } from "@/constants";

interface CreatePlanDialogProps {
  unidadeId?: string;
}

export function CreatePlanDialog({ unidadeId }: CreatePlanDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#004186] hover:bg-[#00356b] gap-2">
          <Plus size={18} />
          Novo Plano de Ação
        </Button>
      </DialogTrigger>
      
      {/* AQUI ESTÁ A MUDANÇA: sm:max-w-[700px] para deixar mais largo */}
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#004186]">Criar Plano de Ação</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para designar uma nova tarefa.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          
          {/* Título */}
          <div className="grid gap-2">
            <Label htmlFor="titulo" className="text-[#004186] font-semibold">O que precisa ser feito?</Label>
            <Input
              id="titulo"
              placeholder="Ex: Manutenção do Ar Condicionado UTI 3"
              className="col-span-3 focus-visible:ring-[#004186]"
            />
          </div>

          {/* Descrição Detalhada */}
          <div className="grid gap-2">
            <Label htmlFor="descricao" className="text-slate-700">Detalhamento (O Como e Porquê)</Label>
            <Textarea
              id="descricao"
              placeholder="Descreva os passos da ação..."
              className="min-h-[100px] resize-none focus-visible:ring-[#004186]"
            />
          </div>

          {/* Linha Dupla: Responsável e Prioridade */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="responsavel">Responsável</Label>
              <Input id="responsavel" placeholder="Nome do colaborador" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="prioridade">Prioridade</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="baixa">Baixa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Linha Dupla: Dimensão e Categoria */}
          <div className="grid grid-cols-2 gap-4">
             <div className="grid gap-2">
              <Label htmlFor="dimensao">Dimensão</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a dimensão" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(DIMENSAO_PLANO).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                   <SelectItem value="infra">Infraestrutura</SelectItem>
                   <SelectItem value="rh">RH</SelectItem>
                   <SelectItem value="assistencial">Assistencial</SelectItem>
                   <SelectItem value="processos">Processos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Prazo */}
          <div className="grid gap-2">
            <Label htmlFor="prazo">Prazo Limite</Label>
            <div className="relative">
               <Input type="date" className="block w-full" />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button type="submit" className="bg-[#004186] hover:bg-[#00356b] gap-2">
             <Save size={18} />
             Registrar Plano
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}