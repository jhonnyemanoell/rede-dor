import { UNIDADES_MOCK } from "@/constants";
import { UnidadeDashboardClient } from "./UnidadeDashboardClient"; // <--- Import local (mesma pasta)
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return UNIDADES_MOCK.map((unidade) => ({
    id: unidade.id,
  }));
}

export default async function UnidadeDashboardPage({ params }: PageProps) {
  const { id } = await params;
  const unidade = UNIDADES_MOCK.find((u) => u.id === id);

  if (!unidade) {
    notFound();
  }

  return <UnidadeDashboardClient unidade={unidade} />;
}