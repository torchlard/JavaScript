import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Remarkable from 'remarkable';
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    var names = ['Alice', 'Emily', 'Kate'];
    var arr = [
      <h1>hello world!</h1>,
      <h2>react is awesome</h2>
    ];
    return (
      <ul>
        {
          names.map((name, index) => {
            return (<li key={index} style={{color: "#0000FF", fontSize: '30px'}}>{name}</li>);
          })
        }
      </ul>
    );
  }
}

// class HelloMessage extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {}
//   }
//   render(){
//     return (
//       <div>Hello {this.props.name}
//       <p>{this.props.swing}</p>
//       </div>
//     );
//   }
// }

const HelloMessage = (props) => (
  <div>Hello {props.name}
  <p>{props.swing}</p>
  </div>
);

HelloMessage.propTypes = {
  name: PropTypes.string,
  swing: PropTypes.string
}
HelloMessage.defaultProps = {
  name: 'Zuckerburg',
  swing: 'ballet'
}

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { secondsElapsed: 0 }
  }
  tick(){
    this.setState({ secondsElapsed: this.state.secondsElapsed+1 });
  }
  componentDidMount(){
    this.interval = setInterval( this.tick ,1000);
  }
  componentWillMount(){
    clearInterval(this.interval);
  }
  render(){
    return(
      <div>seconds elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

const TodoList = (props) => (
  <ul>
    {
      props.items.map((item) => {
        <li key={item.id}>{item.text}</li>
      })
    }
  </ul>
)

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [],
      text: ''
    }
  }

  onChange(e){
    this.setState({ text: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    const nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
    const nextText = '';
    this.setState({ items: nextItems, text: nextText });
  }

  render(){
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>{'Add #'+ (this.state.items.length+1)}</button>
        </form>
      </div>
    );
  }
}

class MarkdownEditor extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.state = {
      value: 'type some *markdown* here!'
    }
  }
  handleChange(){
    this.setState({ value: this.refs.textarea.value });
  }
  rawMarkup(e){
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render(){
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea onChange={this.handleChange}
          ref="textarea" defaultValue={this.state.value}/>
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

// ######################### State Machine ###############################

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: "Mark"
    }
  }
  handleClick(){
    this.setState({ 'name': 'Zuck' });
  }
  componentWillMount(){
    console.log('component will mount');
  }
  componentDidMount(){
    console.log('component did mount');
  }
  componentWillReceiveProps(){
    console.log('component will receive props');
  }
  componentWillUpdate(){
    console.log('component will udpate');
  }
  componentDidUpdate(){
    console.log('component did update');
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }
  render(){
    return(
      <div onClick={this.handleClick}>hi, {this.state.name}</div>
    );
  }
}

class UserGitHub extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      githubtUrl: '',
      avatarUrl: ''
    }
  }
  componentDidMount(){
    $.get(this.props.source, (result)=> {
      console.log(result);
      const data = result;
      if (data) {
        this.setState({
          username: data.name,
          githubtUrl: data.html_url ,
          avatarUrl: data.avatar_url
        });
      }
    });
  }
  render(){
    return (
      <div>
        <h3>{this.state.username}</h3>
        <img src={this.state.avatarUrl}/>
        <a href={this.state.githubtUrl}>Github Link</a>
      </div>
    );
  }
}



// ReactDOM.render(<App/>, document.getElementById('app'));
// ReactDOM.render(<HelloMessage />, document.getElementById('app2'));
// ReactDOM.render(<Timer/>, document.getElementById('timer'));
// ReactDOM.render(<TodoApp/>, document.getElementById('todo'));
// ReactDOM.render(<MarkdownEditor/>, document.getElementById('markdown'));
// ReactDOM.render(<MyComponent/>, document.getElementById('MyComponent'));
ReactDOM.render(<UserGitHub source="https://api.github.com/users/torvalds"/>, document.getElementById('UserGitHub'));
