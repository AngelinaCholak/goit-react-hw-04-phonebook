import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    // localStorage.removeItem('contacts'); 
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  handleAddContact = contactData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`Contact with the name ${contactData.name} already exists.`);
      return;
    }

    const finalContact = {
      ...contactData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, finalContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: updatedContacts,
      };
    });
  };

  handleFilterChange = filter => {
    this.setState({
      filter: filter,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBook handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <Contacts
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

