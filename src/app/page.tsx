"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se é produção
    const isProduction = process.env.NODE_ENV === "production";
    // Define o caminho correto
    const loginPath = isProduction ? "/rede-dor/login" : "/login";
    
    router.replace(loginPath);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-pulse text-slate-500">Carregando...</div>
    </div>
  );
}