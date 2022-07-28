// array de-structuring

const myArray = ['value1', 'value2', 'value3', 'value4', 'value5'];

// let firstVal = myArray[0];
// let secVal = myArray[1];
// let thirdVal = myArray[2];

// console.log(firstVal, secVal, thirdVal);

let [, item2, ...otherValues] = myArray;

// const remaining = myArray.slice(2);
// console.log(remaining);
console.log(item2, otherValues);
