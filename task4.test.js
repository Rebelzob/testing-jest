const capitalize = require('./task4')

test('this test if the first letter of a string is capitalized', () => {
  const string = 'name';
  const capitalizedString = capitalize(string)
  expect(capitalizedString).toBe('Name')
})