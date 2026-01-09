"use client";

import { use } from "react";
import { UnderConstruction } from "@/components/shared/UnderConstruction";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ConfiguracoesUnidadePage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <UnderConstruction
      title="Configurações"
      description="Configure as preferências da unidade, notificações, integrações e personalize a experiência de uso."
    />
  );
}
