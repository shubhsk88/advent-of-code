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

const getThreeMeasurementSingleWindow = (arr) => {
  let prevSum = 0;
  let currentSum = 0,
    count = 0;
  result = [];
  let windowIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    prevSum += Number(arr[i]);
    currentSum = prevSum;
    // Only consider element more than three
    if (i >= 2) {
      result.push(prevSum);
      prevSum -= Number(arr[windowIndex]);
      windowIndex += 1;
    }
  }
  // check the difference
  for (let i = 1; i < result.length; i += 1) {
    if (result[i] - result[i - 1] > 0) count += 1;
  }
  return count;
};
// console.log(getDepthMeasurement(values));

console.log(getThreeMeasurementSingleWindow(values));
