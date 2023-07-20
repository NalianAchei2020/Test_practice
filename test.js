const stringLength = require('./string');

test('Test if string is less 1', () => {
  expect(stringLength('')).toThrow('String must be at least 1 character long');
});

test('Test if string is greater 10', () => {
  expect(stringLength('Hello, world!')).toThrow(
    'String cannot be longer than 10 characters'
  );
});

test('Test string length: Failing', () => {
  expect(stringLength('Nalian')).toBe(6);
});
