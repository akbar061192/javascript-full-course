// differences in dot vs bracket notation

let newKey = 'email';

const person = {
  fullName: 'Mark Butcher',
  age: 22,
  'person hobbies': ['music', 'playing'],
};

// console.log(person['person hobbies']);

// person.newKey = 'test@gmail.com';

// person[newKey] = 'test@gmail.com';

// console.log(person);

// looping in objects
// for in loop
// Object.keys

for (let i in person) {
  // console.log(person.i);
  // console.log(person[i]);
}

let keys = Object.keys(person);

for (let key of keys) {
  console.log(key, person[key]);
}
