import React, { Component } from 'react';
import './ColorPicker.css';
class ColorPicker extends Component {
  state = {
    activOptionInd: 4,
  };

  setActivInd = index => {
    this.setState({ activOptionInd: index });
  };

  makeOptionClassName = index => {
    const optionClases = ['ColorPicker__option'];
    if (index === this.state.activOptionInd) {
      optionClases.push('ColorPicker__option--active');
    }
    return optionClases.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activOptionInd];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Color: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                onClick={() => this.setActivInd(index)}
                style={{
                  backgroundColor: color,
                  //   border:
                  //     index === this.state.activOptionInd
                  //       ? '3px solid blue'
                  //       : 'none',
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
