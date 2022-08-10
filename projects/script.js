// Date object

const myDate = new Date('1 Nov 2022');
const myTime = myDate.getTime();
console.log(myTime);
const date = new Date();
const myDateTime = date.getTime();
console.log(myDateTime);

const diff = myTime - myDateTime;
console.log(diff);

// console.log(date.getTime());

// // unix time system
// // epoch time convention
// // 1970

// const newDate = new Date('January 1, 70 00:00:00 GMT+00:00');

// console.log(newDate.getTime());

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.getFullYear());
// console.log(date.getUTCFullYear());
// console.log(date.toJSON());
