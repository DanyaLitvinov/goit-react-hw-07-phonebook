import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/ConactsSlice';
import { filterReducer } from './Filters/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});