import React, { Component } from 'react';

import Section from './Section/Section';
import FormInput from './FormInput/FormInput';
import Contacts from './Contacts/Contacts';
import SearchContact from './SearchContact/SearchContact';

class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState(() => {
      const { name, value } = e.target;
      return { [name]: value };
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name: name, number: number }],
      };
    });
    e.target.reset();
  };

  findContact = e => {
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filter.toLowerCase());
    });
  };

  render() {
    const { onFormSubmit, handleChange, findContact } = this;
    const contacts = this.filterContact();
    return (
      <>
        <Section title="Phonebook">
          <FormInput onFormSubmit={onFormSubmit} onInputChange={handleChange} />
        </Section>
        <Section title="Contacts">
          <SearchContact findContact={findContact} />
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default Form;
