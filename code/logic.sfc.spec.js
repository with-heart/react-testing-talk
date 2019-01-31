import React from 'react'
import {render} from 'react-testing-library'
import {calculateComplexResult, Logic} from './logic.sfc'

test('calculateComplexResult adds two numbers', () => {
  expect(calculateComplexResult(1, 2)).toBe(3)
  expect(calculateComplexResult(-5, -2)).toBe(-7)
})

test('displays the result of complex logic', () => {
  const a = 5
  const b = 10
  const result = calculateComplexResult(a, b).toString()
  const {getByText} = render(<Logic a={a} b={b} />)

  getByText(result)
})
