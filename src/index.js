import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import Login from './containers/login'
import Search from './containers/search'
import reducer from './reducers'
import thunk from 'redux-thunk';
const store = createStore(reducer,  compose(applyMiddleware(thunk)));





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/search' component={Search} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

//registerServiceWorker();
