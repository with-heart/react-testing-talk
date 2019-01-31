import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {Password} from './password'

test('asks the user for their password', () => {
  const onSubmit = jest.fn()
  const {getByLabelText, getByText} = render(<Password onSubmit={onSubmit} />)

  // test DOM nodes
  const password = getByLabelText(/password/i)
  const button = getByText(/continue/i)

  // fill out and test submit
  fireEvent.change(password, {target: {value: 'password'}})
  fireEvent.submit(button, {preventDefault: jest.fn()})
  expect(onSubmit).toHaveBeenCalledWith({password: 'password'})
})
