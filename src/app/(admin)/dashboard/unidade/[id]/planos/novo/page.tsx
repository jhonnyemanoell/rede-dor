"use client";

import { use } from "react";
import { UnderConstruction } from "@/components/shared/UnderConstruction";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function NovoPlanoPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <UnderConstruction
      title="Novo Plano de Ação"
      description="A tela de criação completa de planos está em desenvolvimento. Por enquanto, utilize o botão 'Novo Plano de Ação' no Dashboard."
    />
  );
}
