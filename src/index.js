// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import { store, history } from './redux/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();