import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  resetForm = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Ім'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <br />
        <label htmlFor={this.tagInputId}>
          Прізвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        <br />
        <p>Рівень</p>

        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>

        <label>
          Middel
          <input
            type="radio"
            name="experience"
            value="middel"
            onChange={this.handleChange}
            checked={this.state.experience === 'middel'}
          />
        </label>

        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Ok
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}
export default Form;

// https://react.tips/checkboxes-in-react-16/
