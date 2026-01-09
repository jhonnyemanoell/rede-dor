"use client";

import { use } from "react";
import { UnderConstruction } from "@/components/shared/UnderConstruction";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RelatoriosPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <UnderConstruction
      title="Relatórios"
      description="A seção de relatórios permitirá visualizar análises detalhadas, exportar dados e acompanhar indicadores de desempenho."
    />
  );
}
