import React, { useEffect } from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/Contacts/ContactsSelectors';
import { fetchContacts, deleteContact } from '../../redux/Contacts/ContactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map((contact) => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() =>  dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  )
}

export default ContactList;