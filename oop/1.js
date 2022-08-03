// creating an object and inside the object we created a function
// this is called a method

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: 'Jason',
  age: 20,
  about: personInfo,
};

const person2 = {
  firstName: 'Malan',
  age: 20,
  about: personInfo,
};

const person3 = {
  firstName: 'Roy',
  age: 20,
  about: personInfo,
};

person3.about();

//

// console.log(this);
// console.log(window);

// console.log(this === window);

function myFunc() {
  console.log(this);
}

myFunc();
