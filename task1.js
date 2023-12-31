
const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error ('string length should be between 1 and 10 characters')
  }
  return string.length;
}

module.exports = stringLength;