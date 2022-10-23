import React, { Component } from 'react';
import { AddingContactsForm } from '../AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { PhonebookTitle, ContactsTitle } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

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

  formSubmitHadler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.find(contact => contact.name === name)
      ? toast.error(`Oops, ${name} is already in contacts`, {
          icon: '🙃',
        })
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Toaster />
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <AddingContactsForm onSubmitForm={this.formSubmitHadler} />

        <ContactsTitle>Contacts</ContactsTitle>
        <SearchingFilter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
