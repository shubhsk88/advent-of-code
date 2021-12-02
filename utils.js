const readDataFromFile = (file) => {
  const fs = require('fs');

  const data = fs.readFileSync(file, 'utf-8');

  const values = data.split('\n');
  return values;
};

module.exports = { readDataFromFile };
