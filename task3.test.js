const calculator = require('./task3')

describe('Added methods', () => {

  test('testing add method, it must return the addition between 2 numbers', () => {
    // Arrange
    const num1 = 3
    const num2 = 5
    // Act
    const sumTest = calculator.add(num1, num2);
    // Assert 
    expect(sumTest).toBe(8)
  })

  test('testing subtraction method, it must return the subtraction between 2 numbers', () => {
    // Arrange
    const num1 = 8
    const num2 = 5
    // Act
    const subtract = calculator.subtract(num1, num2)
    // Assert
    expect(subtract).toBe(3)
  })

  test('testing division method, it must return the division between 2 numbers', () => {
    // Arrange
    const num1 = 8
    const num2 = 2
    // Act
    const divide = calculator.divide(num1, num2)
    // Assert
    expect(divide).toBe(4)
  })

  test('testing multiplication method, it must return the multiplication between 2 numbers', () => {
    // Arrange
    const num1 = 8
    const num2 = 5
    // Act
    const multiply = calculator.multiply(num1, num2)
    // Assert
    expect(multiply).toBe(40)
  })
})
