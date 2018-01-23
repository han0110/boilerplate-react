# Boilerplate &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This boilerplate is built with React by Webpack.

## 0. Table of Contents

  - [Getting Started](#1-getting-started)
  - [Running the tests](#2-running-the-tests)
  - [Built With](#3-built-with)

## 1. Getting Started

### 1.1 Installing

```
git clone https://github.com/han0110/boilerplate-react && cd boilerplate-react
npm install
rm -rf ./.git
```

To dev
```
npm run dev
```

To build bundle
```
npm run build
```

To deploy to gh-pages
```
npm run deploy
```

## 2. Running the tests

### 2.1 style linting

- JS linting

```
npm run lint
```

- CSS linting

```
npm run lint-styles
```

- CSS autofix

```
npm run lint-styles-fix
```

### 2.2 flow checking

- Checking
```
npm run flow
```

- Build flow-typed node-modules
```
npm run flow-typed
```

## 3. Built With

* [React](https://reactjs.org/) - Framework for frontend
* [Webpack](https://webpack.js.org/) - Modules ➔ Static assets
* [Flow](https://flow.org/en/) - Static type checker
* [CSS-Module](https://github.com/css-modules/css-modules) - CSS modulization
