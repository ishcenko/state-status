import React from 'react';
import Controls from './Controls';
import Value from 'components/value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1,
  };

  static propTypes = {
    //
  };
  state = { value: this.props.initialValue };
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  // handleIncrement = event => {
  //   console.log('Збільшити на 1');
  //   console.log(this);
  //   console.log(event.target);
  //   console.log(event.type);

  //   const { target } = event;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 5000);
  // };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  // handleDecrement = event => {
  //   console.log('Зменшити на 1');
  //   console.log(this);
  //   console.log(event.target);
  //   console.log(event.type);

  //   const { target } = event;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);
  // };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
