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

export default async function ConfiguracoesUnidadePage({ params }: PageProps) {
  return (
    <UnderConstruction
      title="Configurações"
      description="Configure as preferências da unidade, notificações, integrações e personalize a experiência de uso."
    />
  );
}
