import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  handleFilterChange = (event) => {
    this.props.handleFilterChange(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className={css.filterContainer}>
        <input
           type="text"
           name="filter"
           className={css.filterInput}
           value={filter}
           onChange={this.handleFilterChange}
        />
        <p className={css.filterLabel}>Find Contacts by name</p>
      </div>
    );
  }
}
