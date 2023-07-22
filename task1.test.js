const stringLength = require('./task1');


test ('takes any string as an argument and returns its characters count', () => {
  const string = 'Hello';
  const stringLengthResult = stringLength(string);
  expect(stringLengthResult).toBe(5);
});

test('checks if the string length is less than 1', () => {
  const stringEmpty = '';
  expect(() => stringLength(stringEmpty)).toThrow(Error);
});