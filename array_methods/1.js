// javascript array methods
// 2015 --es6 or modern js

// forEach method
// map
// filter
// reduce

// an array
const numbers = [1, 2, 3, 4, 5];

// for (number of numbers) {
//   console.log(number);
// }

// function a(x) {
//   console.log('this is a func a');
//   x();
// }

// function b() {
//   console.log('inside func b');
// }

// a(b);

// 1st param -- > the element of an array
// 2nd param --> the index
// 3rd param --> the array itself

// numbers.forEach(function (element) {
//   console.log(element);
// });

// forEach -- will never return you anything

const items = ['laptop', 'monitor', 'mouse'];

// items.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// map
// similiar to forEach but it returns you a new array

const output = items.map(item => {
  // console.log(item, index, array);
  return item;
});

// console.log(output);

const out = numbers.map(number => {
  return number * 99;
});

// console.log(numbers);
// console.log(out);

// filter method
// similiar to forEach and map but used to apply some conditions

const users = [
  { id: 1, name: 'joe', isValid: false },
  { id: 2, name: 'malan', isValid: true },
  { id: 3, name: 'anderson', isValid: false },
];

// const filterOutput = numbers.filter(number => {
//   return number > 3;
// });

// console.log(filterOutput);

const usersMapOut = users.map(user => {
  return user.isValid === true;
});

// console.log(usersMapOut);

const usersFilterOut = users.filter(user => {
  return user.isValid === true;
});

// console.log(usersFilterOut);

// reduce
// loop thro' the arry and reduce it to a single value

const numbersNew = [1, 2, 3, 4, 5, 124, 235, 24, 234];

const sumOfNumbers = numbersNew.reduce((total, nextVal) => {
  // console.log(total, nextVal);
  return total + nextVal;
}, 0);

// console.log(sumOfNumbers);

const shoppingCart = [
  { productId: 1, productName: 'Mobile', price: 12000 },
  { productId: 2, productName: 'Laptop', price: 24000 },
  { productId: 3, productName: 'Monitor', price: 17000 },
];

const totalPrice = shoppingCart.reduce((total, nextVal) => {
  return total + nextVal.price;
}, 0);

console.log(totalPrice);
