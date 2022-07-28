// intro to arrays
// arrays are set of values of different data types order in sequence.

let fruits = ['Apple', 'Grapes', 'Orange', 20, 20.5, false, null, undefined];
console.log(fruits);

// accessing an array
// can be accessed by index
const randomFruit = fruits[2];
console.log(randomFruit);

// getting the length of an array
console.log(fruits.length);

let age = 20;
// type of array is an object
console.log(typeof fruits);

// check for the incoming data type is an array
const array = Array.isArray(fruits);
console.log(array);

// objects
const obj = {};
console.log(typeof obj);
