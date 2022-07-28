// primitive vs reference data types

let num1 = 6;
let num2 = num1;

// console.log('value of num1', num1);
// console.log('value of num2', num2);

num1++;

// console.log('after incrementing num1');
// console.log('value of num1', num1);
// console.log('value of num2', num2);

// // reference datatypes --> arrays,objects

let arr1 = ['item1', 'item2'];
let arr2 = arr1;

// oxd11
// oxd11

console.log('value of arr1', arr1);
console.log('value of arr2', arr2);

arr1.push('item3');

// oxd11
// oxd11

console.log('after adding item to arr1');

console.log('value of arr1', arr1);
console.log('value of arr2', arr2);

// primitive

// will create a variable in the stack
// box -- > num1 and num2 are created
// the values of num1 and num2 is assigned
// if you change the value of num1 it just changed only the num1 value since num2 has different variable name
