const {
  checkForWinner,
  check,
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
