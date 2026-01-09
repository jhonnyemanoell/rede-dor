"use client";

import { use } from "react";
import { UnderConstruction } from "@/components/shared/UnderConstruction";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EquipePage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <UnderConstruction
      title="Equipe"
      description="Gerencie os membros da equipe, atribua responsabilidades e acompanhe o desempenho de cada colaborador."
    />
  );
}
