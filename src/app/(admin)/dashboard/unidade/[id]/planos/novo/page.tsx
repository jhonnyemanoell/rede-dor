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

export default async function NovoPlanoPage({ params }: PageProps) {
  return (
    <UnderConstruction
      title="Novo Plano de Ação"
      description="A tela de criação completa de planos está em desenvolvimento. Por enquanto, utilize o botão 'Novo Plano de Ação' no Dashboard."
    />
  );
}
