import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter, BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import App from './components/App';
// import Home from './components/Home';
// import Repos from './components/Repos';
// import About from './components/About';
// import User from './components/User';
// import Contacts from './components/Contacts';

// ReactDOM.render((
//   <BrowserRouter>  //history={hashHistory}
//     <div>
//       <Route path="/" component={App} />
//     </div>
//   </BrowserRouter>),
//   document.getElementById('app'));

// const App01 = () => (
//   <div>
//     <IndexRoute component={Home} />
//     <Route path="/repos/:name" component={Repos} />
//     <Route path="/about" component={About} />
//     <Route path="/user" component={User} />
//     <Route path="/contacts" component={Contacts} />
//   </div>
// );



const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr/>
      
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = ( {match} ) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering.with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/pros-v-state`}>Props v. State</Link>
      </li>
    </ul>
    
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route 
      exact 
      path={match.url} 
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

// const RedirectWithStatus = ({from, to, status}) => (
//   <Route render={({staticContext}) => {
//     if (staticContext)
//       staticContext.status = status
//     return <Redirect from={from} to={to}/>
//   }} />
// );
// 
// const App = () => (
//   <Switch>
//     <RedirectWithStatus status={301} from="/users" to="/profiles"/>
//     <RedirectWithStatus status={302} from="/courses" to="/dashboard" />
//   </Switch>
// );
// 
// const context = {}

// export default BasicExample;
ReactDOM.render(
  <BasicExample/>,
  document.getElementById('app'),
);



