import React from 'react';
import './TodoList.css';
import Todo from 'components/Todo/Todo';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li className="TodoList__item" key={id}>
        <Todo text={text} onDelete={() => onDeleteTodo(id)} />
      </li>
    ))}
  </ul>
);

export default TodoList;
