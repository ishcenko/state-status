import React from 'react';
import './Todo.css';

const Todo = ({ text, onDelete }) => (
  <div className="TodoList">
    <p className="TodoList__text">{text}</p>
    <button type="button" onClick={onDelete} className="TodoList__button">
      DELETE
    </button>
  </div>
);
export default Todo;
