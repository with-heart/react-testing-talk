import React from 'react'
import {render, waitForElement, fireEvent} from 'react-testing-library'
import {Stuff} from './stuff'
import {fetchStuff as mockFetchStuff} from './api'

jest.mock('./api')
beforeEach(() => jest.resetAllMocks())

test('displays a fetch button and results', async () => {
  mockFetchStuff.mockImplementation(
    () =>
      new Promise(resolve => {
        setTimeout(() => resolve({stuff: 'SOME STUFF'}), 1000)
      }),
  )
  const {getByText} = render(<Stuff />)

  fireEvent.click(getByText(/fetch/i))
  getByText(/loading/i)
  await waitForElement(() => getByText(/thanks for waiting.*some stuff/i))
})

test('displays an error message', async () => {
  mockFetchStuff.mockRejectedValue({message: 'HOLY SHIT'})
  const {getByText} = render(<Stuff />)

  fireEvent.click(getByText(/fetch/i))
  getByText(/loading/i)

  await waitForElement(() => getByText(/error:.*holy shit/i))
  getByText(/re-fetch/i)
})
