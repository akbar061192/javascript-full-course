// different way of defining/writing a function

// function declaration

function hi() {
  console.log('hi..this is func dec');
}

hi();

// function expression

const hello = function () {
  console.log('hello..this is func exp');
};

hello();

// arrow function

// const hey = () => {
//   console.log('hey..this is arrow func');
// };

// const hey = () => console.log('hey..this is arrow func');

// if function has only one paramter then the paranthesis is ignored
const addNumbers = n1 => n1 + 2;

// hey();

// const output = addNumbers(2, 4);
const output = addNumbers(2);
console.log(output);
