import { createRoot } from "react-dom/client";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

const root = createRoot(document.getElementById('root'));
root.render(    <Provider store={store}>
        <App />
    </Provider>);

registerServiceWorker();
