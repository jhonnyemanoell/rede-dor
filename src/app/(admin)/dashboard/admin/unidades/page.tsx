"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Building2, MapPin, Phone, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import { UNIDADES_MOCK } from "@/constants";
import { Badge } from "@/components/shared/ui/badge";

export default function UnidadesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Unidades Hospitalares
        </h1>
        <Badge variant="secondary" className="text-sm">
          {UNIDADES_MOCK.length} unidades ativas
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {UNIDADES_MOCK.map((unidade) => (
          <Link key={unidade.id} href={`/dashboard/unidade/${unidade.id}`}>
            <Card className="hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Building2 className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{unidade.nome}</CardTitle>
                      <CardDescription>{unidade.codigo}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-green-500">
                    Ativa
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {unidade.cidade}, {unidade.estado}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-medium">Ver dashboard</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
