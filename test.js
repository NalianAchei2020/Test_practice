const stringLength = require('./string');
const reverseString = require('./task3');
const caculator = require('./caculator');

test('Test if string is less 1', () => {
  expect(() => stringLength('')).toThrow(
    new Error('String must be at least 1 character long')
  );
});

test('Test if string is greater 10', () => {
  expect(() => stringLength('Hello, world!')).toThrow(
    new Error('String cannot be longer than 10 characters')
  );
});

test('Test string length: Failing', () => {
  expect(stringLength('Nalian')).toBe(6);
});

//test for reverse string
test('Reverse String', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

//test for calculator class
describe('calculator', () => {
  test('add method returns the sum of num1 and num2', () => {
    const calculator = new caculator(10, 5);
    expect(calculator.add()).toBe(15);
  });

  test('Substract method returns the difference between num1 and num2', () => {
    const calculator = new caculator(10, 5);
    expect(calculator.substract()).toBe(5);
  });

  test('Divide method returns the quotient of num1 and num2', () => {
    const calculator = new caculator(10, 5);
    expect(calculator.divide()).toBe(2);
  });

  test('Multiply method returns the product of num1 and num2', () => {
    const calculator = new caculator(10, 5);
    expect(calculator.multiply()).toBe(50);
  });
});
