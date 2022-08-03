// hoisting

hi();
hello();
hey();

// function declarations are hoisted
function hi() {
  console.log('hi..this is func dec');
}

// exp are not hoisted
let hello = function () {
  console.log('hello..this is func exp');
};

// arrow funct are not hoisted
var hey = () => {
  console.log('hey..this is arrow func');
};

// let and const -- > both are not hoisted
// are hoisted under TDZ -> temporal dead zone
