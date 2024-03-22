// Import the function to test
const { isPalindromo } = require('../server');

// Test case for isPalindromo function
test('isPalindromo should return true for palindromic strings', () => {
  expect(isPalindromo('madam')).toBe(true);
  expect(isPalindromo('racecar')).toBe(true);
  expect(isPalindromo('level')).toBe(true);
});

test('isPalindromo should return false for non-palindromic strings', () => {
  expect(isPalindromo('hello')).toBe(false);
  expect(isPalindromo('world')).toBe(false);
  expect(isPalindromo('javascript')).toBe(false);
});