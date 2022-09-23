import React, { Component } from 'react';
import s from './FormInput.module.css';
import PropTypes from 'prop-types';

class FormInput extends Component {
  state = { name: '', number: '' };

  formSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
  };

  handleChange = e => {
    this.setState(() => {
      const { name, value } = e.target;
      return { [name]: value };
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          placeholder="Name"
          className={s.input}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <input
          placeholder="Phone"
          className={s.input}
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button className={s.button}>Add contact</button>
      </form>
    );
  }
}

export default FormInput;

FormInput.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
