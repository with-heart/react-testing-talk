test('displays an error message', async () => {
  mockFetchStuff.mockRejectedValue({message: 'HOLY SHIT'})
  const {getByText} = render(<Stuff />)

  fireEvent.click(getByText(/fetch/i))
  getByText(/loading/i)

  await waitForElement(() => getByText(/error:.*holy shit/i))
  getByText(/re-fetch/i)
})
