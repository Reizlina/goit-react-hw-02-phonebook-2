import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//  import { Formik } from 'formik';
import Notiflix from 'notiflix';

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
  };

  findContact = e => {
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  submitForm = ({ name, number }) => {
    const nameOfContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (nameOfContact) {
      Notiflix.Notify.failure(`${name} is already in contacts`, {
        position: 'center-center',
      });
      return;
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { name: name, number: number, id: nanoid() },
          ],
        };
      });
    }
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

  deleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  render() {
    const { findContact, deleteContact } = this;
    const contacts = this.filterContact();
    return (
      <>
        <Section title="Phonebook">
          <FormInput onFormSubmit={this.submitForm} />
        </Section>
        <Section title="Contacts">
          <SearchContact findContact={findContact} />
          <Contacts contacts={contacts} deleteContact={deleteContact} />
        </Section>
      </>
    );
  }
}

export default Form;
