import React, { Component } from 'react';

class FormInput extends Component {
  state = { name: '', number: '' };

  onFormSubmit = e => {
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
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default FormInput;
