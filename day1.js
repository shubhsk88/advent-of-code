const fs = require('fs');

const data = fs.readFileSync('./input1.txt', 'utf-8');

const values = data.split('\n');

const getDepthMeasurement = (arr) => {
  let count = 0;

  for (let i = 1; i < arr.length; i += 1) {
    let first = Number(arr[i - 1]);
    let second = Number(arr[i]);
    if (second - first > 0) {
      count += 1;
    }
  }
  return count;
};

console.log(getDepthMeasurement(values));
