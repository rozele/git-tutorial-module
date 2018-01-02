function output(message, indent) {
  const spacing = '  '.repeat(indent || 0)
  console.log(`${spacing}${message}`);
}

module.export = output;
