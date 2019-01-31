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
