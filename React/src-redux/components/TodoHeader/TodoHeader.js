import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = ({
  onChangeText, onCreateTodo, todo
}) => (
  <div>
    <input type="text" value={todo.get('text')} onChange={onChangeText}/>
    <button onClick={onCreateTodo}>Sent</button>
  </div>
);

export default TodoHeader;

