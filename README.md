Rede D'Or
Sistema de Gestão de Planos de Ação

Plataforma web desenvolvida para acompanhamento, padronização e gestão estratégica de planos de ação das unidades hospitalares da Rede D'Or, com foco em eficiência operacional, governança e inteligência organizacional.

🔗 Deploy (Versão Atual):
https://jhonnyemanoell.github.io/rede-dor

🎯 Objetivo do Sistema

Centralizar a gestão de planos de ação da rede hospitalar, permitindo:

Padronização de processos operacionais

Monitoramento de indicadores

Acompanhamento de prazos e metas

Visão estratégica da operação

Suporte à tomada de decisão gerencial

🏗️ Arquitetura do Projeto

O sistema segue princípios modernos de engenharia de software, com arquitetura modular, escalável e orientada a domínio:

src/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Rotas de autenticação
│   ├── (admin)/          # Rotas administrativas
│   │   └── dashboard/    # Dashboards (Admin e Unidade)
│   └── page.tsx          # Redirecionamento inteligente
├── assets/               # Assets visuais (importação direta)
├── components/           # Componentes React reutilizáveis
├── lib/                  # Utilitários e helpers
├── types/                # Tipagens TypeScript
└── hooks/                # Custom Hooks

🎯 Padrões de Arquitetura e Design
1. Feature-Based Organization

Organização por domínio funcional (auth, plans, dashboard), favorecendo:

Escalabilidade

Manutenibilidade

Baixo acoplamento

Alta coesão

2. Asset Import Strategy

Importação direta de imagens e mídias via JavaScript:

import hero from '@/assets/login-hero.png'


Benefícios:

Otimização automática

Compatibilidade com qualquer ambiente de deploy

Versionamento correto

Performance de build

3. Separation of Concerns

UI/Apresentação: components/

Lógica de Negócio: hooks/, lib/

Tipagem: types/

Domínio: organização por feature

🚀 Funcionalidades (MVP)
🔐 Autenticação

Login corporativo (Gestão RH)

Login por unidade hospitalar

Redirecionamento inteligente (ambiente local vs produção)

📊 Dashboard Administrativo

Visão geral da rede

Indicadores operacionais

Gestão de unidades

Status em tempo real dos planos

Monitoramento de performance

🏥 Operacional (Unidades)

Criação padronizada de planos de ação

Visualização de metas

Gestão de prazos

Acompanhamento de execução

Organização por status (Pendente / Concluído)

🛠️ Stack Tecnológica

Next.js 14+ — Framework React com App Router

TypeScript — Tipagem forte e segurança de código

Tailwind CSS — Estilização performática

shadcn/ui — Componentes acessíveis e padronizados

Lucide React — Ícones vetoriais

React Hook Form + Zod — Formulários com validação robusta

📦 Execução Local
# Clone do repositório
git clone https://github.com/jhonnyemanoell/rede-dor.git

# Instalação de dependências
npm install
# ou
pnpm install

# Execução do ambiente de desenvolvimento
npm run dev


Acesse:
http://localhost:3000

🔐 Acesso de Demonstração
Administrador

Email: admin@rededor.com.br

Senha: qualquer senha (modo demonstração)

Unidade

Selecionar unidade no dropdown

Senha: qualquer senha (modo demonstração)

🔮 Roadmap Estratégico

O sistema está em evolução para se tornar uma plataforma completa de inteligência operacional hospitalar:

🔔 Notificações Ativas
Alertas automáticos (Push / WhatsApp) antes do vencimento de planos.

🤖 IA Preditiva
Sugestão automática de planos com base em histórico de sucesso.

🛡️ Módulo de Ouvidoria
Canal seguro, anônimo e estruturado para compliance.

🔐 Cibersegurança
2FA, criptografia ponta a ponta e hardening da aplicação.

🔗 Integrações
APIs para conexão com sistemas legados da rede hospitalar.

📄 Licença

Projeto desenvolvido para o Hackathon Rede D'Or São Luiz.
Todos os direitos reservados.