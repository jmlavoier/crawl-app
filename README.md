# crawl-app
App para busca de termos em **http://hiring.axreng.com/**

## Technologias utilizadas

- Typescript
- React
- Styled-Components
- SWR
- Axios
- Webpack
- Jest
- React Testing Library
- ESLint
- Babel

## Estrutura

O código do projeto está em `src`.  

```
|- src
    |- api
    |- app
    |- assets
    |- components
    |- sections
    |- states
    |- utils
```

Onde foi configurado para que cada subdiretório do *src* seja cosiderado um módulo, deste modo podem ser importados de módo absoluto.

```ts
import api from 'api';
import { Accordion } from 'components';
```

### api

Configuração da instacia do Axios com o host que fica na variável de ambiente. 

### app

Componente principal da aplicação, onde os components de seção são agrupados. 

### assets

Imagens e Fonts

### components

Os dumb components, resonsáveis pela UI da aplicação. Estes componentes não podem ter dependencias de componentes fora deste módulo (components), desta maneira mantendo uma boa coesão, para não gerar acoplamento desnecessário. 

## Testes & ESLint

Os testes ficam no diretório `__testes__` na raiz do projeto. Para isso foi utilizado o **Jest** e **React Testing Library**. Foi possível realizar somente os teste de alguns componentes do diretório `components`. 

O ESLint foi configurado com alguns plugins para auxiciliar no desenvolvimento utilizando Typescript como `airbnb-typescript`, `plugin:@typescript-eslint/recommended` entre outros que servem para garantir a qualidade da aplicação, previnindo problemas com as dependencias dos hooks.

## CI

Foi utilizado o GithubActions para execução dos testes e lint no momento de criar um PR, onde só permite mergear para a `main` caso esteja tudo certo.

## Instalação

Dependencia do `NodeJS v12.16.3`.

Por preferência/costume, foi utilizado o `yarn` como gerênciador de pacotes, mas nada imepede de utilizar o `npm` mesmo.

Clone o repositório dentro do diretório do seu workspace. 
```bash
$ git@github.com:jmlavoier/crawl-app.git
```

## Variável de ambiente

Para o correto functionamento do app, é imprescindível que se crie a variável de ambiente `TESTAPI_HOST`. Para isso, crie um arquivo `.env` com essa variável na raiz do projeto.

## Scripts

#### Start

```bash
$ yarn start

ou 

$ npm start
```

#### Test

```bash
$ yarn build

ou 

$ npm build
```

#### Test

```bash
$ yarn test

ou 

$ npm test
```

#### Test para TDD

```bash
$ yarn test:watch

ou 

$ npm test:watch
```