# goit-react-hw-01-components

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
  development only)
- !!Possible error : found 1 high severity vulnerability run `npm audit fix` to
  fix them, or `npm audit` for details
- npm run build => minified bundle (for production)
- npm install --save-dev prettier husky lint-staged (
  https://github.com/goitacademy/react-lint-config )
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

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
