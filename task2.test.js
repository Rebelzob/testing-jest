const reverseString = require('./task2');

test ('Takes one string and return it reversed', () => {
  const stringToTest = 'Hello';
  const stringResult = reverseString(stringToTest)
  expect(stringResult).toBe('olleH')
})
