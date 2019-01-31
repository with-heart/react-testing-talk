export const fetchStuff = () =>
  new Promise(resolve => {
    setTimeout(() => resolve({stuff: 'SOME STUFF OR WHATEVER'}), 2000)
  })
