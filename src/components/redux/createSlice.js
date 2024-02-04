import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: [], filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { createContact, deleteContact, updateFilter } = contactsSlice.actions;
