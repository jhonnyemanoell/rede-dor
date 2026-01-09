import { UnderConstruction } from "@/components/shared/UnderConstruction";
import { UNIDADES_MOCK } from "@/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return UNIDADES_MOCK.map((unidade) => ({
    id: unidade.id,
  }));
}

export default async function EquipePage({ params }: PageProps) {
  return (
    <UnderConstruction
      title="Equipe"
      description="Gerencie os membros da equipe, atribua responsabilidades e acompanhe o desempenho de cada colaborador."
    />
  );
}
