import { Sidebar } from "@/components/layout/AppSidebar"; 
import { Header } from "@/components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50"> {/* Fundo cinza claro para toda a aplicação */}
      
      {/* Sidebar Fixa na Esquerda */}
      <Sidebar />
      
      {/* Área de Conteúdo à Direita */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header no Topo */}
        <Header />
        
        {/* Onde as páginas (Cards) são renderizadas */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}