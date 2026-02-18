# 🏥 Rede D'Or | Sistema de Gestão de Planos de Ação

> *Plataforma web desenvolvida para acompanhamento, padronização e gestão estratégica de planos de ação das unidades hospitalares da Rede D'Or, com foco em eficiência operacional, governança e inteligência organizacional.*

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-MVP_Concluído-success?style=for-the-badge)

---

## 🎯 Objetivo do Sistema

Centralizar a gestão de planos de ação da rede hospitalar, promovendo melhorias contínuas através de:
* **Padronização:** Unificação dos processos operacionais em todas as unidades.
* **Monitoramento:** Acompanhamento de indicadores e KPIs em tempo real.
* **Controle:** Gestão rigorosa de prazos, metas e status de execução.
* **Estratégia:** Visão macro da operação para suporte à tomada de decisão gerencial.

---

## 🚀 Funcionalidades (MVP)

### 🔐 Autenticação Inteligente
* Login corporativo (Gestão RH) e por unidade hospitalar.
* Redirecionamento inteligente de rotas (ambiente local vs. produção).

### 📊 Dashboard Administrativo
* Visão geral da rede hospitalar com indicadores operacionais.
* Gestão de unidades e monitoramento de performance.
* Status em tempo real de todos os planos de ação.

### 🏥 Operacional (Unidades)
* Criação padronizada de novos planos de ação.
* Visualização de metas, gestão de prazos e acompanhamento de execução (Pendente / Concluído).

---

## 🛠️ Stack Tecnológica

O sistema foi construído sobre uma arquitetura moderna, garantindo alta performance, segurança e excelente Developer Experience (DX):

* **[Next.js 14+](https://nextjs.org/)** — Framework React utilizando o novo paradigma do *App Router*.
* **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática forte para segurança em tempo de compilação.
* **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária e performática.
* **[shadcn/ui](https://ui.shadcn.com/)** — Componentes de interface acessíveis, customizáveis e padronizados.
* **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** — Gerenciamento de estado de formulários com validação robusta de esquemas.
* **[Lucide React](https://lucide.dev/)** — Biblioteca de ícones vetoriais leves e consistentes.

---

## 🏗️ Arquitetura e Padrões de Design

O projeto segue princípios sólidos de engenharia de software, com uma arquitetura modular, escalável e orientada a domínio (*Domain-Driven*).

### Estrutura de Diretórios

```text
src/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Route Group: Autenticação
│   ├── (admin)/          # Route Group: Rotas administrativas
│   │   └── dashboard/    # Dashboards (Admin e Unidade)
│   └── page.tsx          # Ponto de entrada e redirecionamento
├── assets/               # Mídias e imagens estáticas
├── components/           # Componentes React de UI (Reutilizáveis)
├── hooks/                # Custom Hooks para encapsulamento de lógica
├── lib/                  # Utilitários, configurações e helpers
└── types/                # Definições de tipagem e interfaces TypeScript
```

### Decisões Arquiteturais
1. **Feature-Based Organization:** Organização por domínio funcional (`auth`, `dashboard`), favorecendo baixo acoplamento, alta coesão e facilidade de manutenção.
2. **Asset Import Strategy:** Importação direta de imagens via módulo (`import hero from '@/assets/img.png'`) para garantir otimização automática de imagens do Next.js, versionamento correto e melhor performance de build.
3. **Separation of Concerns (SoC):** Separação estrita entre UI/Apresentação (`components/`), Lógica de Negócio (`hooks/`, `lib/`) e Modelagem de Dados (`types/`).

---

## 📦 Execução Local

Siga os passos abaixo para rodar o projeto em sua máquina:

```bash
# 1. Clone do repositório
git clone [https://github.com/jhonnyemanoell/rede-dor.git](https://github.com/jhonnyemanoell/rede-dor.git)

# 2. Acesse o diretório
cd rede-dor

# 3. Instale as dependências
npm install
# ou use pnpm: pnpm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

> Acesse a aplicação no navegador através do endereço: **http://localhost:3000**

---

## 🔑 Acesso de Demonstração

Para testar a plataforma, utilize as credenciais de teste abaixo:

| Perfil | Login | Senha |
| :--- | :--- | :--- |
| **Administrador** | `admin@rededor.com.br` | *(Qualquer senha)* |
| **Unidade** | Selecione no *Dropdown* | *(Qualquer senha)* |

---

## 🔮 Roadmap Estratégico

O sistema encontra-se em constante evolução para se consolidar como uma plataforma completa de inteligência operacional hospitalar:

- [ ] **🔔 Notificações Ativas:** Alertas automáticos (Push / WhatsApp) pré-vencimento de planos.
- [ ] **🤖 IA Preditiva:** Sugestão automática de planos de ação baseada em histórico de sucesso.
- [ ] **🛡️ Módulo de Ouvidoria:** Canal seguro, anônimo e estruturado focado em *compliance*.
- [ ] **🔐 Cibersegurança:** Implementação de 2FA, criptografia de ponta a ponta e *hardening*.
- [ ] **🔗 Integrações:** Desenvolvimento de APIs para comunicação fluida com sistemas legados da rede.

---

## 📄 Licença

Projeto desenvolvido para o **Hackathon Rede D'Or São Luiz**.  
Todos os direitos reservados.
