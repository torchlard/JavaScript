import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main';
import store form './store';

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>
  , document.getElementById('app')
);





