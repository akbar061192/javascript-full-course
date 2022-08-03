// const person = {
//   firstName: 'joe',
//   age: 30,
//   info: () => {
//     console.log(this);
//     console.log(`name is ${this.firstName} and age is ${this.age}`);
//   },
// };

// person.info();

// console.log(this);

// [[Prototype]] or __proto__

const obj = {};

// console.log(obj);

const obj1 = {
  name: 'joe',
  age: 30,
};

const newObj = Object.create(obj1);

newObj.email = 'testemail';
// console.log(newObj);
// console.log(newObj.email);
// console.log(newObj.name);

function hello() {
  console.log('helloo...');
}

// console.log(hello.name);
// js gives us a free space to store data
//  object => {}

// hello.prototype.age = 20;

console.log(hello.prototype);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// js ==> take the free space  {......} inside prototype and then like this created object with Object.create(freeSpaceobject)
