import React from 'react'
import {render} from 'react-testing-library'
import {status, Provider, Consumer} from './context'

test('status', () => {
  expect(status(30)).toBe('decrepit af')
  expect(status(31)).toBe('decrepit af')
  expect(status(29)).toBe('young & fresh')
})

test('injects the status of provided age', () => {
  const {getProps} = setup(30)
  expect(getProps().status).toEqual(status(30))
})

function setup(age) {
  let injected

  return {
    getProps() {
      return injected
    },
    ...render(
      <Provider age={age}>
        <Consumer>
          {consumerProps => (injected = consumerProps) && null}
        </Consumer>
      </Provider>,
    ),
  }
}
