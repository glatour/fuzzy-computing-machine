import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'

const store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
