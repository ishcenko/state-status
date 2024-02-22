import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  handleIncrement = event => {
    console.log('Збільшити на 1');
    console.log(this);
    console.log(event.target);
  };
  handleDecrement = event => {
    console.log('Зменшити на 1');
    console.log(this);
    console.log(event);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
