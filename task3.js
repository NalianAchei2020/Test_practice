const reverseString = (str) => {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
};

module.exports = reverseString;
