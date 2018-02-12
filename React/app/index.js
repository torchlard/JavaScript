import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
}

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<HelloMessage />, document.getElementById('app2'));
ReactDOM.render(<Timer/>, document.getElementById('timer'));

