import path from 'path'
import Express from 'express'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import counterApp from './reducers'
import App from './containers/App'
import {renderToString} from 'react-dom/server'
import qs from 'qs'


const app = Express()
const port = 3100

const renderFullPage = (html, initialState) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Redux universal</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = 
          ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
    </body>
  </html>
  `
}

// const handleRender = (req, res) => {
//   const store = createStore(counterApp)
//   const html = renderToString(
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   )

//   const preloadedState = store.getState()
//   res.send(renderFullPage(html, preloadedState))
// }

const handleRender = (req, res) => {
  const params = qs.parse(req.q)
  const counter = parseInt(params.counter, 10) || 0

  let preloadedStore = {counter}
  const store = createStore(counterApp, preloadedStore)
  
  const html = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>
  )
  const finalState = store.getState()
  res.send(renderFullPage(html, finalState))
}

app.use(handleRender)
app.listen(port)



