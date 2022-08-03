class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old`;
  }

  is18() {
    return this.age >= 18;
  }
}

const user1 = new CreateUser('joe', 'butler', 'test', 30, 'new-street');

console.log(user1);
