import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './ContactsOperations';
import { pendingReducer, fulfilledReducer, rejectedReducer } from 'redux/Helpers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: []
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      }) 
      .addMatcher(action => {
        return action.type.endsWith('pending');
      }, pendingReducer)
      .addMatcher(action => {
        return action.type.endsWith('fulfilled');
      }, fulfilledReducer)
      .addMatcher(action => {
        return action.type.endsWith('rejected');
      }, rejectedReducer);
  },
});

export const contactsReducer = contactsSlice.reducer;