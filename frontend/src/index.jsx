import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import Promise from 'redux-promise'

import App from './main/app'
import Reducers from './main/reducers'

const store = applyMiddleware(Promise)(createStore)(Reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))