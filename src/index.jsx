import 'normalize.css';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import configureStore from './store/configureStore.jsx';

const store = configureStore();

render(
    <Provider store={store}>
        <div className="app">
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
