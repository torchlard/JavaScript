import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import { Provider, ReactRedux} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import * as actions from './actions'
import App from './component/App'
import {rootEpic} from './epics'
import {rootReducer} from './reducers'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)

// init data (get product) from store
store.dispatch(action.getAllProducts())

// model provider (data source)
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)





