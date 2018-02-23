import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import Store from './stores';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={Store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Route path="/" component={Main}/>
        <Route exact path="/" component={HomePageContainer}/>
        <Route path="/result" component={ResultPageContainer}/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
