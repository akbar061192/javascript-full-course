function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = new createUser('joe', 'butler', 'testemail', 10, 'new-street');
console.log(user1.is18());

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.concat(100));
