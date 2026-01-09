import { LoginForm } from "@/components/features/auth/LoginForm";
import { RedeDorLogo } from "@/components/shared/brand/RedeDorLogo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-8 flex items-center justify-between border-b">
        <RedeDorLogo className="text-[#004186]" />
        <nav className="flex gap-8 text-sm text-gray-600">
          <Link href="#" className="hover:text-[#004186]">Sobre</Link>
          <Link href="#" className="hover:text-[#004186]">Unidades</Link>
          <Link href="#" className="hover:text-[#004186]">Contato</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <div className="max-w-xl">
            <div className="mb-8">
              <h1 className="text-5xl font-light text-gray-600 mb-2">
                Sistema de
              </h1>
              <h2 className="text-5xl font-semibold text-[#004186] mb-6">
                Planos de Trabalho
              </h2>
              <p className="text-gray-600 text-lg">
                Gerencie os planos de trabalho das unidades hospitalares em um só lugar.
              </p>
            </div>

            <LoginForm />
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Profissional de saúde"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
