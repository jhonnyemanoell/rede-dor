import type { PlanoAcao, Unidade, DashboardStats } from "@/types";
import { UNIDADES_MOCK } from "@/constants";

// Mock de dados - substituir por chamadas API reais

export const planoService = {
  async getAll(): Promise<PlanoAcao[]> {
    // Mock data
    return [];
  },

  async getByUnidade(unidadeId: string): Promise<PlanoAcao[]> {
    // Mock data
    return [];
  },

  async getById(id: string): Promise<PlanoAcao | null> {
    return null;
  },

  async create(data: Partial<PlanoAcao>): Promise<PlanoAcao> {
    // Mock creation
    return {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as PlanoAcao;
  },

  async update(id: string, data: Partial<PlanoAcao>): Promise<PlanoAcao> {
    return {
      id,
      ...data,
      updatedAt: new Date(),
    } as PlanoAcao;
  },

  async delete(id: string): Promise<void> {
    // Mock delete
  },
};

export const unidadeService = {
  async getAll(): Promise<Unidade[]> {
    return UNIDADES_MOCK.map((u) => ({
      ...u,
      endereco: "Endereço Mock",
      status: "ativa" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  },

  async getById(id: string): Promise<Unidade | null> {
    const unidade = UNIDADES_MOCK.find((u) => u.id === id);
    if (!unidade) return null;

    return {
      ...unidade,
      endereco: "Endereço Mock",
      status: "ativa" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
};

export const dashboardService = {
  async getAdminStats(): Promise<DashboardStats> {
    return {
      totalUnidades: 12,
      acoesEmAtraso: 8,
      acoesConcluidas: 145,
      eficienciaGlobal: 87,
      acoesPorStatus: {
        pendente: 15,
        em_andamento: 32,
        concluido: 145,
        atrasado: 8,
      },
    };
  },

  async getUnidadeStats(unidadeId: string): Promise<any> {
    return {
      totalAcoes: 24,
      acoesAtivas: 8,
      acoesConcluidas: 14,
      acoesAtrasadas: 2,
      eficiencia: 85,
    };
  },
};
