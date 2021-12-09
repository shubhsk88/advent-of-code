const { readDataFromFile } = require('./utils');

const calculateSum = (arr, value) => {
  return arr.reduce((acc, item, index) => {
    const sum = Math.abs(item - value);
    const nestedSum = (sum * (sum + 1)) / 2;

    return acc + nestedSum;
  }, 0);
};
const getMinimumFuel = (arr) => {
  let minimum = Infinity,
    result = 0;
  const max = Math.max(...arr);
  const fixArr = new Array(max).fill(0).map((_, index) => index + 1);
  //   console.log(fixArr);
  for (const item of fixArr) {
    let sum = calculateSum(arr, item);
    if (sum <= minimum) {
      minimum = sum;
      result = item;
    }
    // console.log(sum);
  }
  return minimum;
};

const values = readDataFromFile('./day7.txt', ',').map((item) => Number(item));

// const values = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
// console.log(values);
console.log(getMinimumFuel(values));

// calculateSum(values, 5);
