import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <span>0</span>
        <div className="Counter__controls">
          <button type="button">Збільшити на 1</button>
          <button type="button">Зменшити на 1</button>
        </div>
      </div>
    );
  }
}
export default Counter;
