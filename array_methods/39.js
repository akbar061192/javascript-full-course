// sort
// every
// some
// find
// fill
// splice

// sort method

// const months = ['March', 'Jan', 'Feb', 'Dec'];

// console.log(months);
// months.sort();
// console.log(months);

const numbers = [23, 100, 12, 998, 32, 143, 23, 152];
// numbers.sort();
// console.log(numbers);

const out = numbers.sort((a, b) => {
  // console.log(a, b);
  return a - b;
});

// console.log(out);

// find

const findOut = numbers.find(number => {
  return number === 3;
});
// console.log(findOut);

const filterout = numbers.filter(number => {
  return number > 50;
});
// console.log(filterout);

// every

const everyOut = numbers.every(number => {
  return number > 15;
});

// console.log(everyOut);

// some

const someout = numbers.some(number => {
  return number > 1000;
});

// console.log(someout);

// [23, 100, 12, 998, 32, 143, 23, 152];

// const outFill = numbers.fill(0, 2, 4);
// console.log(outFill);

// const array = [1, 2, 3, 4, 5];
// // array.fill(0, 2, 4);
// array.fill(5, 1);
// console.log(array);

// const ou = [1, 2, 3, 4, 5].fill(6);
// console.log(ou);

const months = ['March', 'Jan', 'Feb', 'Dec'];

const newArr = months.slice(0, 3);
console.log(newArr);
// months.splice(0, 3);

months.splice(3, 1, 'May');

console.log(months);
