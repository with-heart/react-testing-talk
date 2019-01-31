import React from 'react'

export const calculateComplexResult = (a, b) => a + b

export const Logic = ({a, b}) => (
  <div>
    <h2>Result</h2>
    <div>{calculateComplexResult(a, b)}</div>
  </div>
)
