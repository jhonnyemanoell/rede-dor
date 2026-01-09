import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50">
      
      {/* TITULO */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-700">
          Rede D`Or
        </h1>
        <p className="text-slate-600">
          Sistema de Gestão de Planos de Ação
        </p>
      </div>

      {/* Nossos Botões Estilizados */}
      <div className="flex gap-4">
        <Button variant="default" className="bg-blue-700 hover:bg-blue-800">
          Acessar Sistema
        </Button>

        <Button variant="outline">
          Documentação
        </Button>
      </div>

    </main>  
  );
}