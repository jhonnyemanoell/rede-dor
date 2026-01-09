import { UNIDADES_MOCK } from "@/constants";

export function generateStaticParams() {
  return UNIDADES_MOCK.map((unidade) => ({
    id: unidade.id,
  }));
}
