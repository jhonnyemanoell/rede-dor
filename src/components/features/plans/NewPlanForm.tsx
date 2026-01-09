"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Loader2, Save } from "lucide-react";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Textarea } from "@/components/shared/ui/textarea";
import { Calendar } from "@/components/shared/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CATEGORIAS_PLANO, DIMENSAO_PLANO } from "@/constants";

const planSchema = z.object({
  titulo: z.string().min(5, "O título precisa ser descritivo (min 5 letras)."),
  descricao: z.string().min(10, "Detalhe melhor a ação necessária."),
  responsavel: z.string().min(2, "Quem é o responsável?"),
  prioridade: z.enum(["baixa", "media", "alta", "critica"], {
    message: "Selecione a prioridade.",
  }),
  dimensao: z.enum(
    [
      "enps",
      "estrutura_trabalho",
      "colaboracao",
      "lideranca",
      "carreira_desenvolvimento",
      "pertencimento",
      "saude_bem_estar",
    ],
    {
      message: "Selecione a dimensão.",
    }
  ),
  categoria: z.string().min(1, "Selecione uma categoria."),
  prazo: z.date({
    message: "Defina uma data limite.",
  }),
});

interface NewPlanFormProps {
  onSuccess: () => void;
  unidadeId?: string;
}

export function NewPlanForm({ onSuccess, unidadeId }: NewPlanFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof planSchema>>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
      responsavel: "",
    },
  });

  async function onSubmit(values: z.infer<typeof planSchema>) {
    setIsLoading(true);
    try {
      console.log("Novo Plano Criado:", { ...values, unidadeId });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
      onSuccess();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="titulo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O que precisa ser feito?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Manutenção do Ar Condicionado UTI 3"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhamento (O Como e Porquê)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva os passos da ação..."
                  className="resize-none min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="responsavel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Responsável</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do colaborador" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="prioridade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prioridade</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="baixa">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Baixa
                      </span>
                    </SelectItem>
                    <SelectItem value="media">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        Média
                      </span>
                    </SelectItem>
                    <SelectItem value="alta">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        Alta
                      </span>
                    </SelectItem>
                    <SelectItem value="critica">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Crítica
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="dimensao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dimensão</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a dimensão" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(DIMENSAO_PLANO).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded text-xs font-medium",
                          value.color
                        )}
                      >
                        {value.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CATEGORIAS_PLANO.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="prazo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Prazo Limite</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: ptBR })
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full font-bold" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> Registrar Plano
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
