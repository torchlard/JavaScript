import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from 'App';
import About from 'About';
// import Contacts from 'Contacts';
import Home from 'Home';
// import NavLink from 'NavLink';
import Repos from "Repos";
// import User from 'User';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/about" component={About} />
      // <Route path="/user" component={User} />
      // <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('app')
);




