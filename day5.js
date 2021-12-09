const { readDataFromFile } = require('./utils');

const values = readDataFromFile('./day-5.txt');

const calculatePoints = (arr) => {
  const hash = {};
  arr.pop();
  let count = 0;
  for (let item of arr) {
    const str = item.replace(/\s+/gi, '').split('->');
    console.log(str);
    const firstPoint = str[0].split(',').map((item) => Number(item));
    const secondPoint = str[1].split(',').map((item) => Number(item));

    const startX =
      firstPoint[0] > secondPoint[0] ? secondPoint[0] : firstPoint[0];
    const endX =
      firstPoint[0] > secondPoint[0] ? firstPoint[0] : secondPoint[0];

    const startY =
      firstPoint[1] > secondPoint[1] ? secondPoint[1] : firstPoint[1];
    const endY =
      firstPoint[1] > secondPoint[1] ? firstPoint[1] : secondPoint[1];
    if (startX === endX) {
      for (let i = startY; i <= endY; i += 1) {
        const coord = `${startX},${i}`;
        if (!hash[coord]) {
          hash[coord] = 0;
        }
        hash[coord] += 1;
      }
    } else if (startY === endY) {
      for (let i = startX; i <= endX; i += 1) {
        const coord = `${i},${endY}`;
        if (!hash[coord]) {
          hash[coord] = 0;
        }
        hash[coord] += 1;
      }
    } else if (startX === startY && endX === endY) {
      console.log({ startX, endX, startY, endY });
      for (let i = startX + 1; i < endX; i += 1) {
        const coord = `${i},${i}`;
        if (!hash[coord]) {
          hash[coord] = 0;
        }
        hash[coord] += 1;
      }
    }
  }

  for (const item in hash) {
    if (hash[item] >= 2) {
      count += 1;
    }
  }
  return count;
};

console.log(
  calculatePoints([
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2',
  ])
);

console.log(calculatePoints(values));
