import React, {Children} from 'react'
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

export const SplitCodeLayout = ({children}) => {
  const [a, ...rest] = Children.toArray(children.props.children)

  return (
    <div
      style={{
        backgroundColor: '#282a36',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{width: '50%'}}>{a}</div>
      <div style={{width: '50%'}}>{rest}</div>
    </div>
  )
}

export const HorizontalSplit = ({children}) => {
  const [a, ...rest] = Children.toArray(children.props.children)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100vh',
      }}
    >
      <div>{a}</div>
      <div>{rest}</div>
    </div>
  )
}
