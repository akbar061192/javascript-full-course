const obj1 = {
  key1: 'value1',
  key2: 'value2',
};

const obj2 = {
  key3: 'value3',
};

// console.log(obj1.key3);
// above line wil not work since key3 is not present in obj1
// console.log(obj2.key3);
// chanining

const user = {};
// normal way to creating an object
console.log(user);

// another way to create an object in js

const obj = Object.create(obj1);
console.log(obj);

obj.newKey = 'new-value';
console.log(obj);
console.log(obj.newKey);
console.log(obj.key1);

//  [[Prototype]]  or __proto__ will create a chain between two objects

// Prototype  -- free space given by js
