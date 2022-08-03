// js is synchronous and single threaded language
// AJAX => A stands for async

// js code runs in execution context
// call stack

// function first() {
//   console.log('first func');
//   second();
// }

// function second() {
//   console.log('second func');
//   third();
// }

// function third() {
//   console.log('third func');
// }

// first();

// var x = 100;
// var y = 200;

// let a = 10;
// const pi = 3.14;

// function sum(n1, n2) {
//   var total = n1 + n2;
//   return total;
// }

// var sum1 = sum(2, 3);
// var sum2 = sum(4, 5);

// console.log(sum1);
// console.log(sum2);

// blocking vs non-blocking code

// console.log('running..start');

// for (let i = 0; i <= 10000; i++) {
//   console.log('running for loop');
// }

// console.log('running..end');

// async - non-blocking code
// web api's

console.log('running start....');

setTimeout(() => {
  console.log('running set timeout');
}, 3000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

console.log('running end....');
