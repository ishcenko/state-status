import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li className="TodoList__item" key={id}>
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          onClick={() => onDeleteTodo(id)}
          className="TodoList__button"
        >
          DELETE
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
