const { readDataFromFile } = require('./utils');

const values = readDataFromFile('./day2.txt');

const getLocation = (arr) => {
  let xLocation = 0;
  let yLocation = 0;
  for (const item of arr) {
    console.log(item);
    const [position, v] = item.split(' ');
    const value = Number(v);
    if (position === 'down') {
      yLocation += value;
    }
    if (position === 'up') yLocation -= value;
    if (position === 'forward') xLocation += value;
  }
  return xLocation * yLocation;
};

console.log(getLocation(values));
