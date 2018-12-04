const {
  createGrid,
  checkForWinner,
  check,
  instructions,
} = require('./main');

describe('Winner function', () => {
  test('To see if when you get four consecutive in a column you win', () => {
    expect(check()).toBe(true)
  });

  test('To see if when you get four consecutive in a row you win', () => {
    expect(check()).toBe(true)
  });

  test('To see if when you get four consecutive in a diagonal you win', () => {
    expect(check()).toBe(true)
  });
});

describe('Instruction Function', () => {
  test('Instructions popup on the window', () => {
    expect(instructions()).toBe()
  });
});


