import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css';

export default class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, handleDeleteContact } = this.props;

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
}
