# #7 - React: **<https://redux-zustand-app.netlify.app>**

**OBS**: Essa é a branch main, aqui **simulamos uma API REST com json-server para consumir os dados de aulas direto do Zustand**. Assim, para ver a **versão com Redux** usando **async thunk** para **consumir dados de APIs**, acesse a branch **[redux-with-asyncthunker](https://github.com/Aszurar/redux-and-zustand/tree/redux-with-asyncthunker)**.
Além disso, a **publicação do projeto** foi feito por meio da branch **[develop](https://github.com/Aszurar/redux-and-zustand/tree/develop)** pois nela usamos **dados locais e não simulamos a API**, a fim de facilitar a publicação no Netlify.

<div align="center">
    <img src="https://i.imgur.com/HReNZV3.png" width="1000" alt="Banner">
</div>

## Redux-Zustand App

- O projeto Redux-Zustand App **simula um clone da plataforma de aulas da Rocketseat**, onde é possível **acessar módulos**, **aulas desses módulos** e **progredir automaticamente para a próxima aula**.

- O objetivo do projeto é entender e praticar o uso do **Redux** e **Zustand** para o **gerenciamento de estado** em uma aplicação React com TypeScript e como podemos **consumir APIs REST com essas bibliotecas** por meio de **funções assíncronas com Zustand** e **async thunk com Redux**.

- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse e teste o projeto em: **<https://redux-zustand-app.netlify.app>**

  <div align="center">
    <h3><a href="">Redux-Zustand App</a></h3>


    https://github.com/Aszurar/redux-and-zustand/assets/64987824/9206bf82-d9bc-4c8e-a9a0-93e005027544



  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/03650fc4-9b07-46f5-abd4-cb2e79e256b6/deploy-status)](https://app.netlify.com/sites/redux-zustand-app/deploys) [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=flat&logo=react&link=https://react.dev)](https://react.dev/) [![Redux](https://img.shields.io/badge/Redux-%23593d88.svg?style=flat&logo=redux&link=https://redux.js.org/)](https://redux.js.org/) [![Zustand](https://img.shields.io/badge/Zustand-39312a.svg?style=flat&logo=react&link=https://redux.js.org/)](https://redux.js.org/)  [![TailwindCSS](https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/) [![Radix UI](https://img.shields.io/badge/Radix%20UI-161618.svg?style=flat&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)
</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/7qInlx1.gif" width="400" alt="Gif mostrando o projeto">
</div>

<div align="center" >

**[Vídeo no Youtube](https://www.youtube.com/watch?v=afttgRbwpIw)**

</div>

---

## :information_source: Sobre

- O projeto **Redux-Zustand App** tem o intuito de simular um clone da plataforma de aulas da Rocketseat, onde é possível acessar módulos, aulas desses módulos e progredir automaticamente para a próxima aula.

- O objetivo desse projeto é entender e praticar o uso do **Redux** e **Zustand** para o gerenciamento de estado da aplicação em uma aplicação React com TypeScript e como podemos **consumir APIs REST com essas bibliotecas**.

- A acessibilidade foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis como Modais e Tooltips.

- Esse projeto é derivado do curso de Redux e Zustand da **[Rocketseat](https://www.rocketseat.com.br/)**.
  
- **Tela inicial**

<div align="center" >
      <img src="https://i.imgur.com/61Ifegt.png" width="1000" alt="Tela Inicial">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo de praticar o uso do **Redux** e **Zustand** para o gerenciamento de estado da aplicação em uma aplicação React com TypeScript e como podemos **consumir APIs REST com essas bibliotecas**. 

### Funcionalidades:

  1. Visualização das aulas por meio do **React-Player** com vídeos do YouTube.
  2. Navegação automática para a próxima aula quando a atual terminar.
    - Caso seja a última aula, permanecerá nela caso termine o vídeo.
  3. Consumo dos dados da aula direto do Redux e Zustand.

### O que foi aprendido de novo?

1. Gerenciamento de Estados com **Zustand**:

- Usar o Zustand para **gerenciar estados** de forma mais **simples** e **eficiente**.
- **Consumir APIs REST** com Zustand com **funções assíncronas**.
- **Resgatar dados** do Zustand de forma mais **performática**.

2. Gerenciamento de Estados com **Redux**:

- Usar o Redux para **gerenciar estados** de forma **escalável**.
- **Consumir APIs REST** com Redux com **Async Thunk**.
- **Resgatar dados** do Redux de forma mais **performática**.
- **Integração** do **Redux** com **React** por meio do: **React-Redux** e **Redux Toolkit**.
- Debugar o Redux com a extensão do **Redux DevTools** para o navegador.

---

## :art: Design

- O design do projeto foi feito com base na plataforma de aulas da Rocketseat, com um visual limpo e intuitivo.
- Não teve um design específico feito no Figma ou algo do tipo, foi feito com base no design da plataforma da Rocketseat em aula do curso.

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. ReactJS
  3. Vite
  4. Yarn(ou NPM)

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  3. **[Lucide React](https://lucide.dev/guide/packages/lucide-react)**
  4. **[Netlify](https://www.netlify.com/)**
  5. **[NodeJS](https://nodejs.org/en/)**
  6. **[Radix UI](https://www.radix-ui.com/)**
  7. **[React](https://pt1.br.react.dev/)**
  8. **[React Player](https://github.com/cookpete/react-player)**
  9. **[ReduxJS](https://redux.js.org/)**
  10. **[React Redux](https://react-redux.js.org/)**
  11. **[Redux Toolkit](https://redux-toolkit.js.org/)**
  12. **[TailwindCSS](https://tailwindcss.com/)**
  13. **[TypeScript](https://www.typescriptlang.org/)**
  14. **[Vite](https://vitejs.dev/)**
  15. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**
  16. **[Zustand](https://zustand-demo.pmnd.rs/)**

---

## :truck: Entrega e distribuição continua

**<https://redux-zustand-app.netlify.app>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
   <img src="https://i.imgur.com/6trOjwr.png" width="1000" alt="Projeto publicado no Netlify">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/redux-and-zustand
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
