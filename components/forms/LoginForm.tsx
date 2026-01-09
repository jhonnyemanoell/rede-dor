"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Loader2, UserCog, Building2, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

// --- DADOS MOCKADOS (Para teste) ---
const UNIDADES_MOCK = [
  { id: "copa-star", nome: "Copa Star" },
  { id: "quinta-dor", nome: "Quinta D'Or" },
  { id: "barra-dor", nome: "Barra D'Or" },
  { id: "norte-dor", nome: "Norte D'Or" },
];

// --- SCHEMAS DE VALIDAÇÃO ---
const adminSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Digite sua senha"),
});

const unitSchema = z.object({
  unidade: z.string().min(1, "Selecione sua unidade"),
  password: z.string().min(1, "Digite a senha de acesso da unidade"),
});

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Form do Admin
  const formAdmin = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: { email: "", password: "" },
  });

  // Form da Unidade
  const formUnit = useForm<z.infer<typeof unitSchema>>({
    resolver: zodResolver(unitSchema),
    defaultValues: { unidade: "", password: "" },
  });

  // --- LOGIC: LOGIN ADMIN ---
  async function onAdminSubmit(values: z.infer<typeof adminSchema>) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula API

    // Validação Fake
    if (values.email === "admin@rededor.com.br") {
      console.log("Login Admin Sucesso");
      router.push("/dashboard/admin"); // Vai para o dashboard geral
    } else {
      formAdmin.setError("email", { message: "Gerente não cadastrado ou sem permissão." });
    }
    setIsLoading(false);
  }

  // --- LOGIC: LOGIN UNIDADE ---
  async function onUnitSubmit(values: z.infer<typeof unitSchema>) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula API

    console.log(`Login na Unidade: ${values.unidade}`);
    // Redireciona para a página ESPECÍFICA da unidade ou dashboard genérico de unidade
    // Ex: /dashboard/unidade?id=copa-star
    router.push(`/dashboard/unidade/${values.unidade}`); 
    
    setIsLoading(false);
  }

  return (
    <div className="p-6">
      <Tabs defaultValue="unidade" className="w-full">        <TabsList className="grid w-full grid-cols-2 mb-6 h-12 bg-slate-100 p-1 rounded-lg">
          <TabsTrigger value="unidade" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 font-medium rounded-md transition-all">
            <Building2 className="mr-2 h-4 w-4" />
            Unidade
          </TabsTrigger>
          <TabsTrigger value="admin" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 font-medium rounded-md transition-all">
            <UserCog className="mr-2 h-4 w-4" />
            Gestão RH
          </TabsTrigger>
        </TabsList>

        {/* --- FORMULÁRIO UNIDADE --- */}
        <TabsContent value="unidade">
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-slate-800">Acesso da Unidade</h3>
            <p className="text-sm text-slate-500">Selecione seu hospital para gerenciar planos.</p>
          </div>
          
          <Form {...formUnit}>
            <form onSubmit={formUnit.handleSubmit(onUnitSubmit)} className="space-y-4">
              
              <FormField
                control={formUnit.control}
                name="unidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unidade Hospitalar</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Selecione a unidade..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {UNIDADES_MOCK.map((u) => (
                          <SelectItem key={u.id} value={u.id}>{u.nome}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formUnit.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha de Acesso</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-11 text-base font-semibold mt-2" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <><LogIn className="mr-2 h-4 w-4" /> Acessar Unidade</>}
              </Button>
            </form>
          </Form>
        </TabsContent>

        {/* --- FORMULÁRIO ADMIN/RH --- */}
        <TabsContent value="admin">
           <div className="mb-4">
            <h3 className="font-semibold text-lg text-slate-800">Acesso Administrativo</h3>
            <p className="text-sm text-slate-500">Área exclusiva para Gerentes e Diretoria.</p>
          </div>

          <Form {...formAdmin}>
            <form onSubmit={formAdmin.handleSubmit(onAdminSubmit)} className="space-y-4">
              <FormField
                control={formAdmin.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail Corporativo</FormLabel>
                    <FormControl>
                      <Input placeholder="gestor@rededor.com.br" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formAdmin.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-11 text-base font-semibold mt-2" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Entrar no Painel RH"}
              </Button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-xs text-slate-400 uppercase">Suporte TI</span>
        <Separator className="flex-1" />
      </div>
    </div>
  );
}