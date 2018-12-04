const {
  createGrid,
} = require('./main');

describe('Generate Board Function', () => {
  test('to check if the board is being created', () => {
    expect(createGrid()).toBe(createGrid());
  })
})
