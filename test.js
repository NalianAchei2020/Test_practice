const stringLength = require('./string');
const reverseString = require('./task3');

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
