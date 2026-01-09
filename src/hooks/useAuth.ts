"use client";

import { useState, useEffect } from "react";
import type { Usuario } from "@/types";

// Mock de autenticação - substituir por implementação real
export function useAuth() {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão do usuário
    const checkAuth = async () => {
      try {
        // TODO: Implementar verificação real de autenticação
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (
    email: string,
    password: string,
    tipo: "admin" | "unidade",
    unidadeId?: string
  ) => {
    // Mock de login
    const mockUser: Usuario = {
      id: "1",
      nome: tipo === "admin" ? "Administrador" : "Usuário Unidade",
      email: email || `unidade@${unidadeId}.com`,
      tipo,
      unidadeId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.tipo === "admin",
    login,
    logout,
  };
}
