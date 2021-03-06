import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userdetails from './store/userdetails';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    red:userdetails
});

const store=createStore(rootReducer, applyMiddleware(thunk));

const app = <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
