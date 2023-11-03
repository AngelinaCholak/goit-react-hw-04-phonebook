import React, { useState } from 'react';
import css from './PhoneBook.module.css';
import { GoPersonAdd } from 'react-icons/go';
export const PhoneBook = ({ handleAddContact }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const handleInputChange = event => {
   const { name, value } = event.target;
   if (name === 'name') {
     setName(value); 
   } else if (name === 'number') {
     setNumber(value); 
   }
 };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.phoneBookForm} onSubmit={handleSubmit}>
      <div className={css.inputContainer}>
        <h2>Name</h2>
        <input
          className={css.phoneBookInput}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className={css.inputContainer}>
        <h2>Number</h2>
        <input
          className={css.phoneBookInput}
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <button type="submit" className={css.phoneBookButton}>
        <GoPersonAdd className={css.SearchFormButtonLabel} size={20} />
        Add contact
      </button>
    </form>
  );
};
export default PhoneBook;