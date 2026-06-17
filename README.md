# 🛍️ Loja 34 - Aplicativo Móvel em Expo (React Native)

Este projeto é um aplicativo de catálogo de produtos desenvolvido em **React Native** com **Expo** e totalmente tipado em **TypeScript**. O sistema simula o ecossistema de uma loja virtual, contendo barreiras de autenticação, listagem de produtos com filtros avançados, visualização de detalhes e controle de layout dinâmico.

Trabalho final desenvolvido como requisito avaliativo para a disciplina de desenvolvimento de aplicativos móveis.

---

## 👥 Membros da Equipe

- **Matheus da Silveira**
- **Mariana Oliveira**
- **Luiz Antonio**
- **Juliano Coelho**

---

## 🎯 Objetivos e Requisitos Atendidos

O projeto cumpre com excelência todos os requisitos solicitados no exercício prático:

- **Múltiplas Telas (Mínimo 3):** O aplicativo conta com 6 telas estruturadas (`Login`, `Products`, `ProductDetails`, `AddProdict e `Sobre`).
- **Navegação Avançada:** Integração híbrida utilizando **React Navigation Stack** (para fluxos sequenciais e telas flutuantes) e **React Navigation Drawer** (para o menu lateral principal).
- **Componentes Nativos:** Implementação correta de rolagem fluida com `ScrollView`, caixas de texto com `TextInput` e áreas de clique otimizadas com `TouchableOpacity`.
- **Hooks Básicos e Estado Local:** Controle dinâmico de estados e efeitos utilizando os hooks `useState` e `useEffect` para manipular filtros de busca, ordenação de preços e carregamento de dados.
- **Comunicação via Props:** Passagem de propriedades e funções de callback de forma clara entre componentes pais e filhos (ex: `ProductCard` e `Button`).

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev) & [Expo](https://expo.dev)
- [TypeScript](https://typescriptlang.org)
- [React Navigation](https://reactnavigation.org) (Stack & Drawer)
- [React Hook Form](https://react-hook-form.com) & [Yup](https://github.com) (Validação de Formulários)

- [Expo Vector Icons](https://expo.fyi) (Biblioteca de Ícones Nativos)

---

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para instalar as dependências e executar o aplicativo no seu navegador ou celular:

### 1. Clonar o repositório

```bash
git clone https://github.com/julianoCoelho/loja34-react-native.git
cd NOME-DO-REPOSITORIO
```

### 2. Instalar todas as dependências do projeto

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento do Expo

```bash
npx expo start -c
```

### 4. Abrir a aplicação

- **No Navegador (Web):** Assim que o menu do Expo carregar no terminal, pressione a **tecla `w`** no seu teclado.
- **No Celular (Android/iOS):** Baixe o aplicativo **Expo Go** na sua loja de aplicativos e escaneie o QR Code exibido no terminal.

---

## 🔑 Credenciais de Teste (Fake)

Para testar o fluxo de autenticação basta colocar quaisquer dados não está integrado a uma API.

---

##
