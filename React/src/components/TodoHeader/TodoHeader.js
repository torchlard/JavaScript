import React, { Component } from 'react';
import { TodoActions } from '../../actions/todoActions';

class TodoHeader extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      editing: false
    };
  }
  onChange(event){
    this.setState({
      text: event.target.value
    });
  }
  onAdd(){
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: ''
    });
  }
  render(){
    return(
      <div>
        <h1>todoFlux</h1>
        <input value={this.state.text}
          type="text" placeholder="input pending events"
          onChange={this.onChange}
        />
        <button onClick={this.onAdd}>Sent</button>
      </div>
    );
  }
}

export default TodoHeader;
