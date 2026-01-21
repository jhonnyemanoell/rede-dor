import { LoginForm } from "@/components/features/auth/LoginForm";
import Link from "next/link";
import Image from "next/image";

// Imports das imagens
import logoBlue from "@/assets/logo-blue.png";
import loginHero from "@/assets/login-hero.png";
import brandElement1 from "@/assets/brand-element-1.png";
import brandElement2 from "@/assets/brand-element-2.png";

export const metadata = {
  title: "Login | Portal do Gestor Rede D'Or",
  description: "Sistema de Comunicação Padronizada e Gestão de Planos de Ação.",
};

export default function LoginPage() {
  return (
    <div className="min-h-dvh bg-[#F8FAFC] flex flex-col relative font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] opacity-[0.5] pointer-events-none animate-in fade-in duration-1000 rotate-12 z-0">
        <Image
          src={brandElement2}
          alt="Decorativo"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] opacity-[0.5] pointer-events-none -rotate-12 z-0">
        <Image
          src={brandElement1}
          alt="Decorativo"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* HEADER */}
      <header className="w-full py-4 lg:py-6 px-6 lg:px-12 flex items-center justify-center lg:justify-start relative z-10 shrink-0">
        <div className="relative w-28 lg:w-36 h-8 lg:h-10 opacity-90 hover:opacity-100 transition-opacity">
          <Image
            src={logoBlue}
            alt="Rede D'Or"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-h-0 flex items-center relative z-10 py-2 lg:py-4">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* COLUNA ESQUERDA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#004186] text-[10px] font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#004186] animate-pulse" />
                Portal do Gestor v2.0
              </div>

              <div>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-light text-slate-400 mb-1 tracking-tight">
                  Sistema de
                </h1>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#004186] leading-[1.1] tracking-tight">
                  Comunicação <br className="hidden lg:block" />
                  <span className="text-slate-800">
                    Padronizada Rede D&apos;Or
                  </span>
                </h2>
              </div>

              <p className="text-xs lg:text-sm text-slate-500 leading-relaxed max-w-sm pt-1 mx-auto lg:mx-0">
                Centralize a gestão, monitore indicadores e padronize a excelência
                operacional das unidades em um só lugar.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-white shadow-xl shadow-slate-200/60 p-1 rounded-2xl w-full max-w-sm mx-auto lg:mx-0 ring-1 ring-slate-100">
              <LoginForm />
            </div>
          </div>

          {/* COLUNA DIREITA (Imagem) */}
          <div
            className="
              hidden lg:block lg:col-span-7 relative
              h-[520px]
              max-h-[calc(100dvh-160px)]
              animate-in slide-in-from-right-10 duration-1000 delay-200
            "
          >
            <div className="absolute inset-0 border border-[#004186]/10 rounded-[30px] rounded-tr-[140px] rounded-bl-[140px] translate-x-3 translate-y-3" />

            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-[30px] rounded-tr-[140px] rounded-bl-[140px] bg-slate-100 border border-white/20">
              <Image
                src={loginHero}
                alt="Profissionais de saúde"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1280px) 100vw, 60vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#004186]/50 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-4 text-center relative z-10 flex flex-col items-center gap-2 shrink-0">
        <nav className="flex flex-wrap justify-center gap-4 text-[10px] lg:text-xs font-medium text-slate-500">
          <Link
            href="#"
            className="hover:text-[#004186] transition-colors hover:underline underline-offset-4"
          >
            Sobre o Sistema
          </Link>
          <Link
            href="#"
            className="hover:text-[#004186] transition-colors hover:underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
          <Link
            href="#"
            className="hover:text-[#004186] transition-colors hover:underline underline-offset-4"
          >
            Ajuda &amp; Suporte
          </Link>
        </nav>

        <p className="text-[10px] text-slate-400">
          © {new Date().getFullYear()} Rede D&apos;Or São Luiz. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
