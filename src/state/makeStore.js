import React, { createContext, useReducer, useContext } from 'react';

// Scalable Custom hook to make a store for any part of the component tree
const makeStore = (reducer, initialState) => {
  const dispatchContext = createContext();
  const storeContext = createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  }

  const useDispatch =()  => useContext(dispatchContext);

  const useStore = () => useContext(storeContext);

  return [StoreProvider, useDispatch, useStore];
};

export default makeStore;
