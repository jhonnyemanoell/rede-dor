import { LoginForm } from "@/components/features/auth/LoginForm";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Login | Portal do Gestor Rede D'Or",
  description: "Sistema de Comunicação Padronizada e Gestão de Planos de Ação.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* --- BACKGROUND (Seus ajustes mantidos) --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] opacity-[0.5] pointer-events-none animate-in fade-in duration-1000 rotate-12">
         <Image 
            src="/brand-element-2.png" 
            alt="Decorativo" 
            fill 
            className="object-contain"
            priority={false}
         />
      </div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] opacity-[0.5] pointer-events-none -rotate-12">
         <Image 
            src="/brand-element-1.png" 
            alt="Decorativo" 
            fill 
            className="object-contain"
            priority={false}
         />
      </div>

      {/* --- HEADER (Agora só com a Logo = Mais Clean) --- */}
      <header className="w-full py-6 px-8 lg:px-12 flex items-center justify-start relative z-10">
        <div className="relative w-40 h-12 opacity-90 hover:opacity-100 transition-opacity">
           <Image 
             src="/logo-blue.png" 
             alt="Rede D'Or" 
             fill 
             className="object-contain object-left" 
             priority
           />
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex items-center relative z-10 py-8 lg:py-12">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          
          {/* COLUNA ESQUERDA - TEXTO + CARD SEPARADOS */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            
            {/* 1. O BLOCO DE TEXTO */}
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#004186] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                 <span className="w-2 h-2 rounded-full bg-[#004186] animate-pulse" />
                 Portal do Gestor v2.0
               </div>

               <div>
                 <h1 className="text-4xl lg:text-5xl font-light text-slate-400 mb-1 tracking-tight">
                   Sistema de
                 </h1>
                 <h2 className="text-4xl lg:text-5xl font-bold text-[#004186] leading-[1.1] tracking-tight">
                   Comunicação <br/>
                   <span className="text-slate-800">Padronizada Rede D&apos;Or</span>
                 </h2>
               </div>
               
               <p className="text-base text-slate-500 leading-relaxed max-w-md pt-2">
                 Centralize a gestão, monitore indicadores e padronize a excelência operacional das unidades em um só lugar.
               </p>
            </div>

            {/* 2. O CARD DO FORMULÁRIO */}
            <div className="bg-white/80 backdrop-blur-sm border border-white shadow-xl shadow-slate-200/60 p-1 rounded-2xl w-full max-w-md ring-1 ring-slate-100">
               <LoginForm />
            </div>

          </div>

          {/* COLUNA DIREITA - Imagem (Altura 700px) */}
          <div className="hidden lg:block lg:col-span-7 relative h-[700px] animate-in slide-in-from-right-10 duration-1000 delay-200">
            <div className="absolute inset-0 border border-[#004186]/10 rounded-[40px] rounded-tr-[180px] rounded-bl-[180px] translate-x-4 translate-y-4" />
            
            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-[40px] rounded-tr-[180px] rounded-bl-[180px] bg-slate-100 border border-white/20">
              <Image
                src="/login-hero.png"
                alt="Profissionais de saúde"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-[30s] ease-linear"
                priority
                sizes="(max-width: 1280px) 100vw, 60vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#004186]/50 to-transparent mix-blend-multiply" />
            </div>
          </div>

        </div>
      </main>
      
      {/* --- FOOTER (Links movidos para cá) --- */}
      <footer className="w-full py-8 text-center relative z-10 flex flex-col items-center gap-4">
        {/* Links de Apoio */}
        <nav className="flex gap-6 text-sm font-medium text-slate-500">
          <Link href="#" className="hover:text-[#004186] transition-colors hover:underline underline-offset-4">Sobre o Sistema</Link>
          <Link href="#" className="hover:text-[#004186] transition-colors hover:underline underline-offset-4">Política de Privacidade</Link>
          <Link href="#" className="hover:text-[#004186] transition-colors hover:underline underline-offset-4">Ajuda & Suporte</Link>
        </nav>
        
        {/* Copyright */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Rede D&apos;Or São Luiz. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}