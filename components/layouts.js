import React from 'react'
import {Split} from 'mdx-deck/layouts'

export const CodeLayout = ({children}) => (
  <div
    style={{
      backgroundColor: '#282a36',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)
