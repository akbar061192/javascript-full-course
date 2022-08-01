// Prototype

function hello() {
  console.log('hellooo');
}

hello();
// functions can be treated like an object
console.log(hello.name);

// function =>> function + object

// Prototype -- free space to store data ==> {}

hello.prototype.name = 'akbar';
hello.prototype.age = 28;
hello.prototype.sing = function () {
  return 'singing something....';
};

console.log(hello.prototype);
console.log(hello.prototype.sing());

// prototype is applicable only for functions

let arr = [1, 2, 3];
let obj = {
  key: 'value',
};

let age = 20;

if (hello.prototype) {
  console.log('prototype present');
} else {
  console.log('prototype not present');
}
