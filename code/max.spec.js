import React from 'react'
import {render, fireEvent} from 'react-testing-library'

const Max = ({number, max}) => (
  <div>Your number is {number > max ? max : number}</div>
)

test('shows number or max if past max', () => {
  const {getByText, rerender} = render(<Max number={1} max={20} />)
  getByText(/number is 1/i)
  rerender(<Max number={30} max={20} />)
  getByText(/number is 20/)
})
