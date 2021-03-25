//need this to track basket
import React, { useContext, createContext, useReducer } from 'react'
//this is the data layer
export const StateContext = createContext();

// built a provider
export const StateProvider = ({ reducer , initialState , children}) =>  (
  <StateContext.Provider value={useReducer(reducer , initialState)}>
  {children}
  </StateContext.Provider>
)
 
 export const useStateValue = () =>   useContext(StateContext);
 