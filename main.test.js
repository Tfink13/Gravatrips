




const {
  sum,
} = require('./main');


describe('Sum Function', () => {

  test('Adds 2 and 3 to get 5', () => {
    expect(sum(2, 3)).toBe(5);
  })
});

describe('Begin Game Function', () => {
  test('Defines if the game has started or not', () => {
    expect(beginGame(true))
  })
})
