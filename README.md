# 🛍️ Loja 34 - Aplicativo Móvel em Expo (React Native) — Projeto Final

Este projeto é um aplicativo completo de catálogo de produtos desenvolvido em **React Native** com **Expo** e totalmente tipado em **TypeScript**. O sistema simula o ambiente de um e-commerce corporativo, utilizando consumo de dados em tempo real, barreiras de segurança física e controle de acessibilidade.

Trabalho final desenvolvido como requisito avaliativo para a disciplina de Desenvolvimento de Aplicativos Móveis.

---

## 👥 Membros da Equipe

- **Matheus da Silveira**
- **Mariana Oliveira**
- **Luiz Antonio**
- **Juliano Coelho**

---

## 🎯 Objetivos e Requisitos Atendidos (Fase 2)

Complementando a Fase 1 Branch (`entrega/fundamentos`) 

O projeto cumpre com excelência todos os critérios técnicos exigidos na segunda fase da disciplina:

- **Fluxo Ágil e Versionamento Coesivo:** Uso rigoroso do GitHub através de um modelo colaborativo. As tarefas foram divididas em branches nominais específicas (`feature/`, `fix/` e `refactor/`), integradas à ramificação principal apenas por Pull Requests documentados e revisados.
- **Telas e Rotas Complexas:** A aplicação conta com 6 telas estruturadas e integradas por um sistema híbrido de **React Navigation Stack** e **React Navigation Drawer**.
- **Autenticação Real via HTTP:** Fluxo de login 100% funcional conectado a um servidor externo por meio da biblioteca **Axios**. Conta com tratamento de erros robusto para capturar credenciais inválidas (Erro 401).
- **Gerenciamento de Estado Global (Context API):** Uso do hook `useContext` para estruturar contextos globais independentes:
  - `AuthContext`: Controla a sessão, dados e permissões do usuário logado por todo o app.
  - `ThemeContext`: Distribui a paleta de cores ativa de forma reativa para todos os componentes.
- **Armazenamento Local Persistente (AsyncStorage):** Utilização do banco de dados físico de chave-valor do dispositivo móvel para reter o Token JWT de login e memorizar a escolha de tema do usuário, mantendo as configurações salvas mesmo se o app for fechado.
- **Operações CRUD Completas:** Execução prática de chamadas assíncronas aos métodos **GET** (listagem de catálogo e detalhes do item), **POST** (cadastro de novos produtos com limpeza temporizada do formulário), **PUT** (edição de dados) e **DELETE** (exclusão com modais nativos de confirmação).
- **Filtros Avançados e Validação:** Implementação de busca por string integrada com filtro dinâmico de categorias (materiais do banco) e proteção de formulários utilizando **React Hook Form** e **Yup**.
- **Acessibilidade (Dark Mode):** Suporte completo a alternância manual de temas (Modo Claro / Modo Escuro). O visual se adapta instantaneamente e de forma fluida por meio de um switch inteligente fixado no menu lateral.

---

## 🛠️ Tecnologias Utilizadas

- React Native & Expo SDK 56
- TypeScript
- React Navigation (Stack & Drawer)
- Axios (Cliente HTTP com Interceptors automáticos de Token)
- React Hook Form & Yup (Validação de Inputs)
- AsyncStorage (Persistência local no dispositivo)
- Expo Vector Icons (Biblioteca de Ícones Nativos)

---

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para instalar as dependências e executar o aplicativo no seu computador:

### 1. Clonar o repositório

```bash
git clone https://github.com/julianoCoelho/loja34-react-native.git
cd loja34-react-native
```

### 2. Instalar todas as dependências do projeto de forma limpa

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento do Expo

```bash
npx expo start -c
```

### 4. Abrir a aplicação

- **No Navegador (Web):** Assim que o menu do Expo carregar no terminal, pressione a **tecla w** no seu teclado.
- **No Celular (Android):** Baixe o aplicativo **Expo Go** na Google Play Store e escaneie o QR Code exibido na tela do seu terminal.

---

## 🔑 Credenciais de Teste Oficiais (API)

Para atravessar a barreira de segurança e carregar os dados reais do banco de dados na internet, utilize as seguintes credenciais ou faça um cadastro:

- **Usuário:** `teste`
- **Senha:** `teste`

*Nota: Caso digite credenciais incorretas, o sistema interceptará a requisição e exibirá uma caixa vermelha nativa com o feedback de erro.*

---

## 📦 Entrega e Build Final (APK)

O projeto foi configurado utilizando a ferramenta **EAS CLI (Expo Application Services)** para compilação profissional em ambiente de nuvem.

O arquivo executável final compilado (**`.apk`**) voltado para instalação direta em smartphones Android está disponível para download na raiz do repositório ou através do link de artefatos do painel do Expo Developer.
