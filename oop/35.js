function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  console.log(user);
  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = createUser('joe', 'butler', 'testemail', 33, 'new-street');
