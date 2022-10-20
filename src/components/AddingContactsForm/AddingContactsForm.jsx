import React, { Component } from 'react';
import { Formik } from 'formik';
import { contactsSchema } from '../../validation';
import PropTypes from 'prop-types';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsError,
  SubmitButton,
} from './AddingContactsForm.styled';

const initialValues = { name: '', number: '' };

export class AddingContactsForm extends Component {
  handleSubmit = (values, { setSubmitting, resetForm }) => {
    this.props.onSubmitForm(values);
    setSubmitting(false);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={contactsSchema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <ContactsForm>
              <ContactsLabel htmlFor="name">
                Name
                <ContactsInput
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <ContactsError name="name" component="span" />
              </ContactsLabel>
              <ContactsLabel htmlFor="number">
                Number
                <ContactsInput
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <ContactsError name="number" component="span" />
              </ContactsLabel>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Add contact
              </SubmitButton>
            </ContactsForm>
          );
        }}
      </Formik>
    );
  }
}

AddingContactsForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
