import React, { Component } from 'react';
import TodoStore from '../../stores/TodoStore.js';

function getAppState(){
  return {
    todos: TodoStore.getTodos()
  };
}

class TodoList extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      todos: []
    };
  }
  {/* if use react as view, bind store listener  */}
  componentDidMount(){
    TodoStore.addChangeListener(this.onChange);
  }
  onChange(event){
    this.setState(getAppState());
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.state.todos.map( (todo, key) => (
              <li key={key}>{todo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
