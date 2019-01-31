import React from 'react'

const Context = React.createContext({})
export const {Consumer} = Context

export const status = age => (age >= 30 ? 'decrepit af' : 'young & fresh')

export const Provider = ({children, age}) => {
  return (
    <Context.Provider value={{status: status(age)}}>
      {children}
    </Context.Provider>
  )
}

function Usage() {
  return (
    <Provider age={30}>
      <Context.Consumer>{({status}) => <div>{status}</div>}</Context.Consumer>
    </Provider>
  )
}
