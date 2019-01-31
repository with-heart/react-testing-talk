import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {Tabs} from './tabs'

test('shows tabs and active tab content', () => {
  const {getByText, container} = render(
    <Tabs contents={['first!', 'second!']} />,
  )

  // test existence of tabs
  getByText(/1/)
  const tab = getByText(/2/)

  // test first content displayed by default
  getByText(/first/i)
  expect(container).not.toHaveTextContent(/second/i)

  fireEvent.click(tab)
  expect(container).not.toHaveTextContent(/first/i)
  getByText(/second/i)
})
