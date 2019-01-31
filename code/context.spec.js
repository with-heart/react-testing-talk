import React from 'react'
import {render} from 'react-testing-library'
import {status, Provider, Consumer} from './context'

test('status', () => {
  expect(status(30)).toBe('decrepit af')
  expect(status(31)).toBe('decrepit af')
  expect(status(29)).toBe('young & fresh')
})

test('injects the status of provided age', () => {
  let injected
  render(
    <Provider age={30}>
      <Consumer>{consumerProps => (injected = consumerProps) && null}</Consumer>
    </Provider>,
  )
  expect(injected.status).toEqual(status(30))
})
