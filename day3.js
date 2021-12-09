const { readDataFromFile } = require('./utils');

const getBitRates = (arr) => {
  let len = arr[0].length;

  let tempArr = [...arr];
  let tempLessArray = [...arr];
  for (let i = 0; i < len; i += 1) {
    let count0 = 0;
    let count1 = 0;

    let xArray = [];

    for (let j = 0; j < tempArr.length; j += 1) {
      if (tempArr[j][i] == '0') count0 += 1;
      if (tempArr[j][i] === '1') count1 += 1;
    }
    if (tempArr.length === 1) break;
    // console.log(count0, count1);
    for (let j = 0; j < tempArr.length; j += 1) {
      if (count0 > count1) {
        if (tempArr[j][i] === '0') xArray.push(tempArr[j]);
      } else {
        if (tempArr[j][i] === '1') xArray.push(tempArr[j]);
      }
    }
    tempArr = xArray;
  }
  for (let i = 0; i < len; i += 1) {
    let countx = 0,
      county = 0;
    let yArray = [];
    for (let j = 0; j < tempLessArray.length; j += 1) {
      if (tempLessArray[j][i] == '0') countx += 1;
      if (tempLessArray[j][i] === '1') county += 1;
    }
    console.log(countx, county);

    if (tempLessArray.length === 1) break;

    for (let j = 0; j < tempLessArray.length; j += 1) {
      if (countx <= county) {
        if (tempLessArray[j][i] === '0') yArray.push(tempLessArray[j]);
      } else {
        if (tempLessArray[j][i] === '1') yArray.push(tempLessArray[j]);
      }
    }
    tempLessArray = yArray;
  }

  return parseInt(tempArr[0], 2) * parseInt(tempLessArray[0], 2);
};

// const values = [
//   '00100',
//   '11110',
//   '10110',
//   '10111',
//   '10101',
//   '01111',
//   '00111',
//   '11100',
//   '10000',
//   '11001',
//   '00010',
//   '01010',
// ];
const values = readDataFromFile('./day3.txt');
console.log(getBitRates(values));

// [
//   '00100',
//   '11110',
//   '10110',
//   '10111',
//   '10101',
//   '01111',
//   '00111',
//   '11100',
//   '10000',
//   '11001',
//   '00010',
//   '01010',
// ];
