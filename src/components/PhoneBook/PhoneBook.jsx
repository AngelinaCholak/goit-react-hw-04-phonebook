import React, { Component } from 'react';
import css from './PhoneBook.module.css';

export default class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        className={css.phoneBookForm}
        onSubmit={this.handleSubmit}>
        <h2 >Name</h2>
        <input
          className={css.phoneBookInput}
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <h2>Number</h2>
        <input
          className={css.phoneBookInput}
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit" className={css.phoneBookButton}>
          Add contact
        </button>
      </form>
    );
  }
}
