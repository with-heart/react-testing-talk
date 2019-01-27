import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'

export const CodeBlock = ({code, options = {}, style, ...props}) => (
  <div style={{fontSize: 18, overflow: 'scroll', ...style}}>
    <CodeMirror
      value={code.trim()}
      options={{
        mode: 'jsx',
        theme: 'dracula',
        lineNumbers: false,
        readOnly: 'nocursor',
        ...options,
      }}
      {...props}
    />
  </div>
)
