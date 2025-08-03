# Platform Corretora de Seguros

Este é o repositório do website oficial da Platform Corretora de Seguros, desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O site foi projetado para apresentar os serviços da corretora, fornecer informações de contato e oferecer uma experiência de usuário moderna e responsiva.

## Visão Geral do Projeto

O website da Platform Corretora de Seguros é uma aplicação web moderna e otimizada para performance, construída com as últimas tecnologias de desenvolvimento front-end. Ele serve como um ponto central para clientes e interessados aprenderem sobre os diversos tipos de seguros oferecidos (Vida, Automóvel, Saúde, Imóvel, Acidentes Pessoais, Responsabilidade Civil), solicitarem cotações e entrarem em contato com a equipe.

## Tecnologias Utilizadas

*   **Next.js 14:** Framework React para aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
*   **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
*   **Framer Motion:** Biblioteca para animações de UI fluidas e performáticas.
*   **Lucide React:** Biblioteca de ícones leves e personalizáveis.
*   **next-themes:** Para gerenciamento de temas (claro/escuro).
*   **ESLint:** Para linting de código e garantia de padrões de qualidade.

## Estrutura do Projeto

A estrutura do projeto segue as convenções do Next.js App Router, com uma organização clara dos componentes e páginas:

```
platform_website/
├── app/
│   ├── (routes)/             # Páginas e rotas da aplicação
│   │   ├── contato/
│   │   ├── politica-privacidade/
│   │   ├── recursos/
│   │   ├── servicos/
│   │   │   └── [serviceId]/  # Rotas dinâmicas para serviços específicos
│   │   ├── sobre/
│   │   ├── suporte/
│   │   └── termos-de-servico/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── sections/         # Seções da página inicial (Hero, Services, etc.)
│   │   └── ui/               # Componentes de UI genéricos (Botões, Cards, etc.)
│   ├── error.tsx             # Página de erro global
│   ├── favicon.ico           # Ícone do site
│   ├── globals.css           # Estilos globais e configurações do Tailwind
│   ├── layout.tsx            # Layout principal da aplicação (Header, Footer, ThemeProvider)
│   ├── not-found.tsx         # Página 404
│   └── page.tsx              # Página inicial
├── lib/                      # Utilitários e hooks
│   ├── hooks/
│   │   └── useDebounce.ts
│   └── utils.ts
├── public/                   # Ativos estáticos (imagens, favicons, etc.)
├── .git/                     # Repositório Git
├── .next/                    # Build do Next.js
├── node_modules/             # Dependências do Node.js
├── package.json              # Metadados do projeto e scripts
├── next.config.ts            # Configuração do Next.js
├── tailwind.config.mjs       # Configuração do Tailwind CSS
├── tsconfig.json             # Configuração do TypeScript
└── ...                       # Outros arquivos de configuração
```

## Funcionalidades Principais

*   **Página Inicial Dinâmica:** Apresenta as principais seções da empresa (Hero, Identidade, Serviços, Depoimentos, Estatísticas, Parceiros, CTA) com carregamento dinâmico para otimização.
*   **Listagem de Serviços:** Detalha os diversos tipos de seguros oferecidos, com páginas dedicadas para cada serviço.
*   **Navegação Intuitiva:** Cabeçalho fixo com links para as principais seções e um menu responsivo para dispositivos móveis.
*   **Rodapé Completo:** Informações de contato, links úteis e integração com redes sociais.
*   **Modo Claro/Escuro:** Alternância de tema para melhor experiência visual.
*   **Otimização de Performance:** Uso de `next/dynamic` para lazy loading de componentes e otimização de imagens.
*   **Formulários de Contato:** Páginas dedicadas para contato e solicitação de cotações.
*   **Páginas Informativas:** Seções sobre a empresa, suporte, política de privacidade e termos de serviço.
*   **Design Responsivo:** Layout adaptável a diferentes tamanhos de tela (desktop, tablet, mobile) utilizando Tailwind CSS.

## Como Começar

Siga estas instruções para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18.x ou superior) e o npm (ou yarn) instalados em sua máquina.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd platform_website
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:3000`.

### Build para Produção

Para construir o aplicativo para produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar o aplicativo construído em modo de produção:

```bash
npm run start
# ou
yarn start
```

## Contato

Para mais informações sobre a Platform Corretora de Seguros, visite nosso site ou entre em contato através dos seguintes canais:

*   **Telefone:** +258 87 797 0000
*   **Email:** comercial@platformseguros.com
*   **Endereço:** Av. Vladimir Lenine N. 174, Edifício Millenium Park, 1ºAndar Esq. 1100, Maputo - Moçambique

---