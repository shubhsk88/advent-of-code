const readDataFromFile = (file, separator = '\n') => {
  const fs = require('fs');

  const data = fs.readFileSync(file, 'utf-8');

  const values = data.split(separator);
  return values;
};

module.exports = { readDataFromFile };
