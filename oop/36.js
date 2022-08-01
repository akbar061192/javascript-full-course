function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};

const user1 = new createUser('akbar', 28);
console.log(user1);
user1.about();

// new keyword
// 1) creates an empty object called this. and it assign the this = {}
// 2) return the this object
