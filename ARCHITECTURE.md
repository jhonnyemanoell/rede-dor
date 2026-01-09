# Documentação de Arquitetura

## 📐 Princípios de Design

### Clean Architecture
O projeto segue os princípios da Clean Architecture, separando responsabilidades em camadas:

1. **Presentation Layer** (`src/app` e `src/components`)
   - Componentes React
   - Pages do Next.js
   - Layout components

2. **Domain Layer** (`src/types`)
   - Entidades de negócio
   - Interfaces TypeScript
   - Regras de domínio

3. **Data Layer** (`src/services`)
   - API clients
   - Data fetching
   - Cache management

4. **Shared Layer** (`src/lib`, `src/constants`, `src/hooks`)
   - Utilitários
   - Constantes
   - Custom hooks

## 🗂️ Organização de Componentes

### Feature-Based Structure

```
components/
├── features/          # Componentes específicos de features
│   ├── auth/         # Autenticação
│   ├── plans/        # Planos de ação
│   └── dashboard/    # Dashboard
└── shared/           # Componentes compartilhados
    ├── ui/          # UI primitives
    └── layout/      # Layout components
```

**Por quê?**
- Fácil localização de código
- Melhor escalabilidade
- Redução de acoplamento
- Facilita testes

### Shared vs Features

**Shared Components:**
- Reutilizáveis em múltiplas features
- Sem lógica de negócio específica
- Exemplos: Button, Card, Dialog

**Feature Components:**
- Específicos de uma funcionalidade
- Contém lógica de negócio
- Exemplos: LoginForm, NewPlanForm

## 🔄 Fluxo de Dados

```
User Interaction
      ↓
   Component
      ↓
   Hook (useAuth, etc)
      ↓
   Service (API)
      ↓
   Backend/Mock
```

## 🎨 Convenções de Nomenclatura

### Arquivos
- **Componentes**: PascalCase (`LoginForm.tsx`)
- **Utilitários**: camelCase (`utils.ts`)
- **Constantes**: camelCase (`constants/index.ts`)
- **Types**: camelCase (`types/index.ts`)

### Variáveis e Funções
- **Componentes**: PascalCase (`export function LoginForm()`)
- **Hooks**: camelCase com prefixo `use` (`useAuth`)
- **Funções**: camelCase (`formatDate`)
- **Constantes**: UPPER_SNAKE_CASE (`UNIDADES_MOCK`)

### Types e Interfaces
- **Interfaces**: PascalCase (`interface Usuario`)
- **Types**: PascalCase (`type UserRole`)
- **Props**: PascalCase com sufixo `Props` (`interface LoginFormProps`)

## 📋 Padrões de Código

### Componentes

```typescript
// ✅ Bom
"use client"; // quando necessário

import { useState } from "react";
import { Button } from "@/components/shared/ui/button";

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  const [state, setState] = useState(false);
  
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={onAction}>Click</Button>
    </div>
  );
}
```

### Hooks

```typescript
// ✅ Bom
export function useMyHook() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // lógica
  }, []);
  
  return {
    data,
    // métodos
  };
}
```

### Services

```typescript
// ✅ Bom
export const myService = {
  async getAll(): Promise<Type[]> {
    // implementação
  },
  
  async getById(id: string): Promise<Type | null> {
    // implementação
  },
};
```

## 🚦 Rotas e Navegação

### Estrutura de Rotas

```
/                           # Home page
/login                      # Login
/dashboard/admin            # Dashboard administrativo
/dashboard/admin/unidades   # Gestão de unidades
/dashboard/admin/relatorios # Relatórios
/dashboard/admin/usuarios   # Usuários
/dashboard/admin/configuracoes # Configurações
/dashboard/unidade/[id]     # Dashboard da unidade
```

### Route Groups
Usamos route groups do Next.js para organizar rotas:

- `(auth)` - Rotas de autenticação sem layout
- `(admin)` - Rotas administrativas com sidebar

## 🎯 Boas Práticas

### 1. Componentes Pequenos
Mantenha componentes focados em uma responsabilidade.

### 2. Tipos Sempre
Sempre defina tipos TypeScript para props, estado e retornos.

### 3. Separação de Lógica
Use hooks personalizados para lógica complexa.

### 4. Constantes Centralizadas
Mantenha valores fixos em `src/constants`.

### 5. Imports Absolutos
Use `@/` para imports em vez de caminhos relativos.

```typescript
// ✅ Bom
import { Button } from "@/components/shared/ui/button";

// ❌ Evite
import { Button } from "../../components/shared/ui/button";
```

## 📦 Dependências Principais

- **Next.js**: Framework React
- **React Hook Form**: Formulários
- **Zod**: Validação
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes UI
- **Lucide React**: Ícones
- **date-fns**: Manipulação de datas

## 🔒 Segurança

### Autenticação (Atual - Mock)
- Validação no frontend
- Storage em localStorage

### Autenticação (Futura)
- JWT tokens
- Refresh tokens
- HTTP-only cookies
- CSRF protection

## 🧪 Testes (Futuro)

```
tests/
├── unit/              # Testes unitários
├── integration/       # Testes de integração
└── e2e/              # Testes end-to-end
```

## 📈 Performance

### Otimizações Implementadas
- Server Components por padrão
- Client Components apenas quando necessário
- Code splitting automático do Next.js
- Image optimization

### Próximas Otimizações
- React Query para cache
- Lazy loading de componentes
- Memoization estratégica
- Bundle analysis
