import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducers/reducer'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
