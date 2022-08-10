# Bet App (for desktop)

Was developped and build using Electron, React and typescript.

# How to start the project

First clone the project using ```git clone```.\
Then run ```npm i``` to install all the necesary dependencies from ```package.json```.

# Available commands
```yarn start``` : start the app for development (you can open an inspector by ```View > Toggle Developper Tools```).

```yarn build``` : generate the installer.

```json-server --w db.json``` : not used for the moment.

# How the project has been initialized

```
npx create-react-app bet-app-desktop --template typescript
cd bet-app-desktop/
yarn add cross-env electron-is-dev
yarn add --dev concurrently electron electron-builder wait-on
yarn add -s react-redux redux redux-thunk redux-devtools-extension
npm i -g json-server
```
These command lines come from the [official React website](https://reactjsexample.com/electron-integration-with-react/).

# Default React.js documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
