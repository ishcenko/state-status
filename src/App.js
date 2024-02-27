import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from 'components/Dropdown';
import TodoEditor from 'components/TodoEditor';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import Form from 'components/Form/Form';
import shortid from 'shortid';
import Filter from 'components/Filter/Filter';
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
    filter: '',
  };

  AddTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total));
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.calculateCompletedTodos();
    const visdleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Стан компонента</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <Counter initialValue={1} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконанних: {completedTodos} </p>
        </div>
        <TodoEditor onSubmit={this.AddTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList todos={visdleTodos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
