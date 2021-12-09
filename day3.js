const { readDataFromFile } = require('./utils');

const getBitRates = (arr) => {
  let len = arr[0].length;
  let mostCommonBit = '',
    leastCommonBit = '';
  for (let i = 0; i < len; i += 1) {
    let count0 = 0;
    let count1 = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j][i] == '0') count0 += 1;
      if (arr[j][i] === '1') count1 += 1;
    }
    if (count0 > count1) {
      mostCommonBit += '0';
      leastCommonBit += '1';
    } else {
      mostCommonBit += '1';
      leastCommonBit += '0';
    }
  }
  return parseInt(mostCommonBit, 2) * parseInt(leastCommonBit, 2);
};

const values = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];
// const values = readDataFromFile('./day3.txt');
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
