// default parameters

// function add(num1 = 100, num2 = 10) {
//   return num1 + num2;
// }

// const output = add(2, 5);
// console.log(output);

// NaN ==> Not a Number
// console.log(2 + undefined);

// rest paramters

// function myFunc(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const add = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 123234, 234234);
console.log(add);
