// objects
// arrays are good but not sufficient
// for real world data
// key : value properties
// objects dont have index

// how to create an object

const person = {
  fullName: 'Mark Thompson',
  age: 28,
  location: 'US',
};

console.log(person);

//access an object

//dot notation
console.log(person.age);

// bracket notation
console.log(person['fullName']);

// add new key and value to an object

person.gender = 'male';

person['email'] = 'test@gmail.com';

console.log(person);
