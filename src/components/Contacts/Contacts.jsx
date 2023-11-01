import React from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css';

export const Contacts= (props) => {

    const { contacts, handleDeleteContact } = props;

    return (
      <ul className={css.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteButton}
              onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
}
  Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
  };

export default Contacts;
