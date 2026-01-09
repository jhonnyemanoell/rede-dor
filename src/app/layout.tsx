import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rede D'Or - Sistema de Gestão de Planos de Ação",
  description:
    "Sistema de acompanhamento e gestão de planos de ação para unidades hospitalares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
