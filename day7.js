const { readDataFromFile } = require('./utils');

const calculateSum = (arr, value) => {
  return arr.reduce((acc, item) => acc + Math.abs(item - value), 0);
};
const getMinimumFuel = (arr) => {
  let minimum = Infinity,
    result = 0;
  for (const item of arr) {
    let sum = calculateSum(arr, item);
    if (sum <= minimum) {
      minimum = sum;
      result = item;
    }
  }
  return minimum;
};

const values = readDataFromFile('./day7.txt', ',').map((item) => Number(item));

// const values = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
// console.log(values);
console.log(getMinimumFuel(values));
