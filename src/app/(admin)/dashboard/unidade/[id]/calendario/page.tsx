"use client";

import { use } from "react";
import { UnderConstruction } from "@/components/shared/UnderConstruction";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CalendarioPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <UnderConstruction
      title="Calendário"
      description="O calendário mostrará os prazos dos planos de ação, eventos importantes e agendamentos da unidade."
    />
  );
}
