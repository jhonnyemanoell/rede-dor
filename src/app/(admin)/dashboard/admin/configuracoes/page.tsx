"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";
import { Separator } from "@/components/shared/ui/separator";
import { Bell, Mail, Shield, Database, Palette } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Configurações
        </h1>
        <p className="text-muted-foreground mt-1">
          Configure as preferências do sistema
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-700" />
              <CardTitle>Notificações</CardTitle>
            </div>
            <CardDescription>
              Configure como você deseja receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif">Notificações por E-mail</Label>
                <p className="text-sm text-muted-foreground">
                  Receba atualizações importantes por e-mail
                </p>
              </div>
              <Switch id="email-notif" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notif">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Alertas em tempo real no navegador
                </p>
              </div>
              <Switch id="push-notif" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="atraso-notif">Alertas de Atraso</Label>
                <p className="text-sm text-muted-foreground">
                  Notificações quando um plano estiver atrasado
                </p>
              </div>
              <Switch id="atraso-notif" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-700" />
              <CardTitle>Segurança</CardTitle>
            </div>
            <CardDescription>
              Gerencie suas configurações de segurança
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-pass">Senha Atual</Label>
              <Input id="current-pass" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-pass">Nova Senha</Label>
              <Input id="new-pass" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-pass">Confirmar Nova Senha</Label>
              <Input id="confirm-pass" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Atualizar Senha</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-700" />
              <CardTitle>Preferências do Sistema</CardTitle>
            </div>
            <CardDescription>
              Configure o comportamento do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-save">Salvamento Automático</Label>
                <p className="text-sm text-muted-foreground">
                  Salvar automaticamente alterações em formulários
                </p>
              </div>
              <Switch id="auto-save" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="compact-view">Modo Compacto</Label>
                <p className="text-sm text-muted-foreground">
                  Exibir mais informações em menos espaço
                </p>
              </div>
              <Switch id="compact-view" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar Configurações</Button>
        </div>
      </div>
    </div>
  );
}
