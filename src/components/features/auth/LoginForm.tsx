"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Loader2, UserCog, Building2, LogIn, FileText } from "lucide-react";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { UNIDADES_MOCK } from "@/constants";
import { useAuth } from "@/hooks/useAuth";

// Schemas de validação
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
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const formAdmin = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: { email: "", password: "" },
  });

  const formUnit = useForm<z.infer<typeof unitSchema>>({
    resolver: zodResolver(unitSchema),
    defaultValues: { unidade: "", password: "" },
  });

  async function onAdminSubmit(values: z.infer<typeof adminSchema>) {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (values.email === "admin@rededor.com.br") {
        await login(values.email, values.password, "admin");
        router.push("/dashboard/admin");
      } else {
        formAdmin.setError("email", {
          message: "Gerente não cadastrado ou sem permissão.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function onUnitSubmit(values: z.infer<typeof unitSchema>) {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await login("", values.password, "unidade", values.unidade);
      router.push(`/dashboard/unidade/${values.unidade}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="unidade" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 h-14 bg-white border border-gray-200 p-1 rounded-lg">
          <TabsTrigger
            value="unidade"
            className="data-[state=active]:bg-[#004186] data-[state=active]:text-white text-gray-600 font-medium rounded-md transition-all h-full text-base hover:text-[#004186]"
          >
            <Building2 className="mr-2 h-5 w-5" />
            Unidade
          </TabsTrigger>
          <TabsTrigger
            value="admin"
            className="data-[state=active]:bg-[#004186] data-[state=active]:text-white text-gray-600 font-medium rounded-md transition-all h-full text-base hover:text-[#004186]"
          >
            <UserCog className="mr-2 h-5 w-5" />
            Gestão RH
          </TabsTrigger>
        </TabsList>

        <TabsContent value="unidade">
          <Form {...formUnit}>
            <form
              onSubmit={formUnit.handleSubmit(onUnitSubmit)}
              className="space-y-5"
            >
              <FormField
                control={formUnit.control}
                name="unidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#004186]">
                      Unidade Hospitalar
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 border-gray-300 bg-white focus:ring-2 focus:ring-[#004186] focus:border-transparent transition-all">
                          <SelectValue placeholder="Selecione a unidade..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {UNIDADES_MOCK.map((u) => (
                          <SelectItem key={u.id} value={u.id}>
                            {u.nome}
                          </SelectItem>
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
                    <FormLabel className="text-sm font-medium text-[#004186]">
                      Senha de Acesso
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        className="h-12 border-gray-300 bg-white focus-visible:ring-[#004186]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                // BOTÃO AGORA AZUL
                className="w-full h-12 text-base font-semibold bg-[#004186] hover:bg-[#00356b] text-white rounded-lg mt-6 shadow-md transition-all hover:scale-[1.01]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" /> ACESSAR UNIDADE
                  </>
                )}
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500 mb-2">Não tem acesso?</p>
                <a
                  href="#"
                  className="text-[#004186] text-sm hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <FileText className="h-4 w-4" />
                  Solicite acesso ao suporte TI
                </a>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="admin">
          <Form {...formAdmin}>
            <form
              onSubmit={formAdmin.handleSubmit(onAdminSubmit)}
              className="space-y-5"
            >
              <FormField
                control={formAdmin.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#004186]">
                      E-mail Corporativo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="gestor@rededor.com.br"
                        className="h-12 border-gray-300 bg-white focus-visible:ring-[#004186]"
                        {...field}
                      />
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
                    <FormLabel className="text-sm font-medium text-[#004186]">
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        className="h-12 border-gray-300 bg-white focus-visible:ring-[#004186]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                // BOTÃO AGORA AZUL
                className="w-full h-12 text-base font-semibold bg-[#004186] hover:bg-[#00356b] text-white rounded-lg mt-6 shadow-md transition-all hover:scale-[1.01]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" />
                    ENTRAR NO PAINEL RH
                  </>
                )}
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500 mb-2">Não tem acesso?</p>
                <a
                  href="#"
                  className="text-[#004186] text-sm hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <FileText className="h-4 w-4" />
                  Solicite acesso ao suporte TI
                </a>
              </div>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
}