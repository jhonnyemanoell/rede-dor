"use client";

import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/shared/ui/button";
import { useRouter } from "next/navigation";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export function UnderConstruction({
  title,
  description,
}: UnderConstructionProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-6">
        <Construction size={48} className="text-orange-500" />
      </div>

      <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>

      <p className="text-muted-foreground max-w-md mb-6">
        {description ||
          "Esta página está em desenvolvimento e estará disponível em breve."}
      </p>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="gap-2"
        >
          <ArrowLeft size={16} />
          Voltar
        </Button>
      </div>

      <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-sm">
        <p className="text-sm text-slate-500">
          🚧 Em breve você poderá acessar todas as funcionalidades desta seção.
        </p>
      </div>
    </div>
  );
}
