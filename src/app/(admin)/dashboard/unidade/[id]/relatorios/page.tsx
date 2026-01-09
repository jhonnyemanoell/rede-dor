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

export default async function RelatoriosPage({ params }: PageProps) {
  return (
    <UnderConstruction
      title="Relatórios"
      description="A seção de relatórios permitirá visualizar análises detalhadas, exportar dados e acompanhar indicadores de desempenho."
    />
  );
}
