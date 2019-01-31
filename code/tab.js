import React from 'react'
import './tab.css'

export const Tab = ({children, onClick, active}) => (
  <div onClick={onClick} className={`Tab ${active ? 'active' : ''}`}>
    {children}
  </div>
)
