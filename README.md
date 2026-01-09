# Rede D'Or - Sistema de Gestão de Planos de Ação

Sistema web para acompanhamento e gestão de planos de ação das unidades hospitalares da Rede D'Or.

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura limpa e organizada, com separação clara de responsabilidades:

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Grupo de rotas de autenticação
│   │   └── login/               
│   ├── (admin)/                  # Grupo de rotas administrativas
│   │   ├── layout.tsx           # Layout com sidebar e header
│   │   └── dashboard/
│   │       ├── admin/           # Dashboard administrativo
│   │       │   ├── page.tsx     # Visão geral da rede
│   │       │   ├── unidades/    # Gestão de unidades
│   │       │   ├── relatorios/  # Relatórios e métricas
│   │       │   ├── usuarios/    # Gestão de usuários
│   │       │   └── configuracoes/ # Configurações do sistema
│   │       └── unidade/
│   │           └── [id]/        # Dashboard específico da unidade
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── features/                # Componentes específicos por funcionalidade
│   │   ├── auth/
│   │   │   └── LoginForm.tsx    # Formulário de login
│   │   ├── plans/
│   │   │   ├── NewPlanForm.tsx  # Formulário de novo plano
│   │   │   └── CreatePlanDialog.tsx # Dialog para criar plano
│   │   └── dashboard/
│   │       ├── StatsCard.tsx    # Card de estatísticas
│   │       └── PlanCard.tsx     # Card de plano de ação
│   │
│   └── shared/                  # Componentes compartilhados
│       ├── ui/                  # Componentes UI (shadcn/ui)
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── dialog.tsx
│       │   ├── form.tsx
│       │   └── ...
│       └── layout/              # Componentes de layout
│           ├── AppSidebar.tsx   # Sidebar de navegação
│           └── Header.tsx       # Header da aplicação
│
├── lib/
│   └── utils.ts                 # Funções utilitárias
│
├── types/
│   └── index.ts                 # Definições de tipos TypeScript
│
├── constants/
│   └── index.ts                 # Constantes da aplicação
│
├── services/
│   └── api.ts                   # Serviços de API
│
└── hooks/
    └── useAuth.ts               # Hook de autenticação
```

## 🎯 Design Patterns Aplicados

### 1. **Feature-Based Organization**
Componentes organizados por funcionalidade (auth, plans, dashboard) para melhor manutenibilidade.

### 2. **Separation of Concerns**
- **Apresentação**: Componentes UI em `components/`
- **Lógica de Negócio**: Hooks e services
- **Tipos**: Definições centralizadas em `types/`
- **Constantes**: Valores fixos em `constants/`

### 3. **Component Composition**
Componentes pequenos e reutilizáveis que se compõem para formar features complexas.

### 4. **Container/Presentational Pattern**
- Pages (containers): Lógica e estado
- Components (presentational): Renderização pura

## 🚀 Funcionalidades

### Autenticação
- Login para Administradores (Gestão RH)
- Login para Unidades Hospitalares

### Dashboard Administrativo
- ✅ Visão geral da rede
- ✅ Gestão de unidades
- ✅ Relatórios e métricas
- ✅ Gestão de usuários
- ✅ Configurações do sistema

### Dashboard da Unidade
- ✅ Visão geral da unidade
- ✅ Criação de planos de ação
- ✅ Acompanhamento de progresso
- Listagem e filtros de planos
- Edição de planos existentes

## 🛠️ Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Autenticação (Mock)

### Administrador
- Email: `admin@rededor.com.br`
- Senha: qualquer

### Unidade
- Selecione uma unidade
- Senha: qualquer

## 📝 Próximos Passos

- [ ] Integração com API real
- [ ] Implementar autenticação JWT
- [ ] Adicionar gráficos (Recharts)
- [ ] Implementar CRUD completo de planos
- [ ] Adicionar filtros e busca
- [ ] Sistema de notificações
- [ ] Exportação de relatórios
- [ ] Testes unitários e E2E

## Learn More

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 📄 Licença

Propriedade da Rede D'Or São Luiz S.A.

