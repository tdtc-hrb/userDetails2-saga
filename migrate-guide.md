Migrating from React 16.x/17.x/18.x to 19.x
====

## Create
Create a React app with Parcel

### Initial
- mkdir
```
mkdir async
cd async
```
- init
```
npm init -y
```

### React
```
npm install --save react
npm install --save react-dom
```

### other
```
npm install --save redux
npm install --save react-redux
npm install --save isomorphic-fetch
npm install --save redux-saga
```
- prop-types
```
npm install --save prop-types
```

### Parcel
```
npm install --save-dev parcel
```


## Performance
- [Replacing render with createRoot](https://github.com/reactwg/react-18/discussions/5)    
This improvement is mainly to reduce the interference of CallBack on performance;
For hydration, debugging CallBack has no effect!


### [dom render](https://codemod.com/registry/react-19-replace-reactdom-render)
- Before
```
import ReactDom from "react-dom";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
```

- After
```
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom";

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
        <App />
    </Provider>);
```

## Web Page
- public url
- javascript

### PUBLIC_URL
- Before
```
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```
- After
```
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="./favicon.ico">
```


### js
- Before
```
<div id="root"></div>
```
- After
```
<div id="root"></div>
<script type="module" src="../src/index.js"></script>
```

## Ref
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Migrating from create-elm-app to Parcel 2.0](https://medium.com/@FlavioCorpa/migrating-from-create-elm-app-to-parcel-2-0-71e5f2fd0e3)
- [Using Parcel](https://parceljs.org/recipes/react)
- [Building a web app with Parcel](https://parceljs.org/getting-started/webapp)
- [Using Parcel](https://parceljs.org/recipes/react)
- [Change port number](https://parceljs.org/features/development/#dev-server)
