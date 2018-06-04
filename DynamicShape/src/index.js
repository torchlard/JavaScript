import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'


const middleware = [thunk]
middleware.push(createLogger())

const store = createStore(reducers,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)











