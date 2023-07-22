const reverseString = (string) => {
  let splitString = string.split("");
  let reversedString = splitString.reverse();
  let stringJoined = reversedString.join("");
  return stringJoined
}

module.exports = reverseString;