import React, { useState } from 'react';
import { Button, Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/Contacts/ContactsSelectors';
import { addContact } from '../../redux/Contacts/ContactsOperations';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(setContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts?.some(
      ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isInContacts) {
      return alert(`${formData.name} is already in contacts`);
    }

    dispatch(addContact(formData));

    setFormData({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number:
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;