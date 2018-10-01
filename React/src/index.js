import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Switch, StaticRouter, BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

//basename="/minoo"

const BasicExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul style={{
        padding: '10px',
        width: "40%",
        background: "#f0f0f0"
      }}>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to={{
            pathname: "/about",
            search: '?sort=name',
            state: { price: 18}
          }}>Abouts</Link>
        </li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/fly">Fly</Link></li>
        <li><Link to="/old/123">old</Link></li>
        <li><Link to="/new/456">new</Link></li>
        <li><Link to="/redirect/789">redirect</Link></li>
        <li><Link to="/protected">protected page</Link></li>
        <li><Link to="/rgb/240/98/146">pink</Link></li>
      </ul>

      <div style={{
        "paddingRight": "50%",
        "float": "right"
      }}>
        <Route exact path="/" component={Home}/> {/* if not exact, it will show everytime */}
          <Switch>  {/* match first one */}
            <Route path="/about" component={About}/>
            <Route path="/about" component={Topics}/>
            <Route path="/topics" component={Topics}/>
          </Switch>
        <Route path="/old/:str"
          render={ ({match}) => (
            <Redirect push to={`/new/${match.params.str}`}/>  /* redirect path to new url, match new render */
        )}/>
        <Route path="/redirect/:str"
          render={ ({match}) => (
            <Redirect push to={`/new/${match.params.str}`} />
        )}/>
        <Route path="/fly" render={ () => <h3>imports antigravity</h3>} />
        <Route path="/new/:str(123|456)"  /* only match 123 or 456 */
          render={ ({match}) => <h1>New: {match.params.str}</h1>}
        />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>

      <div style={styles.content}>
        <TransitionGroup>
          <CSSTransition key={location.key} className="fade" timeout={2000}>
            <Switch location={location}>
              <Route path="/rgb/:r/:g/:b" component={RGB} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>

    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = ({match}) => (
  <div>
    <h2>About</h2>
  </div>
);

// :topicId -> pattern match of url
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
    <Route exact path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    this.isAuthenticated = true;
    setTimeout(cb,100);
  },
  signout(cb){
    this.isAuthenticated = false;
    setTimeout(cb,100);
  }
};

const AuthButton = withRouter(
  ({history}) => fakeAuth.isAuthenticated ? (
    <p>Welcome!{" "}
      <button onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}> Sign out </button>
    </p>
  ) : (
    <p>you are not logged in.</p>
  )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = { props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }} />
      )}
    />
);

const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {redirectToReferrer: false};
    this.login = this.login.bind(this);
  }
  login(){
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  render(){
    const {from} = this.props.location.state || { from: {pathname: "/"}};
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer){
      return <Redirect to={from}/>;
    }
    return (
      <div>
        <p>You must login to view protected page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//
//   componentDidCatch(error, info) {
//     this.setState({ hasError: true });
//     logErrorToMyService(error, info);
//   }
//
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

const RGB = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.rgb,
    // background: '#AAA'
    background: `rgb(${params.r}, ${params.g}, ${params.b})`
  }} >
    rgb({params.r}, {params.g}, {params.b})
  </div>
);

const styles = {};
styles.fill = {
  position: "absolute",
  top: 200,
  opacity: 1,
  transition: "opacity 250ms ease-in"
};
styles.content = {
  ...styles.fill,
  top: "200px",
  textAlign: "center"
};
styles.rgb = {
  ...styles.fill,
  color: "#AAA",
  paddingTop: "20px",
  fontSize: "30px"
};

ReactDOM.render(
  <BasicExample/>,
  document.getElementById('app')
);

console.log('obj');

