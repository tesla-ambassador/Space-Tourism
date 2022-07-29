import React, {createContext, useReducer} from 'react'
import pageData from '../data.json'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    destinationData: pageData.destinations,
    crewData: pageData.crew,
    techData: pageData.technology
}

// Create a context
export const GlobalContext = createContext(initialState);


// Provider Component
export default function GlobalProvider({children}) {

  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider value={{destinationData: state.destinationData,
    crewData: state.crewData, techData: state.techData}}>
      {children}
    </GlobalContext.Provider>
  )
}
