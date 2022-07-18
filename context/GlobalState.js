import React, {useContext, useReducer} from 'react'

// Initial State
const initialState = {
    data: []
}

// Create a context
export const GlobalContext = useContext(initialState)


// Provider Component
export default function GlobalProvider({children}) {
  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  )
}
