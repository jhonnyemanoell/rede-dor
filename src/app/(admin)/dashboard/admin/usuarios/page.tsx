"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Badge } from "@/components/shared/ui/badge";
import { Button } from "@/components/shared/ui/button";
import { UserPlus, Mail, Building2, Shield } from "lucide-react";
import { getInitials } from "@/lib/utils";

const usuariosMock = [
  {
    id: "1",
    nome: "Dr. José Claudino",
    email: "jose.claudino@rededor.com.br",
    tipo: "admin",
    unidade: "Administração Geral",
    status: "ativo",
  },
  {
    id: "2",
    nome: "Dra. Maria Santos",
    email: "maria.santos@copaestar.com.br",
    tipo: "unidade",
    unidade: "Copa Star",
    status: "ativo",
  },
  {
    id: "3",
    nome: "Dr. Pedro Oliveira",
    email: "pedro.oliveira@quintador.com.br",
    tipo: "unidade",
    unidade: "Quinta D'Or",
    status: "ativo",
  },
];

export default function UsuariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Usuários
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie os usuários do sistema
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

      <div className="grid gap-4">
        {usuariosMock.map((usuario) => (
          <Card key={usuario.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                      {getInitials(usuario.nome)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{usuario.nome}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {usuario.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {usuario.unidade}
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={usuario.tipo === "admin" ? "default" : "secondary"}
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    {usuario.tipo === "admin" ? "Administrador" : "Unidade"}
                  </Badge>
                  <Badge variant="default" className="bg-green-500">
                    {usuario.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
