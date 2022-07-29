// callback function

function func1(callback) {
  callback(2, 3);
}

function run(n1, n2) {
  console.log('run func');
  console.log(n1 + n2);
}

func1(run);

// the function which has been passed to another is called callback function

// the function which accepts the callback function is known as higher order function

function sayHi() {
  function sayHello() {
    console.log('helloo');
  }
  return sayHello;
}

const ouput = sayHi();
ouput();

// closures
