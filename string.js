const stringLength = (str) => {
  let len = str.length;
  if (len < 1) {
    console.log('String must be at least 1 character long');
  } else if (len > 10) {
    console.log('String cannot be longer than 10 characters');
  }
  return len;
};

module.exports = stringLength;
