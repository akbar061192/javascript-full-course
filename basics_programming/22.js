// computed properties

const key1 = 'myKey1';
const key2 = 'myKey2';

const value1 = 'myVal1';
const value2 = 'myVal2';

const data = {
  [key1]: value1,
  [key2]: value2,
};

// console.log(data);

//spread operator in objects

const obj1 = {
  key1: 'val1',
  key2: 'val2',
};

const obj2 = {
  key3: 'val3',
  key4: 'val4',
  key1: 'new value',
};

const newObj = { ...obj1, ...obj2, key100: 'val100', key1: 'another new value of key1' };

// console.log(newObj);

// object de-structuring

const person = {
  fName: 'Jason',
  lName: 'Roy',
  year: 1982,
  age: 40,
};

// while accessing the object the key names should be same as the object keys

const { age, fName, ...restValues } = person;
// console.log(age, fName);
// console.log(restValues);

// objects inside array
// real time applications

const users = [
  { userId: 1, firstName: 'Jason', lastName: 'Roy', age: 40 },
  { userId: 2, firstName: 'Jason', lastName: 'Roy', age: 41 },
  { userId: 3, firstName: 'Jason', lastName: 'Roy', age: 42 },
];

console.log(users);

for (let user of users) {
  console.log(user.firstName);
}
