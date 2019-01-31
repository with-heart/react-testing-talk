import React from 'react'

export const TabButton = ({children, onClick}) => (
  <div onClick={onClick}>
    <button onClick={onClick}>{children}</button>
  </div>
)

export const TabContents = ({children}) => (
  <div>
    <div>{children}</div>
  </div>
)
