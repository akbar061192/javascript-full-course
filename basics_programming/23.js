// functions
// functions are the heart of the js

// console.log('happy bday...');
// console.log('happy bday...');
// console.log('happy bday...');
// console.log('happy bday...');
// console.log('happy bday...');

// dry- dont repeat yourself

// function declaration

function singBdaySong() {
  console.log('happy bday...');
}

// singBdaySong();
// singBdaySong();
// singBdaySong();
// singBdaySong();
// singBdaySong();

function add() {
  // console.log(2 + 4);
}

add();

// returning value from a function
function sub() {
  return 10 - 2;
}

const output = sub();
// console.log(output);

// paramters in function

function mul(num1, num2) {
  return num1 * num2;
}

const outputMul = mul(2, 6);
// console.log(outputMul);

// check a number is even or not

// let num = 11;
// if (num % 2 === 0) {
//   console.log('even number');
// } else {
//   console.log('odd number');
// }

// reusable function can be invoked many times
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

const isEvenOut = isEven(25);
const isEvenOut2 = isEven(26);
// console.log(isEvenOut);
// console.log(isEvenOut2);

// write a function
// input : array , target(number)

function findTarget(array, targetNumber) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetNumber) {
      return i;
    }
    return -1;
  }
}

const targetIndex = findTarget([12, 25, 82, 65, 94], 89);
console.log(targetIndex);
