import React from 'react'
import {githubReducer} from './'

export const GithubContext = React.createContext(null)

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = React.useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </GithubContext.Provider>
  )
}