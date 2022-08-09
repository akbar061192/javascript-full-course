// Async js
// AJAX
// using callbacks
// promises
// async await

// console.log('line-1');
// console.log('line-2');

// // for (let i = 0; i <= 1000; i++) {
// //   console.log('running....');
// // }

// setTimeout(() => {
//   console.log('inside set time out');
// }, 3000);

// console.log('line-3');
// console.log('line-4');

// make cakes
// take order ->2seconds
// start processing cake->0seconds
// adding topping -->3sec
// finishing cake-->5sec
// cooling it->2sec
// delivering->1sec

// setTimeout(() => {
//   console.log('order taken--1');
// }, 2000);

// setTimeout(() => {
//   console.log('processing the cake--2');
// }, 0000);

// setTimeout(() => {
//   console.log('adding the toppings--3');
// }, 3000);

// setTimeout(() => {
//   console.log('finishing the cake--4');
// }, 5000);

// setTimeout(() => {
//   console.log('make it cool--5');
// }, 2000);

// setTimeout(() => {
//   console.log('delivered to the customer--6');
// }, 1000);

// const func1 = cb => {
//  console.log('this is func1');
//   cb();
//
// };

// const func2 = () => {
//   console.log('this is func2');
// };

// func1(func2);

// callback hell
// pyramid of doom

setTimeout(() => {
  console.log('order taken--1');
  setTimeout(() => {
    console.log('processing the cake--2');
    setTimeout(() => {
      console.log('adding the toppings--3');
      setTimeout(() => {
        console.log('finishing the cake--4');
        setTimeout(() => {
          console.log('make it cool--5');
          setTimeout(() => {
            console.log('delivered to the customer--6');
          }, 1000);
        }, 2000);
      }, 5000);
    }, 3000);
  }, 0000);
}, 2000);
