module.exports = function(message, indent) {
  const spacing = '  '.repeat(indent || 0)
  console.log(`${spacing}${message}`);
};
