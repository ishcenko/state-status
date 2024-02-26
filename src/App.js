import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import Form from 'components/Form';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>Стан компонента</h1>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <Counter initialValue={1} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконанних: {completedTodos} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
