import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ handleFilterChange, filter }) => {
  const handleChange = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        value={filter}
        onChange={handleChange}
      />
      <p className={css.filterLabel}>Find Contacts by name</p>
    </div>
  );
};

export default Filter;

