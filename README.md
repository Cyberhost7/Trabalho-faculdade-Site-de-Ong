# Plataforma Web para ONGs - ONG Impacto Social

![Versão](https://img.shields.io/badge/version-v1.0.0-blue)
![Status](https://img.shields.io/badge/status-concluído-success)
![Licença](https://img.shields.io/badge/license-MIT-green)

Projeto acadêmico da disciplina de **[Nome da sua Disciplina]**, focado no desenvolvimento *Full-Stack* (Frontend) de uma plataforma web completa para Organizações Não-Governamentais (ONGs). O projeto foi construído em quatro etapas, evoluindo de um HTML semântico para uma Single Page Application (SPA) interativa, acessível e otimizada, seguindo práticas profissionais de desenvolvimento e versionamento.

## 🚀 Funcionalidades Principais

* **Arquitetura SPA (Single Page Application):** O site não recarrega. O conteúdo das "páginas" (Início, Projetos, Cadastro) é injetado dinamicamente no DOM via JavaScript, utilizando roteamento por *hash* (`window.location.hash`).
* **Design Responsivo (Mobile-First):** Interface profissional e adaptável a todos os dispositivos, construída com CSS Grid e Flexbox, utilizando um sistema de 12 colunas e 5 *breakpoints*.
* **Sistema de Design (CSS Variables):** Paleta de cores, hierarquia tipográfica e sistema de espaçamento modular (8px) definidos com Variáveis CSS para fácil manutenção e *theming*.
* **Componentes de UI Reutilizáveis:** Botões com estados (`:hover`, `:focus`), *cards* para projetos, *badges*, alertas de feedback e navegação com *dropdown*.
* **Validação de Formulário (JavaScript):** Sistema de verificação de consistência de dados (CPF, CEP, Telefone, E-mail, campos obrigatórios) com feedback de erro em tempo real para o usuário, sem usar a validação nativa do navegador (`novalidate`).
* **Acessibilidade (WCAG 2.1 Nível AA):**
    * **Modo Escuro / Alto Contraste:** Um *toggle* (interruptor) de tema que respeita e salva a preferência do usuário no `localStorage`.
    * **Navegação por Teclado:** O site é 100% navegável utilizando a tecla `TAB`.
    * **Semântica e ARIA:** Uso correto de tags HTML5 semânticas (`<main>`, `<nav>`, `<section>`) e atributos ARIA (`aria-label`, `aria-expanded`) para suporte a leitores de tela.

## 🛠️ Stack de Tecnologias

Este projeto foi construído "do zero" (*vanilla*) para demonstrar domínio fundamental das tecnologias web, sem o uso de *frameworks* de UI (como React ou Vue).

* **HTML5 Semântico**
* **CSS3 Moderno:**
    * CSS Grid & Flexbox
    * Variáveis CSS (Custom Properties)
    * Media Queries (Responsive Design)
* **JavaScript (ES6+):**
    * Manipulação do DOM
    * Eventos (DOM Events)
    * Roteamento de SPA (Hash Routing)
    * JS Templates (Template Literals)
    * `localStorage`
* **Gestão de Projeto e Processos:**
    * **Git** (Controle de Versão)
    * **GitHub** (Repositório)
    * **GitFlow** (Estratégia de Branching: `main`, `develop`, `feature/*`, `chore/*`, `docs/*`)
    * **Commits Semânticos**
    * **Issues, Pull Requests & Releases**

## 📁 Estrutura de Pastas

O projeto segue uma estrutura modular e organizada para separação de responsabilidades (SoC).
/seu-projeto-ong/ | |-- css/ | |-- global.css (Design System: Variáveis, Reset, Tipografia) | |-- layout.css (Grid, Container, Header, Footer) | |-- components.css (Botões, Cards, Formulários, Alertas) | |-- navigation.css (Menu principal, Dropdown, Menu Hamburger) | |-- responsive.css (Media Queries e Breakpoints) | |-- accessibility.css (Estilos do Modo Escuro / Dark Mode) | |-- style.min.css (Arquivo minificado de produção) | |-- js/ | |-- app.js (Código fonte modular: Roteador, Validação, Menu, Tema) | |-- app.min.js (Arquivo minificado de produção) | |-- imagens/ | |-- (Imagens otimizadas em formatos .webp e .jpg) | |-- index.html (A "casca" principal da SPA) |-- README.md (Esta documentação)

## ⚙️ Como Executar o Projeto

### 1. Ambiente de Produção (GitHub Pages)

O projeto está hospedado e pode ser acessado publicamente através do link:

**`https://Cyberhost7.github.io/Trabalho-faculdade-Site-de-Ong/`**

### 2. Localmente

Não é necessário um servidor ou dependências. Como o projeto é 100% *client-side* (HTML, CSS, JS), basta clonar o repositório e abrir o `index.html`.

👤 Autor
Nome: Antonio Pedro Corredor de Sousa

Matrícula: 45699208

GitHub: @Cyberhost7
