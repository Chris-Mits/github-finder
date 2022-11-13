import React from 'react'
import {alertReducer} from './AlertReducer'

export const AlertContext = React.createContext(null)

export const AlertProvider = ({children}) => {
  const initialState = null
  const [state, dispatch] = React.useReducer(alertReducer, initialState)

  // Set an alert
  const setAlert = (message, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        message,
        type
      }
    })

    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
  }

  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert
    }}>
      {children}
    </AlertContext.Provider>
  )
}