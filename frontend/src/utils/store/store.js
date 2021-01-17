import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const StateContext = createContext();

// Add intial state of store
const initialState = {
  alert: {
    severity: 'success',
    isOpen: false,
    label: 'Success',
  },
};

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
