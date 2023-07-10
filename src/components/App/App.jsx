
import React, { Component } from 'react';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some((contact) => contact.name === name);

    if (isDuplicate) {
      alert('Contact with the same name already exists!');
    } else {
      const newContact = {
        id: `id-${Date.now()}`,
        name,
        number,
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleRemoveContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          addContact={this.handleAddContact}
        />
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
