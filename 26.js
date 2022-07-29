// function inside a function

function app() {
  console.log('inside app');

  const myFunc1 = () => {
    console.log('hello from myfunc1');
  };

  const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
  };

  const mul = num => num * 2;

  myFunc1();
  console.log(addTwoNumbers(2, 4));
  console.log(mul(5));
}

// app();

// lexical scope of a function

const number = 900;

function parentFunc() {
  console.log('inside parentFunc ');
  function childFunc() {
    const number = 99;
    console.log('inside childFunc', number);
    console.log('inside childFunc');
  }

  childFunc();
  console.log(number);
}

// parentFunc();

// block vs function scope
// var let and const

// {
//   var myName = 'Joe';
// }

// console.log(myName);

// {
//   let age = 99;
// }

// console.log(age);

// {
//   const email = 'test@gmail.com';
// }

// console.log(email);

// let and const are -- blocked scope

// function scope() {
//   var isValid = true;
// }

// console.log(isValid);

// scope();

if (2 == 2) {
  var email = 'test';
  console.log('true...');
}

console.log(email);
