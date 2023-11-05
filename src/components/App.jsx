import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || initialState;
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);


  const handleAddContact = contactData => {
    const hasDuplicates = contacts.some(
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

    setContacts(prevContacts => [...prevContacts, finalContact]);
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
  };
 

  const handleFilterChange = filter => {
    setFilter(filter);
  };

 const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    const filteredContacts = getFilteredContacts();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <PhoneBook handleAddContact={handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <Contacts
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    );
  }
export default App;


