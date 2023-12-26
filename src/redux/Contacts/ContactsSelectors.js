import { createSelector } from '@reduxjs/toolkit';

export const setContacts = state => state.contacts.items;
export const setFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [setContacts, setFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);