import React from 'react'
import {hydrate} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import counterApp from './reducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(counterApp, preloadedState)

// hook into data-react-id attributes from server-rendered HTML -> 
// connec to newly started React instance to virtual DOM
hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)


// use (eg. webpack, browserify) to compile bundle file into 'static/bundle.js'


