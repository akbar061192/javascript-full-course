const user1 = {
  firstName: 'Joe',
  age: 20,
  about: function () {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

const user2 = {
  firstName: 'Roy',
  age: 30,
};

// normal way of invocation
// user1.about('cricket', true);

// other way to invocation
// user1.about.call(user2, 'football', false);

// another way
// user1.about.apply(user2, ['badmiton', true]);

// one more way and much useful
const output = user1.about.bind(user2, 'tennis', false);
// output();

// dont do below mistake since the final() invocation is happening at the global level which is window object.
const final = user1.about;
// final();

// user1.about();

// this keyword in arrow functions

const user3 = {
  firstName: 'Joe',
  age: 20,
  about: () => {
    // for arrow function there is no 'this'.
    // it refers to one more scope above of invocation.
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

user3.about.call(user3);
