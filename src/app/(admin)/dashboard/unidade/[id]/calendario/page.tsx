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

export default async function CalendarioPage({ params }: PageProps) {
  return (
    <UnderConstruction
      title="Calendário"
      description="O calendário mostrará os prazos dos planos de ação, eventos importantes e agendamentos da unidade."
    />
  );
}
