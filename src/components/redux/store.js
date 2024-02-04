import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './createSlice';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['filter'],
};

export const presistContact = persistReducer(persistConfig, contactReducer);

const rootReducer = combineReducers({
  contacts: presistContact,
});

export const store = configureStore({ reducer: rootReducer });
export const persistor = persistStore(store);
