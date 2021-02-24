# goit-react-hw-01-components

# Getting Started with Create React App

- install NodeJS: https://nodejs.org/en/
- install react: npx create-react-app . => in case of npm only >> npx
  create-react-app . => create me the react project in this root => in case of
  additional yarn existing >> npx create-react-app . --use-npm
- npm install react-scripts@latest ( UPDATE REACT in project: )
- cd createdApp
- npm start => to compile application ( for development )
- folder src => delete all except index.js (index.js clean)
- in each component: import React from 'react'
- npm install --save-dev prop-types => for showing ' type ' kind mistakes ( for
  development only) => POSSIBLE ERROR : found 1 high severity vulnerability run
  `npm audit fix` to fix them, or `npm audit` for details
- npm run build => minified bundle (for production)
- npm install --save-dev prettier husky lint-staged (
  https://github.com/goitacademy/react-lint-config ) => IMPORTANT: npm i
  husky@4.3.7, npm i lint-staged@9.4.2. THE HIGHER VERSIONS MIGHT NOT WORKING
- create file: .huskyrc: { "hooks": { "pre-commit": "lint-staged" } } => husky
  and lint-staged => help connect with git and make additional actions before
  pushing the code
- create file .lintstagedrc: { "src/**/\*.{json,css,scss,md}": ["prettier
  --write"], "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }
  => makes formatting files as JS, JSS, CSS... by prettier and fixing using
  EsLint.
- create in project .prettierrc.json => { "printWidth": 80, "tabWidth": 2,
  "useTabs": false, "semi": true, "singleQuote": true, "trailingComma": "all",
  "bracketSpacing": true, "jsxBracketSameLine": false, "arrowParens": "avoid",
  "proseWrap": "always" }
- CSS: npm install modern-normalize (import)

VSCode extentions:

- Formatting Toggle
- Babel JavaScript
- ES7 React/Redux...
- Simple React Snippets

REACT TOOLS:

- Chrome dev tools React: React Developer Tools Extention

ADDITIONAL:

- Cntrl + Shift + p => if > => open settings, else file searching
