import React, { Component } from 'react';
import Clock from 'components/Clock/Clock';
import Counter from './components/Counter';
import Dropdown from 'components/Dropdown';
import TodoEditor from 'components/TodoEditor';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import Form from 'components/Form/Form';
import shortid from 'shortid';
import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
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
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

  componentDidMount() {
    console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // console.log(parsedTodos);
    this.setState({ todos: parsedTodos });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Update todos');

      // localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter, showModal } = this.state;
    const completedTodos = this.calculateCompletedTodos();
    const visdleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Стан компонента</h1>
        <Clock />
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button
              type="button"
              onClick={this.toggleModal}
              className="Close__modal"
            >
              X
            </button>
            <h1>Hello</h1>
            <p>
              Під час кліку на елемент галереї повинно відкриватися модальне
              вікно з темним оверлеєм і відображатися велика версія зображення.
              Модальне вікно повинно закриватися по натисканню клавіші ESC або
              по кліку на оверлеї.
            </p>
          </Modal>
        )}

        <Form onSubmit={this.formSubmitHandler} />

        <Counter initialValue={1} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконанних: {completedTodos.length} </p>
        </div>
        {/* <TodoEditor onSubmit={this.AddTodo} /> */}
        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
        {/* <TodoList todos={visdleTodos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
